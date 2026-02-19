import { NextResponse } from "next/server";

export async function GET() {
  const username = "byamged";
  const res = await fetch(`https://api.github.com/users/${username}/repos?per_page=100&sort=updated`, {
    headers: {
      Accept: "application/vnd.github+json",
    },
    // GitHub is fine to cache briefly
    next: { revalidate: 3600 },
  });

  if (!res.ok) {
    return NextResponse.json({ error: "Failed to fetch repos" }, { status: 500 });
  }

  const repos = (await res.json()) as any[];

  // Filter: ignore forks, sort by stars then recent update
  const filtered = repos
    .filter((r) => !r.fork)
    .sort((a, b) => (b.stargazers_count - a.stargazers_count) || (new Date(b.pushed_at).getTime() - new Date(a.pushed_at).getTime()))
    .slice(0, 6)
    .map((r) => ({
      name: r.name,
      html_url: r.html_url,
      description: r.description,
      language: r.language,
      stargazers_count: r.stargazers_count,
      forks_count: r.forks_count,
      pushed_at: r.pushed_at,
    }));

  return NextResponse.json({ repos: filtered });
}
