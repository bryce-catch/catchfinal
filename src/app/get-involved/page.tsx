'use client';

import Image from "next/image";
import Link from "next/link";
import type { FormEvent } from "react";
import { useEffect, useState } from "react";

const partnerLogos = ["/6.png", "/7.png", "/8.png", "/9.png", "/10.png"];

export default function GetInvolvedPage() {
  const [showEventForm, setShowEventForm] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState<string | null>(null);
  const [partnerLogoIndex, setPartnerLogoIndex] = useState(0);

  const openEventForm = (eventName: string) => {
    setSelectedEvent(eventName);
    setShowEventForm(true);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // In a real app, send this data to your backend here.
    setShowEventForm(false);
  };

  useEffect(() => {
    if (!partnerLogos.length) return;
    const id = setInterval(() => {
      setPartnerLogoIndex((prev) => (prev + 1) % partnerLogos.length);
    }, 3000);
    return () => clearInterval(id);
  }, []);

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
            className="rounded-full px-4 py-2 text-[11px] text-white/90 hover:bg-white/10 sm:px-6 sm:text-sm"
          >
            Team
          </Link>
          <Link
            href="/get-involved"
            className="rounded-full bg-white px-4 py-2 text-[11px] text-[#2CB7AE] shadow-sm sm:px-6 sm:text-sm"
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
        {/* Hero-style two column: intro + image */}
        <section className="grid gap-10 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] md:items-start">
          {/* Left: intro text */}
          <div>
            <h1 className="text-4xl font-semibold tracking-tight text-[#253158] sm:text-5xl">
              Get Involved with CATCH
            </h1>
            <p className="mt-6 text-base leading-relaxed text-[#4b4f63] sm:text-lg">
              Whether you&apos;re a student, clinician, parent, or community
              member, there&apos;s a place for you in CATCH. Together we can
              make play accessible for every child.
            </p>
          </div>

          {/* Right: illustrative image */}
          <div className="mt-6 md:mt-0">
            <div className="relative h-72 w-full overflow-hidden rounded-3xl bg-[#fff7eb] shadow-md sm:h-96">
              <Image
                src="/3.png"
                alt="Volunteers and students building adaptive toys"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 28rem, 100vw"
              />
            </div>
          </div>
        </section>

        {/* Volunteer section */}
        <section className="mt-12 border-t border-[#e5e7eb] pt-8">
          <div className="grid gap-8 md:grid-cols-2 md:items-start">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight text-[#253158] sm:text-3xl">
                Volunteer
              </h2>
              <p className="mt-3 max-w-xl text-sm leading-relaxed text-[#4b4f63] sm:text-base">
                Join a build session, help adapt toys, or support workshops with
                families and therapists. No engineering experience is
                required—just a willingness to learn and a heart for inclusive
                play.
              </p>
            </div>
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wide text-[#253158]">
                Upcoming volunteer events
              </h3>
              <ul className="mt-3 space-y-3 text-sm text-[#4b4f63]">
                <li
                  className="cursor-pointer rounded-2xl bg-[#fff7eb] px-4 py-3 shadow-sm transition hover:bg-[#ffeeda]"
                  onClick={() => openEventForm("Monthly Build Night")}
                >
                  <p className="font-semibold text-[#253158]">
                    Monthly Build Night
                  </p>
                  <p className="text-xs">
                    First Thursday, 6–8pm • On-campus makerspace
                  </p>
                </li>
                <li
                  className="cursor-pointer rounded-2xl bg-[#fff7eb] px-4 py-3 shadow-sm transition hover:bg-[#ffeeda]"
                  onClick={() =>
                    openEventForm("Weekend Adapt-a-Toy Workshop")
                  }
                >
                  <p className="font-semibold text-[#253158]">
                    Weekend Adapt-a-Toy Workshop
                  </p>
                  <p className="text-xs">
                    Quarterly Saturday session for new volunteers.
                  </p>
                </li>
                <li
                  className="cursor-pointer rounded-2xl bg-[#fff7eb] px-4 py-3 shadow-sm transition hover:bg-[#ffeeda]"
                  onClick={() =>
                    openEventForm("Outreach & Community Tabling")
                  }
                >
                  <p className="font-semibold text-[#253158]">
                    Outreach & Community Tabling
                  </p>
                  <p className="text-xs">
                    Help us share CATCH at local events and fairs.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Partner section */}
        <section className="mt-10 border-t border-[#e5e7eb] pt-8">
          <div className="grid gap-8 md:grid-cols-2 md:items-start">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight text-[#253158] sm:text-3xl">
                Partner
              </h2>
              <p className="mt-3 max-w-xl text-sm leading-relaxed text-[#4b4f63] sm:text-base">
                Collaborate as a school, clinic, hospital, or community
                organization to bring adaptive toys and training to your kids
                and families. We&apos;ll work with you to design the right
                workshop or toy delivery for your setting.
              </p>
              <button
                type="button"
                className="mt-5 inline-flex rounded-full bg-[#ff6b4a] px-6 py-2.5 text-xs font-semibold text-white shadow-md shadow-[#ff6b4a]/40 transition hover:bg-[#f55c38]"
              >
                Contact Our Team
              </button>
            </div>
            <div className="flex h-full flex-col items-center justify-center md:items-center">
              <h3 className="text-sm font-semibold uppercase tracking-wide text-[#253158]">
                Our partners
              </h3>
              <div className="mt-3 flex h-28 w-28 items-center justify-center overflow-hidden rounded-2xl bg-[#f9fafb] shadow-sm sm:h-32 sm:w-32">
                <div className="relative h-full w-full">
                  <Image
                    src={partnerLogos[partnerLogoIndex]}
                    alt={`Partner logo ${partnerLogoIndex + 1}`}
                    fill
                    className="object-contain object-center"
                    sizes="128px"
                  />
                </div>
              </div>
              <p className="mt-2 text-xs text-[#6b7280]">
                Logos rotate every few seconds.
              </p>
            </div>
          </div>
        </section>

        {/* Donate section */}
        <section className="mt-10 border-t border-[#e5e7eb] pt-8">
          <div className="grid gap-8 md:grid-cols-2 md:items-center">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight text-[#253158] sm:text-3xl">
                Donate
              </h2>
              <p className="mt-3 max-w-xl text-sm leading-relaxed text-[#4b4f63] sm:text-base">
                Your donation funds tools, switches, 3D-printed parts, and toys
                so we can keep adapting and delivering them to children with
                disabilities across North Carolina.
              </p>
          <Link
            href="https://www.gofundme.com/f/CATCH-inc-holiday-toy-drive"
                className="mt-5 inline-flex rounded-full bg-[#ff6b4a] px-6 py-2.5 text-xs font-semibold text-white shadow-md shadow-[#ff6b4a]/40 transition hover:bg-[#f55c38]"
              >
                Give Today
              </Link>
            </div>
            <div className="mt-4 md:mt-0">
              <div className="relative h-40 w-full overflow-hidden rounded-3xl bg-[#fff7eb] shadow-sm sm:h-52">
                <Image
                  src="/4.png"
                  alt="Child using an adapted toy funded by donations"
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 24rem, 100vw"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Simple contact block */}
        <section className="mt-12 max-w-3xl mx-auto rounded-3xl bg-[#2CB7AE] px-6 py-6 text-center text-white shadow-sm sm:px-8 sm:py-7">
          <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">
            Have an idea or question?
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-white/90">
            We love hearing from students, therapists, families, and potential
            partners. Reach out and we&apos;ll follow up with next steps.
          </p>
          <a
            href="mailto:info@catchnonprofit.org"
            className="mt-4 inline-block text-sm font-semibold text-[#ffdac4] underline underline-offset-4"
          >
            info@catchnonprofit.org
          </a>
        </section>
      </main>

      {/* Event signup modal */}
      {showEventForm && (
        <div className="fixed inset-0 z-40 flex items-center justify-center bg-black/60 px-4">
          <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-xl">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h2 className="text-lg font-semibold text-[#253158]">
                  Volunteer Sign-Up
                </h2>
                {selectedEvent && (
                  <p className="mt-1 text-xs font-medium uppercase tracking-wide text-[#6b7280]">
                    {selectedEvent}
                  </p>
                )}
              </div>
              <button
                type="button"
                onClick={() => setShowEventForm(false)}
                className="rounded-full p-1 text-[#6b7280] hover:bg-[#f3f4f6]"
                aria-label="Close"
              >
                ×
              </button>
            </div>

            <form onSubmit={handleSubmit} className="mt-4 space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-xs font-semibold uppercase tracking-wide text-[#4b5563]"
                >
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="mt-1 w-full rounded-lg border border-[#e5e7eb] px-3 py-2 text-sm text-[#111827] shadow-sm focus:border-[#3AC9C3] focus:outline-none focus:ring-1 focus:ring-[#3AC9C3]"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-xs font-semibold uppercase tracking-wide text-[#4b5563]"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="mt-1 w-full rounded-lg border border-[#e5e7eb] px-3 py-2 text-sm text-[#111827] shadow-sm focus:border-[#3AC9C3] focus:outline-none focus:ring-1 focus:ring-[#3AC9C3]"
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-xs font-semibold uppercase tracking-wide text-[#4b5563]"
                >
                  Phone
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  className="mt-1 w-full rounded-lg border border-[#e5e7eb] px-3 py-2 text-sm text-[#111827] shadow-sm focus:border-[#3AC9C3] focus:outline-none focus:ring-1 focus:ring-[#3AC9C3]"
                />
              </div>

              <div className="mt-2 flex justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setShowEventForm(false)}
                  className="rounded-full px-4 py-2 text-xs font-semibold text-[#4b5563] hover:bg-[#f3f4f6]"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="rounded-full bg-[#3AC9C3] px-5 py-2 text-xs font-semibold text-white shadow-md shadow-[#3AC9C3]/40 hover:bg-[#32b2ad]"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

