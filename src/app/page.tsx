import Image from "next/image";
import ImpactCtaPopup from "./ImpactCtaPopup";
import RotatingBubbleText from "./RotatingBubbleText";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#fff7eb] pt-8">
      <ImpactCtaPopup />
      {/* Top pill navigation - outside main so it stays sticky for full page */}
      <div className="sticky top-4 z-20 flex w-full justify-center px-4">
        <nav className="inline-flex items-center gap-1 rounded-full bg-[#2CB7AE] px-2 py-1 text-xs font-semibold text-white shadow-md shadow-[#2CB7AE]/40 backdrop-blur-sm sm:text-sm">
          <a
            href="#home"
            className="rounded-full bg-white px-4 py-2 text-[11px] text-[#2CB7AE] shadow-sm sm:px-6 sm:text-sm"
          >
            Home
          </a>
          <a
            href="/about"
            className="rounded-full px-4 py-2 text-[11px] text-white/90 hover:bg-white/10 sm:px-6 sm:text-sm"
          >
            About
          </a>
          <a
            href="/team"
            className="rounded-full px-4 py-2 text-[11px] text-white/90 hover:bg-white/10 sm:px-6 sm:text-sm"
          >
            Team
          </a>
          <a
            href="/get-involved"
            className="rounded-full px-4 py-2 text-[11px] text-white/90 hover:bg-white/10 sm:px-6 sm:text-sm"
          >
            Get Involved
          </a>
          <a
            href="https://www.gofundme.com/f/CATCH-inc-holiday-toy-drive"
            className="rounded-full px-4 py-2 text-[11px] text-white/90 hover:bg-white/10 sm:px-6 sm:text-sm"
          >
            Donate
          </a>
        </nav>
      </div>

      <main className="flex flex-col items-center pt-4">
        {/* Hero - full width so corner logos sit at viewport edges */}
        <div className="relative w-screen max-w-none">
          <section
            id="home"
            className="relative flex min-h-[60vh] flex-col items-center justify-center overflow-hidden px-4 py-16 text-center sm:py-20 md:py-24"
          >
            {/* Brand background: soft shapes + wordmark */}
            <div className="pointer-events-none absolute inset-0 -z-10">
              <div className="absolute -top-32 left-[-10%] h-64 w-64 rounded-full bg-[#2CB7AE]/20 blur-3xl sm:h-80 sm:w-80" />
              <div className="absolute bottom-[-56px] right-[-10%] h-72 w-72 rounded-full bg-[#ff6b4a]/20 blur-3xl sm:h-80 sm:w-80" />
              <div className="absolute inset-y-8 left-1/2 w-[120%] -translate-x-1/2 opacity-[0.06]">
                <div className="relative mx-auto h-full w-full max-w-4xl">
                  <Image
                    src="/catch-wordmark.png"
                    alt="CATCH wordmark"
                    fill
                    className="object-contain object-center"
                    sizes="(min-width: 1024px) 56rem, 100vw"
                  />
                </div>
              </div>
            </div>
            {/* Bottom right: logo with tiny text bubble + facts */}
            <div className="absolute bottom-2 right-2 flex flex-col items-end gap-2 sm:bottom-4 sm:right-4">
              <div className="relative">
                <div className="absolute -top-1 right-full mr-1 rounded-lg rounded-tr-sm bg-white px-2 py-1 text-[10px] font-medium text-[#253158] shadow-md sm:right-full sm:mr-2 sm:px-2.5 sm:py-1.5 sm:text-xs">
                  <RotatingBubbleText />
                  <span className="absolute -right-1 top-2 h-2 w-2 rotate-45 border-r border-b border-white bg-white sm:top-3" />
                </div>
                <div className="relative h-14 w-14 sm:h-16 sm:w-16">
                  <Image
                    src="/Copy%20of%20Copy%20of%20CATCH-logo-trans-noarms.png"
                    alt=""
                    fill
                    className="object-contain object-right object-bottom"
                    sizes="64px"
                  />
                </div>
              </div>
            </div>
            <h1 className="text-5xl font-normal tracking-tight text-[#253158] sm:text-6xl md:text-7xl lg:text-8xl">
              CATCH
            </h1>
            <p className="mt-8 max-w-2xl text-base leading-relaxed text-[#3A426A] sm:mt-10 sm:text-lg md:text-xl">
              We strive to &quot;catch&quot; the children who fall through the
              cracks of the mainstream toy market
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4 sm:mt-12">
              <a
                href="#learn-more"
                className="rounded-full bg-[#3AC9C3] px-8 py-3 text-sm font-semibold text-white shadow-md shadow-[#3AC9C3]/40 transition hover:bg-[#32b2ad]"
              >
                Learn More
              </a>
              <a
                href="#support"
                className="rounded-full bg-[#ff6b4a] px-8 py-3 text-sm font-semibold text-white shadow-md shadow-[#ff6b4a]/40 transition hover:bg-[#f55c38]"
              >
                Support Our Mission
              </a>
            </div>
          </section>
        </div>
      </main>

      {/* White background from Partners through Why it matters */}
      <div className="w-full bg-white">
        <div className="mx-auto flex max-w-6xl flex-col items-center px-4 py-10">
        {/* Partners strip */}
        <section className="mt-6 w-full py-10 first:mt-0">
          <div className="mx-auto flex max-w-5xl flex-col items-center gap-8">
            <h2 className="text-3xl font-semibold tracking-tight text-[#111827]">
              Partnered With
            </h2>
            <div className="flex w-full flex-wrap items-center justify-center gap-10 md:gap-14">
              <div className="relative h-14 w-32 overflow-hidden rounded-xl bg-white shadow-sm shadow-[#d1e6f5]">
                <span className="sr-only">
                  Atrium Health Levine Children&apos;s logo
                </span>
                <Image
                  src="/6.png"
                  alt=""
                  fill
                  className="object-contain"
                />
              </div>
              <div className="relative h-14 w-32 overflow-hidden rounded-xl bg-white shadow-sm shadow-[#d1e6f5]">
                <span className="sr-only">Novant Health logo</span>
                <Image
                  src="/7.png"
                  alt=""
                  fill
                  className="object-contain"
                />
              </div>
              <div className="relative h-14 w-32 overflow-hidden rounded-xl bg-white shadow-sm shadow-[#d1e6f5]">
                <span className="sr-only">WakeMed logo</span>
                <Image
                  src="/8.png"
                  alt=""
                  fill
                  className="object-contain"
                />
              </div>
              <div className="relative h-14 w-32 overflow-hidden rounded-xl bg-white shadow-sm shadow-[#d1e6f5]">
                <span className="sr-only">
                  UNC Health Rehabilitation Center logo
                </span>
                <Image
                  src="/9.png"
                  alt=""
                  fill
                  className="object-contain"
                />
              </div>
              <div className="relative h-14 w-40 overflow-hidden rounded-xl bg-white shadow-sm shadow-[#d1e6f5]">
                <span className="sr-only">
                  UNC Carolina Institute for Developmental Disabilities logo
                </span>
                <Image
                  src="/10.png"
                  alt=""
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Stats cards / impact */}
        <section
          id="impact"
          className="mt-16 grid w-full gap-6 md:mt-20 md:grid-cols-3"
        >
          <article className="flex flex-col overflow-hidden rounded-2xl shadow-sm shadow-black/5">
            <div className="relative h-64 w-full">
              <Image
                src="/1.png"
                alt="Volunteers adapting a toy for a child with disabilities"
                fill
                className="object-cover"
              />
            </div>
            <div className="flex flex-1 flex-col px-5 pb-6 pt-4">
              <h3 className="text-lg font-semibold text-[#253158]">
                250+ Toys Adapted
              </h3>
              <p className="mt-2 text-sm text-[#4b4f63]">
                We adapt toys with switches and assistive technology so children
                with disabilities can play independently.
              </p>
            </div>
          </article>

          <article className="flex flex-col overflow-hidden rounded-2xl shadow-sm shadow-black/5">
            <div className="relative h-64 w-full">
              <Image
                src="/2.png"
                alt="Child using an adapted toy switch device"
                fill
                className="object-cover"
              />
            </div>
            <div className="flex flex-1 flex-col px-5 pb-6 pt-4">
              <h3 className="text-lg font-semibold text-[#253158]">
                50+ Children Helped
              </h3>
              <p className="mt-2 text-sm text-[#4b4f63]">
                Families across North Carolina receive adaptive toys tailored to
                autism, cerebral palsy, and sensory needs.
              </p>
            </div>
          </article>

          <article className="flex flex-col overflow-hidden rounded-2xl shadow-sm shadow-black/5">
            <div className="relative h-64 w-full">
              <Image
                src="/4.png"
                alt="Group of volunteers building adaptive toys together"
                fill
                className="object-cover"
              />
            </div>
            <div className="flex flex-1 flex-col px-5 pb-6 pt-4">
              <h3 className="text-lg font-semibold text-[#253158]">
                100+ Volunteers
              </h3>
              <p className="mt-2 text-sm text-[#4b4f63]">
                Students, engineers, and clinicians volunteer to build inclusive
                play devices for children with disabilities.
              </p>
            </div>
          </article>
        </section>

        {/* What we do / Our Impact */}
        <section
          id="about"
          className="mt-16 w-full md:mt-20"
        >
          <div className="grid gap-8 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1.1fr)] md:items-start">
            <div>
              <h2 className="text-3xl font-semibold tracking-tight text-[#111827]">
                Our Impact
              </h2>
              <p className="mt-4 max-w-xl text-sm leading-relaxed text-[#111827]">
                CATCH creates adaptive toys for children with disabilities by
                combining engineering, creativity, and inclusive design. We
                focus on accessible toys for autism, motor challenges, and
                sensory processing differences so every child can experience
                play.
              </p>
              <div className="mt-6 h-[260px] w-full max-w-md overflow-hidden rounded-2xl bg-[#f3f3f3] shadow-sm">
                <div className="relative h-full w-full">
                  <Image
                    src="/5.png"
                    alt="Volunteers and children working with adaptive toys"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <article className="flex items-start gap-3 rounded-2xl px-5 py-4 shadow-sm">
                <span className="mt-1 text-base text-[#4b5563]" aria-hidden>
                  ●
                </span>
                <div>
                  <h3 className="text-sm font-semibold text-[#111827]">
                    Toy Adaptation
                  </h3>
                  <p className="mt-1 text-xs leading-relaxed text-[#4b4f63]">
                    We modify toys with large buttons, switches, and assistive
                    technology for kids with limited mobility.
                  </p>
                </div>
              </article>

              <article className="flex items-start gap-3 rounded-2xl px-5 py-4 shadow-sm">
                <span className="mt-1 text-base text-[#4b5563]" aria-hidden>
                  ◆
                </span>
                <div>
                  <h3 className="text-sm font-semibold text-[#111827]">
                    Inclusive Play Support
                  </h3>
                  <p className="mt-1 text-xs leading-relaxed text-[#4b4f63]">
                    We help families and therapists create accessible play
                    setups at home, in classrooms, and in clinics.
                  </p>
                </div>
              </article>

              <article className="flex items-start gap-3 rounded-2xl px-5 py-4 shadow-sm">
                <span className="mt-1 text-base text-[#4b5563]" aria-hidden>
                  ▲
                </span>
                <div>
                  <h3 className="text-sm font-semibold text-[#111827]">
                    Workshops
                  </h3>
                  <p className="mt-1 text-xs leading-relaxed text-[#4b4f63]">
                    Hands-on events where volunteers learn to build DIY switch
                    adapted toys and sensory tools.
                  </p>
                </div>
              </article>

              <article className="flex items-start gap-3 rounded-2xl px-5 py-4 shadow-sm">
                <span className="mt-1 text-base text-[#4b5563]" aria-hidden>
                  ●
                </span>
                <div>
                  <h3 className="text-sm font-semibold text-[#111827]">
                    Volunteer Program
                  </h3>
                  <p className="mt-1 text-xs leading-relaxed text-[#4b4f63]">
                    A welcoming community for anyone who wants to support
                    children with disabilities through design and making.
                  </p>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* Why it matters */}
        <section
          id="get-involved"
          className="mt-16 w-full md:mt-20"
        >
          <h2 className="text-3xl font-semibold tracking-tight text-[#111827]">
            Why Adaptive Toys Matter
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-[#4b4f63]">
            Millions of children cannot use standard toys because of motor,
            sensory, or developmental disabilities. Adaptive toys open the
            door to independent play, communication, and connection with
            friends and family.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-4">
            <article className="flex items-center gap-3 rounded-2xl border border-[#fee2d5] px-4 py-3 shadow-sm">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#ffedd5] text-xs">
                  <span className="text-[#f97316]">◎</span>
                </div>
                <p className="text-sm font-medium text-[#111827]">
                  Autism spectrum disorder
                </p>
              </article>

              <article className="flex items-center gap-3 rounded-2xl border border-[#dbeafe] px-4 py-3 shadow-sm">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#eff6ff] text-xs">
                  <span className="text-[#2563eb]">◎</span>
                </div>
                <p className="text-sm font-medium text-[#111827]">
                  Cerebral palsy
                </p>
              </article>

              <article className="flex items-center gap-3 rounded-2xl border border-[#dcfce7] px-4 py-3 shadow-sm">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#ecfdf3] text-xs">
                  <span className="text-[#16a34a]">◎</span>
                </div>
                <p className="text-sm font-medium text-[#111827]">
                  Developmental delays
                </p>
              </article>

              <article className="flex items-center gap-3 rounded-2xl border border-[#fee2e2] px-4 py-3 shadow-sm">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#fee2e2] text-xs">
                  <span className="text-[#f97373]">◎</span>
                </div>
                <p className="text-sm font-medium text-[#111827]">
                  Sensory processing disorders
                </p>
              </article>
          </div>
        </section>
        </div>
      </div>
    </div>
  );
}
