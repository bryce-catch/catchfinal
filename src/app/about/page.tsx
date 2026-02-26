'use client';

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const timelineData = [
  {
    year: "2018",
    title: "Foundation",
    body: "CATCH was founded by a group of passionate students at UNC Chapel Hill.",
    image: "/11.png",
  },
  {
    year: "2020",
    title: "First Adaptations",
    body: "We completed our first 25 toy adaptations, learning and refining our processes with each project.",
    image: "/12.png",
  },
  {
    year: "2021",
    title: "Community Growth",
    body: "The nonprofit was created to expand our volunteer base and partnerships with local therapy centers and schools.",
    image: "/13.png",
  },
  {
    year: "2023",
    title: "Regional Impact",
    body: "We reached 150+ adapted toys and began serving families across North Carolina.",
    image: "/15.png",
  },
  {
    year: "2024",
    title: "NC State Chapter",
    body: "We launched the NC State University chapter to expand our reach and impact across the state.",
    image: "/14.png",
  },
];

export default function AboutPage() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeItem = timelineData[activeIndex];

  return (
    <div className="min-h-screen bg-white pt-8">
      {/* Keep the same navbar style as home */}
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
            className="rounded-full bg-white px-4 py-2 text-[11px] text-[#2CB7AE] shadow-sm sm:px-6 sm:text-sm"
          >
            About
          </Link>
          <Link
            href="/team"
            className="rounded-full px-4 py-2 text-[11px] text-white/90 hover:bg-white/10 sm:px-6 sm:text-sm"
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

      <main className="mx-auto flex max-w-6xl flex-col gap-16 px-4 py-12">
        {/* Text left, image right – like reference layout, but with existing colors */}
        <section className="grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <h1 className="text-4xl font-semibold tracking-tight text-[#253158] sm:text-5xl">
              About CATCH
            </h1>
            <p className="mt-6 text-base leading-relaxed text-[#4b4f63] sm:text-lg">
              CATCH is a student-led nonprofit that makes play accessible for
              children with disabilities. We strive to &quot;catch&quot; the
              children who fall through the cracks of the mainstream toy market
              by adapting toys and supporting inclusive play across North
              Carolina.
            </p>
          </div>
          <div>
            <div className="relative h-64 w-full overflow-hidden rounded-3xl shadow-md sm:h-80">
              <Image
                src="/5.png"
                alt="Volunteers and children involved with CATCH"
                fill
                className="object-cover"
                sizes="(min-width: 768px) 50vw, 100vw"
              />
            </div>
          </div>
        </section>

        {/* Core values section */}
        <section className="w-full">
          <h2 className="text-2xl font-semibold tracking-tight text-[#111827] sm:text-3xl">
            Our Core Values
          </h2>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-[#4b4f63]">
            These principles guide everything we do and shape our approach to
            creating inclusive play experiences for children with disabilities.
          </p>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { src: "/1.png", label: "Inclusion" },
              { src: "/2.png", label: "Innovation" },
              { src: "/3.png", label: "Community" },
              { src: "/4.png", label: "Excellence" },
            ].map((item) => (
              <div
                key={item.label}
                className="relative h-32 overflow-hidden rounded-3xl shadow-sm sm:h-40"
              >
                <Image
                  src={item.src}
                  alt={item.label}
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 16rem, (min-width: 640px) 50vw, 100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                <p className="absolute bottom-3 left-3 right-3 text-sm font-semibold text-white drop-shadow-sm sm:text-base">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Timeline section */}
        <section className="w-full">
          <h2 className="text-2xl font-semibold tracking-tight text-[#111827] sm:text-3xl">
            Our Journey
          </h2>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-[#4b4f63]">
            Follow CATCH from a tiny idea to a growing community bringing
            adaptive toys to kids across North Carolina.
          </p>

          <div className="mt-6 flex flex-col items-center space-y-4 sm:mt-8">
            {/* Single active story card */}
            <article className="relative flex w-full max-w-3xl flex-row gap-5 rounded-3xl bg-[#ff6b4a] p-6 text-white shadow-sm sm:max-w-4xl sm:p-7">
              {/* Image on the left */}
              <div className="relative h-48 w-5/12 overflow-hidden rounded-2xl bg-white/60 sm:h-60">
                <Image
                  src={activeItem.image}
                  alt={activeItem.title}
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 24rem, (min-width: 640px) 50vw, 100vw"
                />
              </div>
              {/* Year + text on the right */}
              <div className="flex w-7/12 flex-col justify-center">
                <p className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                  {activeItem.year}
                </p>
                <h2 className="mt-2 text-lg font-semibold text-white sm:text-xl">
                  {activeItem.title}
                </h2>
                <p className="mt-3 text-xs leading-relaxed text-white/90 sm:text-sm">
                  {activeItem.body}
                </p>
              </div>
              <div className="pointer-events-none absolute inset-0 rounded-3xl border border-white/60" />
            </article>

            {/* Controls: previous/next + dots */}
            <div className="flex items-center justify-between gap-4">
              <button
                type="button"
                onClick={() =>
                  setActiveIndex(
                    (prev) => (prev - 1 + timelineData.length) % timelineData.length
                  )
                }
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-[#ff6b4a] shadow-sm ring-1 ring-[#ff6b4a]/40 transition hover:bg-[#fff5f1]"
                aria-label="Previous story"
              >
                <span className="-ml-0.5 text-lg">◀</span>
              </button>

              <div className="flex flex-1 justify-center gap-2">
                {timelineData.map((item, index) => {
                  const isActive = index === activeIndex;
                  return (
                    <button
                      key={item.year}
                      type="button"
                      onClick={() => setActiveIndex(index)}
                      className={`h-2.5 w-2.5 rounded-full border transition ${
                        isActive
                          ? "border-[#ff6b4a] bg-[#ff6b4a]"
                          : "border-[#fed7c3] bg-white hover:bg-[#ffe8dc]"
                      }`}
                      aria-label={`Go to ${item.year}`}
                    />
                  );
                })}
              </div>

              <button
                type="button"
                onClick={() =>
                  setActiveIndex((prev) => (prev + 1) % timelineData.length)
                }
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-[#ff6b4a] shadow-sm ring-1 ring-[#ff6b4a]/40 transition hover:bg-[#fff5f1]"
                aria-label="Next story"
              >
                <span className="ml-0.5 text-lg">▶</span>
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
