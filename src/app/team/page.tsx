import Image from "next/image";
import Link from "next/link";

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-white pt-8">
      {/* Reuse pill navbar style */}
      <div className="sticky top-4 z-20 flex w-full justify-center px-4">
        <nav className="inline-flex items-center gap-1 rounded-full bg-[#2CB7AE] px-2 py-1 text-xs font-semibold text-white shadow-md shadow-[#2CB7AE]/40 backdrop-blur-sm sm:text-sm">
          <Link
            href="/"
            className="rounded-full px-4 py-2 text-[11px] text-white/90 hover:bg-white/10 sm:px-6 sm:text-sm"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="rounded-full px-4 py-2 text-[11px] text-white/90 hover:bg-white/10 sm:px-6 sm:text-sm"
          >
            About
          </Link>
          <Link
            href="/team"
            className="rounded-full bg-white px-4 py-2 text-[11px] text-[#2CB7AE] shadow-sm sm:px-6 sm:text-sm"
          >
            Team
          </Link>
          <Link
            href="/get-involved"
            className="rounded-full px-4 py-2 text-[11px] text-white/90 hover:bg-white/10 sm:px-6 sm:text-sm"
          >
            Get Involved
          </Link>
          <Link
            href="https://www.gofundme.com/f/CATCH-inc-holiday-toy-drive"
            className="rounded-full px-4 py-2 text-[11px] text-white/90 hover:bg-white/10 sm:px-6 sm:text-sm"
          >
            Donate
          </Link>
        </nav>
      </div>

      <main className="mx-auto max-w-6xl px-4 py-12">
        {/* Hero / intro */}
        <section className="grid gap-10 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] md:items-center">
          <div>
            <h1 className="text-4xl font-semibold tracking-tight text-[#253158] sm:text-5xl">
              Meet the CATCH Team
            </h1>
            <p className="mt-6 text-base leading-relaxed text-[#4b4f63] sm:text-lg">
              CATCH is powered by students, clinicians, and community partners
              who believe every child deserves access to the power of play.
            </p>
          </div>
          <div className="relative h-64 w-full overflow-hidden rounded-3xl bg-[#fff7eb] shadow-md sm:h-80">
            <Image
              src="/2.png"
              alt="CATCH team photo"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 28rem, 100vw"
            />
          </div>
        </section>

        {/* Leadership Team section */}
        <section className="mt-16">
          <h2 className="text-3xl font-semibold tracking-tight text-[#111827] text-center sm:text-4xl">
            Leadership Team
          </h2>
          <p className="mt-2 text-center text-sm leading-relaxed text-[#4b4f63] sm:text-base">
            Our dedicated leaders guide CATCH&apos;s mission to make adaptive
            toys accessible for all children.
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {[
              {
                name: "Michael Weaver",
                role: "President",
                description:
                  "Leading CATCH's strategic vision and overseeing all operations to maximize our impact on children's lives.",
                image: "/16.png",
              },
              {
                name: "Drew McRacken",
                role: "Vice President",
                description:
                  "Supporting organizational leadership and coordinating key initiatives across CATCH programs.",
                image: "/17.png",
              },
              {
                name: "Maddie Dyson",
                role: "Treasurer",
                description:
                  "Managing CATCH's finances and ensuring resources are allocated effectively to serve more children.",
                image: "/18.png",
              },
            ].map((person) => (
              <article
                key={person.name}
                className="overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-black/5"
              >
                <div className="relative h-52 w-full overflow-hidden bg-[#f3f4f6]">
                  <Image
                    src={person.image}
                    alt={person.name}
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 18rem, 100vw"
                  />
                </div>
                <div className="px-5 pb-5 pt-4">
                  <h3 className="text-base font-semibold text-[#111827]">
                    {person.name}
                  </h3>
                  <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-[#2CB7AE]">
                    {person.role}
                  </p>
                  <p className="mt-2 text-xs leading-relaxed text-[#4b4f63] sm:text-sm">
                    {person.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Campus Team cards */}
        <section className="mt-16">
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                name: "Delaney Cowart",
                role: "Secretary",
                description:
                  "Maintaining organizational records and facilitating communication across the CATCH network.",
                image: "/19.png",
              },
              {
                name: "Darci Anderson",
                role: "University Ambassador",
                description:
                  "Representing CATCH and building connections with university communities and student organizations.",
                image: "/20.png",
              },
              {
                name: "Bryce Menichella",
                role: "University Ambassador",
                description:
                  "Representing CATCH and building connections with university communities and student organizations.",
                image: "/21.png",
              },
            ].map((person) => (
              <article
                key={person.name}
                className="overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-black/5"
              >
                <div className="relative h-52 w-full overflow-hidden bg-[#f3f4f6]">
                  <Image
                    src={person.image}
                    alt={person.name}
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 18rem, 100vw"
                  />
                </div>
                <div className="px-5 pb-5 pt-4">
                  <h3 className="text-base font-semibold text-[#111827]">
                    {person.name}
                  </h3>
                  <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-[#2CB7AE]">
                    {person.role}
                  </p>
                  <p className="mt-2 text-xs leading-relaxed text-[#4b4f63] sm:text-sm">
                    {person.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* University Chapters */}
        <section className="mt-16">
          <h2 className="text-2xl font-semibold tracking-tight text-[#111827] text-center sm:text-3xl">
            University Chapters
          </h2>
          <p className="mt-2 text-center text-sm leading-relaxed text-[#4b4f63] sm:text-base">
            CATCH chapters across North Carolina bring students together to
            adapt toys, run workshops, and partner with local communities.
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <article className="overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-black/5">
              <div className="relative h-40 w-full overflow-hidden bg-[#f3f4f6] sm:h-48">
                <Image
                  src="/11.png"
                  alt="UNC Chapel Hill chapter"
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 20rem, 100vw"
                />
              </div>
              <div className="px-5 pb-5 pt-4 text-center">
                <h3 className="text-base font-semibold text-[#111827]">
                  UNC Chapel Hill
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-[#4b4f63] sm:text-sm">
                  Our founding chapter, leading toy adaptations and community
                  partnerships in the Triangle.
                </p>
                <a
                  href="https://catch-inc.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block rounded-full bg-[#2CB7AE] px-4 py-2 text-xs font-semibold text-white shadow-sm transition hover:bg-[#28a39b]"
                >
                  Visit website
                </a>
              </div>
            </article>

            <article className="overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-black/5">
              <div className="relative h-40 w-full overflow-hidden bg-[#f3f4f6] sm:h-48">
                <Image
                  src="/14.png"
                  alt="NC State University chapter"
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 20rem, 100vw"
                />
              </div>
              <div className="px-5 pb-5 pt-4 text-center">
                <h3 className="text-base font-semibold text-[#111827]">
                  NC State University
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-[#4b4f63] sm:text-sm">
                  Engineering-focused student teams building and testing new
                  adaptive toy designs.
                </p>
                <span
                  className="mt-4 inline-block rounded-full bg-[#e5e7eb] px-4 py-2 text-xs font-semibold text-[#6b7280]"
                  aria-hidden
                >
                  Coming soon
                </span>
              </div>
            </article>
          </div>

          <div className="mt-8 flex flex-col items-center gap-3 text-center">
            <p className="text-sm text-[#4b4f63] sm:text-base">
              Interested in starting your own chapter?
            </p>
            <Link
              href="/get-involved"
              className="rounded-full bg-[#ff6b4a] px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-[#ff6b4a]/40 transition hover:bg-[#f55c38]"
            >
              Get in touch
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}

