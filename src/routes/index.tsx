import { createFileRoute } from "@tanstack/react-router";
import {
  profile, summary, education, skillGroups, projects, achievements, languages,
} from "@/components/portfolio/data";
import { ArrowUpRight, Download, Mail, Phone, MapPin, Github, Linkedin, Code2, Trophy } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Rokesh V — Software Engineer & Full-Stack Developer" },
      { name: "description", content: "Portfolio of Rokesh V — CSE undergrad (CGPA 9.2) building AI, full-stack and Android applications in Chennai." },
      { property: "og:title", content: "Rokesh V — Portfolio" },
      { property: "og:description", content: "AI, full-stack and Android projects by Rokesh V." },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Person",
        name: profile.name,
        jobTitle: "Software Engineer",
        email: profile.email,
        telephone: profile.phone,
        address: profile.location,
        url: "/",
        sameAs: Object.values(profile.links),
      }),
    }],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-[var(--bone)] text-[var(--ink)] font-sans selection:bg-[var(--accent-lime)] selection:text-[var(--ink)]">
      <Nav />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Awards />
      <Profiles />
      <Footer />
    </div>
  );
}

function Nav() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-[var(--bone)]/80 border-b border-black/10">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 h-14 flex items-center justify-between">
        <a href="#top" className="font-mono text-xs tracking-[0.2em] uppercase">RV / Portfolio</a>
        <nav className="hidden md:flex items-center gap-7 font-mono text-xs uppercase tracking-[0.18em]">
          <a href="#about" className="hover:text-[var(--ink)]/60 transition">About</a>
          <a href="#skills" className="hover:text-[var(--ink)]/60 transition">Skills</a>
          <a href="#work" className="hover:text-[var(--ink)]/60 transition">Work</a>
          <a href="#contact" className="hover:text-[var(--ink)]/60 transition">Contact</a>
        </nav>
        <a
          href="/rokesh-venkat-resume.pdf"
          download
          className="inline-flex items-center gap-2 rounded-full bg-[var(--ink)] text-[var(--bone)] px-4 py-2 text-xs font-mono uppercase tracking-[0.15em] hover:bg-[var(--ink)]/80 transition"
        >
          <Download size={14} /> Resume
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden border-b border-black/10">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 pt-16 pb-20 lg:pt-28 lg:pb-32">
        <div className="font-mono text-xs uppercase tracking-[0.25em] text-[var(--muted-ink)] mb-8 flex items-center gap-3">
          <span className="inline-block w-8 h-px bg-[var(--ink)]" />
          Available for Internships — 2026
        </div>
        <h1 className="font-display leading-[0.85] tracking-tight text-[clamp(4rem,14vw,12rem)]">
          Rokesh<br />
          <span className="italic">Venkat.</span>
        </h1>
        <div className="mt-10 grid lg:grid-cols-12 gap-10 items-end">
          <p className="lg:col-span-7 text-xl lg:text-2xl leading-snug max-w-2xl">
            I design and build <span className="bg-[var(--accent-lime)] px-1">AI-powered</span>,
            full-stack and Android applications — from healthcare platforms to
            real-time collaboration tools.
          </p>
          <div className="lg:col-span-5 flex flex-col gap-3 font-mono text-sm">
            <Chip icon={<MapPin size={14} />}>{profile.location}</Chip>
            <Chip icon={<Mail size={14} />}><a href={`mailto:${profile.email}`}>{profile.email}</a></Chip>
            <Chip icon={<Phone size={14} />}>{profile.phone}</Chip>
          </div>
        </div>
        <div className="mt-12 flex flex-wrap gap-3">
          <a href="/rokesh-venkat-resume.pdf" download
             className="group inline-flex items-center gap-2 rounded-full bg-[var(--ink)] text-[var(--bone)] px-6 py-3 text-sm font-mono uppercase tracking-[0.15em] hover:bg-[var(--accent-lime)] hover:text-[var(--ink)] transition">
            Download Resume <Download size={16} className="group-hover:translate-y-0.5 transition" />
          </a>
          <a href="#contact"
             className="inline-flex items-center gap-2 rounded-full border border-[var(--ink)] px-6 py-3 text-sm font-mono uppercase tracking-[0.15em] hover:bg-[var(--ink)] hover:text-[var(--bone)] transition">
            Get in touch <ArrowUpRight size={16} />
          </a>
        </div>
      </div>
      {/* big background watermark */}
      <div aria-hidden className="pointer-events-none absolute -bottom-10 -right-6 font-display italic text-[18vw] leading-none text-[var(--ink)]/[0.04] select-none">
        engineer
      </div>
    </section>
  );
}

function Chip({ icon, children }: { icon: React.ReactNode; children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 text-[var(--ink)]">
      <span className="text-[var(--muted-ink)]">{icon}</span>{children}
    </span>
  );
}

function Section({ id, label, title, children }: { id: string; label: string; title: React.ReactNode; children: React.ReactNode }) {
  return (
    <section id={id} className="border-b border-black/10">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-20 lg:py-28">
        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-4">
            <div className="font-mono text-xs uppercase tracking-[0.25em] text-[var(--muted-ink)] mb-3">{label}</div>
            <h2 className="font-display text-5xl lg:text-6xl leading-[0.95]">{title}</h2>
          </div>
          <div className="lg:col-span-8">{children}</div>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <Section id="about" label="01 — About" title={<>Built for shipping.</>}>
      <p className="text-lg lg:text-xl leading-relaxed">{summary}</p>
      <div className="mt-10 rounded-2xl border border-[var(--ink)] p-6 lg:p-8 bg-[var(--ink)] text-[var(--bone)]">
        <div className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--accent-lime)]">Education</div>
        <div className="mt-3 font-display text-3xl lg:text-4xl leading-tight">{education.degree}</div>
        <div className="mt-1 text-[var(--bone)]/70">{education.school}</div>
        <div className="mt-6 flex flex-wrap gap-6 font-mono text-sm">
          <div><span className="text-[var(--bone)]/50">Graduation</span> &nbsp;{education.graduation}</div>
          <div><span className="text-[var(--bone)]/50">CGPA</span> &nbsp;<span className="text-[var(--accent-lime)] text-lg">{education.cgpa}</span></div>
        </div>
      </div>
    </Section>
  );
}

function Skills() {
  return (
    <Section id="skills" label="02 — Toolkit" title="Stack & craft.">
      <div className="grid sm:grid-cols-2 gap-x-10 gap-y-8">
        {skillGroups.map((g) => (
          <div key={g.label}>
            <div className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--muted-ink)] mb-3 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-lime)] ring-2 ring-[var(--ink)]" />
              {g.label}
            </div>
            <div className="flex flex-wrap gap-2">
              {g.items.map((it) => (
                <span key={it} className="rounded-full border border-[var(--ink)]/20 px-3 py-1 text-sm hover:bg-[var(--ink)] hover:text-[var(--bone)] transition">
                  {it}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

function Projects() {
  return (
    <Section id="work" label="03 — Selected work" title="Things I've built.">
      <div className="space-y-6">
        {projects.map((p, i) => (
          <article key={p.name}
            className="group relative rounded-3xl border border-[var(--ink)]/15 p-6 lg:p-10 bg-white/40 hover:bg-[var(--ink)] hover:text-[var(--bone)] transition-colors duration-300">
            <div className="flex items-start justify-between gap-6">
              <div>
                <div className="font-mono text-xs uppercase tracking-[0.2em] opacity-60">
                  {String(i + 1).padStart(2, "0")} / Project
                </div>
                <h3 className="mt-2 font-display text-4xl lg:text-5xl leading-tight">{p.name}</h3>
                <div className="mt-1 italic text-lg opacity-80">{p.subtitle}</div>
              </div>
              <ArrowUpRight size={28} className="shrink-0 group-hover:rotate-45 transition-transform" />
            </div>
            <ul className="mt-6 space-y-2 text-[15px] leading-relaxed max-w-3xl">
              {p.bullets.map((b) => (
                <li key={b} className="flex gap-3">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[var(--accent-lime)] shrink-0" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 flex flex-wrap gap-2 font-mono text-xs">
              {p.stack.map((s) => (
                <span key={s} className="px-2.5 py-1 rounded-full border border-current/30 opacity-80">{s}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}

function Awards() {
  return (
    <Section id="awards" label="04 — Recognition" title="Wins & milestones.">
      <div className="grid md:grid-cols-2 gap-6">
        <div className="rounded-2xl border border-[var(--ink)]/15 p-6">
          <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-[var(--muted-ink)]">
            <Trophy size={14} /> Certification
          </div>
          <div className="mt-3 font-display text-2xl">HackerRank Software Engineer</div>
          <p className="mt-2 text-sm text-[var(--muted-ink)]">
            Software development and problem-solving assessment.
          </p>
        </div>
        <div className="rounded-2xl border border-[var(--ink)]/15 p-6">
          <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-[var(--muted-ink)]">
            <Code2 size={14} /> Achievements
          </div>
          <ul className="mt-3 space-y-2 text-sm">
            {achievements.map((a) => (
              <li key={a} className="flex gap-2"><span className="text-[var(--accent-lime)]">▸</span>{a}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="mt-8 flex flex-wrap gap-2">
        {languages.map((l) => (
          <span key={l.name} className="rounded-full bg-[var(--ink)] text-[var(--bone)] px-4 py-1.5 text-sm font-mono">
            {l.name} <span className="opacity-50 ml-1">· {l.level}</span>
          </span>
        ))}
      </div>
    </Section>
  );
}

function Profiles() {
  const items = [
    { label: "GitHub", url: profile.links.github, handle: "@rokesh-venkat" },
    { label: "LeetCode", url: profile.links.leetcode, handle: "@rokesh_lc" },
    { label: "HackerRank", url: profile.links.hackerrank, handle: "@RokeshVenkat" },
    { label: "SkillRack", url: profile.links.skillrack, handle: "id 547835" },
  ];
  return (
    <Section id="profiles" label="05 — Coding profiles" title="Where I practice.">
      <div className="grid sm:grid-cols-2 gap-4">
        {items.map((it) => (
          <a key={it.label} href={it.url} target="_blank" rel="noreferrer"
             className="group flex items-center justify-between rounded-2xl border border-[var(--ink)]/15 p-5 hover:bg-[var(--accent-lime)] transition-colors">
            <div>
              <div className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--muted-ink)] group-hover:text-[var(--ink)]">{it.label}</div>
              <div className="font-display text-2xl mt-1">{it.handle}</div>
            </div>
            <ArrowUpRight size={22} className="group-hover:rotate-45 transition-transform" />
          </a>
        ))}
      </div>
    </Section>
  );
}

function Footer() {
  return (
    <footer id="contact" className="bg-[var(--ink)] text-[var(--bone)]">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-20 lg:py-28">
        <div className="font-mono text-xs uppercase tracking-[0.25em] text-[var(--accent-lime)]">Let's build something</div>
        <h2 className="mt-4 font-display text-[clamp(3rem,9vw,8rem)] leading-[0.9]">
          Say <span className="italic">hello.</span>
        </h2>
        <p className="mt-6 max-w-2xl text-[var(--bone)]/70 text-lg">
          Seeking Software Development, Full-Stack, AI/ML, or Software Engineering
          internships where I can ship impactful work and keep growing as an engineer.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <a href={`mailto:${profile.email}`}
             className="inline-flex items-center gap-2 rounded-full bg-[var(--accent-lime)] text-[var(--ink)] px-6 py-3 font-mono text-sm uppercase tracking-[0.15em] hover:opacity-90 transition">
            <Mail size={16} /> {profile.email}
          </a>
          <a href={profile.links.linkedin} target="_blank" rel="noreferrer"
             className="inline-flex items-center gap-2 rounded-full border border-[var(--bone)]/30 px-6 py-3 font-mono text-sm uppercase tracking-[0.15em] hover:bg-[var(--bone)] hover:text-[var(--ink)] transition">
            <Linkedin size={16} /> LinkedIn
          </a>
          <a href={profile.links.github} target="_blank" rel="noreferrer"
             className="inline-flex items-center gap-2 rounded-full border border-[var(--bone)]/30 px-6 py-3 font-mono text-sm uppercase tracking-[0.15em] hover:bg-[var(--bone)] hover:text-[var(--ink)] transition">
            <Github size={16} /> GitHub
          </a>
        </div>
        <div className="mt-20 pt-8 border-t border-[var(--bone)]/10 flex flex-wrap items-center justify-between gap-4 font-mono text-xs uppercase tracking-[0.2em] text-[var(--bone)]/50">
          <div>© {new Date().getFullYear()} Rokesh V</div>
          <div>Designed & built in Chennai</div>
        </div>
      </div>
    </footer>
  );
}
