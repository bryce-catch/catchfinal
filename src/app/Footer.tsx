export default function Footer() {
  return (
    <section
      id="donate"
      className="w-full bg-[#ff6b4a] py-12 text-center text-white"
    >
      <div className="mx-auto flex max-w-3xl flex-col items-center px-4">
        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          Support CATCH Today
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-white/90 sm:text-base">
          Your donation helps us adapt more toys and reach more children who
          need them. Every contribution makes a difference in a child&apos;s
          life.
        </p>
        <a
          href="https://www.gofundme.com/f/CATCH-inc-holiday-toy-drive"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex rounded-full bg-white px-10 py-3 text-sm font-semibold text-[#ff6b4a] shadow-md shadow-black/10 transition hover:bg-[#fff5f1]"
        >
          Donate Now
        </a>
      </div>
    </section>
  );
}
