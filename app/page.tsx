"use client";

import { useEffect, useState } from "react";

type Repo = {
  name: string;
  html_url: string;
  description: string | null;
  language: string | null;
  stargazers_count: number;
};

export default function Home() {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/repos")
      .then((r) => r.json())
      .then((data) => setRepos((data?.repos as Repo[]) || []))
      .catch(() => setRepos([]))
      .finally(() => setLoading(false));
  }, []);

  return (
    <main className="min-h-screen text-[#c9d1d9]">
      {/* NAV */}
      <nav className="sticky top-0 z-50 border-b border-white/10 bg-[#0d1117]/75 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#top" className="text-lg font-semibold tracking-wide">
            Amged<span className="text-sky-400">.</span>
          </a>

          <div className="hidden items-center gap-6 text-sm text-[#8b949e] md:flex">
            <a className="hover:text-[#c9d1d9] transition" href="#about">
              About
            </a>
            <a className="hover:text-[#c9d1d9] transition" href="#experience">
              Experience
            </a>
            <a className="hover:text-[#c9d1d9] transition" href="#labs">
              Labs
            </a>
            <a className="hover:text-[#c9d1d9] transition" href="#contact">
              Contact
            </a>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="https://github.com/byamged"
              target="_blank"
              className="rounded-lg border border-white/15 px-3 py-2 text-sm hover:border-white/25 transition"
            >
              GitHub
            </a>
            <a
              href="mailto:amged.developer@gmail.com"
              className="rounded-lg bg-[#238636] px-3 py-2 text-sm font-medium text-white hover:brightness-110 transition"
            >
              Email
            </a>
          </div>
        </div>
      </nav>

      <div id="top" className="mx-auto max-w-6xl px-6 py-14">
        {/* HERO */}
        <section className="grid items-center gap-12 md:grid-cols-2">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-[#8b949e]">
              Personal Portfolio • Node.js Track
              <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />
              Student
            </p>

            <h1 className="mt-5 text-5xl font-bold leading-tight md:text-6xl text-[#e6edf3]">
              Amged <span className="text-sky-400">|</span> Software Engineer
            </h1>

            <p className="mt-6 max-w-xl text-[#8b949e] text-lg leading-relaxed">
              Edit this text later
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              <a
                href="#contact"
                className="rounded-xl bg-[#238636] px-6 py-3 font-medium text-white hover:brightness-110 hover:scale-[1.02] transition duration-200"
              >
                Contact
              </a>

              <a
                href="#labs"
                className="rounded-xl border border-white/15 px-6 py-3 font-medium hover:border-white/25 transition"
              >
                Labs
              </a>

              <button
                type="button"
                onClick={() =>
                  navigator.clipboard.writeText("amged.developer@gmail.com")
                }
                className="rounded-xl border border-white/15 px-6 py-3 font-medium hover:border-white/25 transition"
                title="Copy email"
              >
                Copy Email
              </button>
            </div>

            <div className="mt-10 flex flex-wrap gap-2 text-xs text-[#8b949e]">
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">
                Discipline
              </span>
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">
                Clarity
              </span>
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">
                Consistency
              </span>
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">
                Problem Solving
              </span>
            </div>
          </div>

          <div className="flex justify-center md:justify-end">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4 shadow-2xl">
              <img
                src="/avatar.png"
                alt="Amged"
                className="h-72 w-72 rounded-xl object-cover transition hover:scale-[1.02]"
              />
              <div className="mt-4 grid grid-cols-3 gap-3 text-center">
                <div className="rounded-xl border border-white/10 bg-[#0d1117]/40 px-3 py-3">
                  <p className="text-xs text-[#8b949e]">Focus</p>
                  <p className="mt-1 text-sm font-semibold text-[#e6edf3]">
                    Node.js
                  </p>
                </div>
                <div className="rounded-xl border border-white/10 bg-[#0d1117]/40 px-3 py-3">
                  <p className="text-xs text-[#8b949e]">Style</p>
                  <p className="mt-1 text-sm font-semibold text-[#e6edf3]">
                    Clean
                  </p>
                </div>
                <div className="rounded-xl border border-white/10 bg-[#0d1117]/40 px-3 py-3">
                  <p className="text-xs text-[#8b949e]">Status</p>
                  <p className="mt-1 text-sm font-semibold text-[#e6edf3]">
                    Building
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="mt-20 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-7">
            <h2 className="text-xl font-semibold text-[#e6edf3]">About</h2>
            <p className="mt-4 text-[#8b949e] leading-relaxed">
              Placeholder text
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-7">
            <h2 className="text-xl font-semibold text-[#e6edf3]">Principles</h2>
            <ul className="mt-4 space-y-2 text-[#8b949e]">
              <li>• Discipline over motivation</li>
              <li>• Clear communication</li>
              <li>• Respect for time</li>
              <li>• Continuous improvement</li>
              <li>• Reliability</li>
            </ul>
          </div>
        </section>

        {/* EXPERIENCE */}
        <section id="experience" className="mt-20">
          <h2 className="text-xl font-semibold text-[#e6edf3]">Experience</h2>
          <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-7">
            <div className="flex flex-col gap-1 md:flex-row md:items-center md:justify-between">
              <h3 className="text-base font-semibold text-[#e6edf3]">
                Technical Support
              </h3>
              <p className="text-sm text-[#8b949e]">
                Troubleshooting • Communication • Diagnosis
              </p>
            </div>
            <ul className="mt-4 space-y-2 text-[#8b949e]">
              <li>• Diagnosed issues and guided users to solutions.</li>
              <li>• Explained steps clearly and professionally.</li>
              <li>• Learned consistency and clean problem-solving.</li>
            </ul>
          </div>
        </section>

        {/* LABS (AUTO) */}
        <section id="labs" className="mt-20">
          <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="text-xl font-semibold text-[#e6edf3]">Labs</h2>
              <p className="mt-2 text-[#8b949e]">
                Auto-loaded from GitHub (top repos).
              </p>
            </div>
            <a
              href="https://github.com/byamged"
              target="_blank"
              className="inline-flex w-fit items-center rounded-xl border border-white/15 px-4 py-2 text-sm hover:border-white/25 transition"
            >
              View GitHub
            </a>
          </div>

          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {loading ? (
              <>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-7 text-[#8b949e]">
                  Loading…
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-7 text-[#8b949e]">
                  Loading…
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-7 text-[#8b949e]">
                  Loading…
                </div>
              </>
            ) : repos.length ? (
              repos.map((repo) => (
                <a
                  key={repo.name}
                  href={repo.html_url}
                  target="_blank"
                  className="group rounded-2xl border border-white/10 bg-white/5 p-7 hover:border-white/25 transition"
                >
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="text-base font-semibold text-[#e6edf3] group-hover:text-sky-400 transition">
                      {repo.name}
                    </h3>
                    <span className="text-xs text-[#8b949e]">
                      ★ {repo.stargazers_count}
                    </span>
                  </div>

                  <p className="mt-3 text-sm text-[#8b949e] leading-relaxed">
                    {repo.description || "No description yet."}
                  </p>

                  <div className="mt-4 text-xs text-[#8b949e]">
                    {repo.language || "—"}
                  </div>
                </a>
              ))
            ) : (
              <div className="rounded-2xl border border-white/10 bg-white/5 p-7 text-[#8b949e] md:col-span-3">
                No public repos found yet.
              </div>
            )}
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="mt-20">
          <h2 className="text-xl font-semibold text-[#e6edf3]">Contact</h2>
          <p className="mt-2 text-[#8b949e]">Simple and reliable.</p>

          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-7">
              <p className="text-sm text-[#8b949e]">Email</p>
              <p className="mt-2 font-medium text-[#e6edf3]">
                amged.developer@gmail.com
              </p>
              <a
                className="mt-4 inline-flex w-fit rounded-xl bg-[#238636] px-5 py-3 font-medium text-white hover:brightness-110 transition"
                href="mailto:amged.developer@gmail.com"
              >
                Send Email
              </a>
            </div>

            <form
              className="rounded-2xl border border-white/10 bg-white/5 p-7"
              onSubmit={(e) => {
                e.preventDefault();
                const form = e.currentTarget;
                const name = (form.elements.namedItem("name") as HTMLInputElement)
                  .value;
                const message = (
                  form.elements.namedItem("message") as HTMLTextAreaElement
                ).value;

                const subject = encodeURIComponent("Message from Amged Portfolio");
                const body = encodeURIComponent(
                  `Name: ${name}\n\nMessage:\n${message}`
                );
                window.location.href = `mailto:amged.developer@gmail.com?subject=${subject}&body=${body}`;
              }}
            >
              <label className="block text-sm text-[#8b949e]">
                Your name
                <input
                  name="name"
                  className="mt-2 w-full rounded-xl border border-white/15 bg-[#0d1117]/60 px-4 py-3 text-[#c9d1d9] outline-none focus:border-sky-500"
                  placeholder="John Doe"
                />
              </label>

              <label className="mt-4 block text-sm text-[#8b949e]">
                Your message
                <textarea
                  name="message"
                  className="mt-2 min-h-[120px] w-full rounded-xl border border-white/15 bg-[#0d1117]/60 px-4 py-3 text-[#c9d1d9] outline-none focus:border-sky-500"
                  placeholder="Write your message..."
                />
              </label>

              <button
                type="submit"
                className="mt-4 w-full rounded-xl border border-white/15 px-4 py-3 font-medium hover:border-white/25 transition"
              >
                Send
              </button>
            </form>
          </div>
        </section>

        <footer className="mt-20 border-t border-white/10 pt-10 text-center text-sm text-[#8b949e]">
          © {new Date().getFullYear()} Amged • Built with Next.js
        </footer>
      </div>
    </main>
  );
}
