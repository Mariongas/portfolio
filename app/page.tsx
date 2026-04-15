export default function Home() {
  const projects = [
    {
      title: "TEYSAR System",
      description:
        "Desktop management system for production, inventory, quality control, and operations. Built with a modular architecture focused on real industrial workflows.",
      tech: ["Python", "Flet", "PostgreSQL", "SQLAlchemy"],
      link: "#",
      code: "#",
    },
    {
      title: "Condominios Amity",
      description:
        "Full-stack web platform for condominium ticket management, dashboards, and role-based workflows with a strong focus on usability and administration.",
      tech: ["Laravel", "Livewire", "MySQL", "Blade"],
      link: "#",
      code: "#",
    },
    {
      title: "Motivauto",
      description:
        "Automotive service marketplace concept focused on connecting drivers with trusted nearby workshops through geolocation, filters, and transparent service discovery.",
      tech: ["Product Strategy", "UX Thinking", "Marketplace Design"],
      link: "#",
      code: "#",
    },
  ];

  const skills = [
    "Python",
    "Laravel",
    "Next.js",
    "React",
    "TypeScript",
    "PostgreSQL",
    "MySQL",
    "SQLAlchemy",
    "Flet",
    "REST APIs",
    "UI/UX",
    "System Architecture",
    "Automation",
    "Git",
  ];

  return (
    <main className="min-h-screen bg-black text-white">
      <div className="mx-auto max-w-6xl px-6 py-10 md:px-10 lg:px-12">
        {/* Header */}
        <header className="mb-20 flex items-center justify-between border-b border-white/10 pb-6">
          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-white/50">
              Portfolio
            </p>
            <h1 className="mt-2 text-lg font-semibold">Mariano Gonzalez</h1>
          </div>

          <nav className="hidden gap-6 text-sm text-white/70 md:flex">
            <a href="#about" className="transition hover:text-white">
              About
            </a>
            <a href="#projects" className="transition hover:text-white">
              Projects
            </a>
            <a href="#experience" className="transition hover:text-white">
              Experience
            </a>
            <a href="#contact" className="transition hover:text-white">
              Contact
            </a>
          </nav>
        </header>

        {/* Hero */}
        <section className="mb-28 grid gap-10 lg:grid-cols-[1.3fr_0.7fr] lg:items-center">
          <div>
            <p className="mb-4 inline-block rounded-full border border-white/10 bg-white/5 px-4 py-1 text-sm text-white/70 backdrop-blur">
              Software Engineer • Full Stack Development • Real-world Systems
            </p>

            <h2 className="max-w-4xl text-5xl font-bold leading-tight md:text-7xl">
              Building software that feels{" "}
              <span className="bg-gradient-to-r from-white to-white/40 bg-clip-text text-transparent">
                solid, scalable, and useful
              </span>
              .
            </h2>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/65">
              I’m Mariano Gonzalez Barrientos, a Software Engineer from Mexico
              focused on full stack development, software architecture,
              automation, and practical digital solutions for real businesses.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="rounded-2xl border border-white bg-white px-6 py-3 font-medium text-black transition hover:scale-[1.02]"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="rounded-2xl border border-white/15 bg-white/5 px-6 py-3 font-medium text-white transition hover:border-white/30 hover:bg-white/10"
              >
                Contact Me
              </a>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <div className="rounded-2xl border border-white/10 bg-black/40 p-6">
              <p className="text-sm uppercase tracking-[0.2em] text-white/45">
                Quick Snapshot
              </p>

              <div className="mt-6 space-y-5">
                <div>
                  <p className="text-sm text-white/45">Focus</p>
                  <p className="mt-1 text-base text-white/85">
                    Full stack systems, architecture, automation, and product
                    thinking
                  </p>
                </div>

                <div>
                  <p className="text-sm text-white/45">Experience Area</p>
                  <p className="mt-1 text-base text-white/85">
                    Industrial systems, dashboards, admin platforms, internal
                    tools
                  </p>
                </div>

                <div>
                  <p className="text-sm text-white/45">Based in</p>
                  <p className="mt-1 text-base text-white/85">Mexico</p>
                </div>

                <div>
                  <p className="text-sm text-white/45">Graduation</p>
                  <p className="mt-1 text-base text-white/85">
                    Polytechnic University of Pachuca, 2026
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About */}
        <section
          id="about"
          className="mb-24 grid gap-10 border-t border-white/10 pt-16 lg:grid-cols-[0.9fr_1.1fr]"
        >
          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-white/45">
              About
            </p>
            <h3 className="mt-3 text-3xl font-semibold md:text-4xl">
              I like building systems that solve actual problems.
            </h3>
          </div>

          <div className="space-y-5 text-base leading-8 text-white/65">
            <p>
              My work is centered on creating software that is not only
              functional, but also maintainable, scalable, and aligned with
              real operational needs. I enjoy working on both frontend and
              backend, connecting user experience with solid system logic.
            </p>
            <p>
              I have experience developing business-oriented platforms such as
              management systems, dashboard-based solutions, administrative
              tools, and marketplace concepts. I’m especially interested in
              architecture, security, automation, and designing workflows that
              make systems more efficient.
            </p>
            <p>
              I’m always looking to improve the quality of what I build — not
              just visually, but structurally.
            </p>
          </div>
        </section>

        {/* Skills */}
        <section className="mb-24 border-t border-white/10 pt-16">
          <p className="text-sm uppercase tracking-[0.25em] text-white/45">
            Skills
          </p>
          <h3 className="mt-3 text-3xl font-semibold md:text-4xl">
            Technologies and areas I work with
          </h3>

          <div className="mt-10 flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80 transition hover:border-white/25 hover:bg-white/10"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="mb-24 border-t border-white/10 pt-16">
          <p className="text-sm uppercase tracking-[0.25em] text-white/45">
            Projects
          </p>
          <h3 className="mt-3 text-3xl font-semibold md:text-4xl">
            Selected work
          </h3>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {projects.map((project) => (
              <article
                key={project.title}
                className="group rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition duration-300 hover:-translate-y-1 hover:border-white/25 hover:bg-white/[0.05]"
              >
                <div className="mb-5 h-44 rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/[0.02]" />

                <h4 className="text-2xl font-semibold">{project.title}</h4>

                <p className="mt-4 text-sm leading-7 text-white/65">
                  {project.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tech.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/10 px-3 py-1 text-xs text-white/60"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <div className="mt-8 flex gap-4">
                  <a
                    href={project.link}
                    className="text-sm font-medium text-white transition hover:text-white/70"
                  >
                    Live Preview
                  </a>
                  <a
                    href={project.code}
                    className="text-sm font-medium text-white/55 transition hover:text-white"
                  >
                    Source Code
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Experience */}
        <section
          id="experience"
          className="mb-24 border-t border-white/10 pt-16"
        >
          <p className="text-sm uppercase tracking-[0.25em] text-white/45">
            Experience
          </p>
          <h3 className="mt-3 text-3xl font-semibold md:text-4xl">
            What I’ve been building
          </h3>

          <div className="mt-10 space-y-6">
            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
              <div className="flex flex-col justify-between gap-3 md:flex-row md:items-start">
                <div>
                  <h4 className="text-xl font-semibold">
                    Software Engineering Projects
                  </h4>
                  <p className="mt-2 text-white/60">
                    Academic and real-world development
                  </p>
                </div>
                <p className="text-sm text-white/40">2024 — 2026</p>
              </div>

              <p className="mt-5 max-w-3xl text-sm leading-7 text-white/65">
                Designed and developed systems focused on production
                management, ticket administration, dashboards, business
                workflows, and digital product ideas. My work has involved both
                technical implementation and solution design.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
              <div className="flex flex-col justify-between gap-3 md:flex-row md:items-start">
                <div>
                  <h4 className="text-xl font-semibold">
                    Full Stack Development
                  </h4>
                  <p className="mt-2 text-white/60">
                    Frontend, backend, databases, and system structure
                  </p>
                </div>
                <p className="text-sm text-white/40">Ongoing</p>
              </div>

              <p className="mt-5 max-w-3xl text-sm leading-7 text-white/65">
                Worked with modern stacks and practical architectures to build
                interfaces, business logic, database models, and application
                flows that support real use cases instead of only mockups.
              </p>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="border-t border-white/10 pt-16">
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 md:p-10">
            <p className="text-sm uppercase tracking-[0.25em] text-white/45">
              Contact
            </p>
            <h3 className="mt-3 text-3xl font-semibold md:text-4xl">
              Let’s build something meaningful.
            </h3>
            <p className="mt-4 max-w-2xl text-base leading-8 text-white/65">
              I’m interested in opportunities where I can contribute through
              software engineering, system design, and practical problem
              solving.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="mailto:gonzalezbarrientosmariano@gmail.com"
                className="rounded-2xl border border-white bg-white px-6 py-3 font-medium text-black transition hover:scale-[1.02]"
              >
                Email Me
              </a>

              <a
                href="#"
                className="rounded-2xl border border-white/15 bg-white/5 px-6 py-3 font-medium text-white transition hover:border-white/30 hover:bg-white/10"
              >
                LinkedIn
              </a>

              <a
                href="#"
                className="rounded-2xl border border-white/15 bg-white/5 px-6 py-3 font-medium text-white transition hover:border-white/30 hover:bg-white/10"
              >
                GitHub
              </a>
            </div>

            <p className="mt-8 text-sm text-white/35">
              gonzalezbarrientosmariano@gmail.com
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}