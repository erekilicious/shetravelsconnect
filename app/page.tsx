export default function Home() {
  return (
    <main className="min-h-screen bg-[#FFF5F7] text-[#2A0E12]">

      {/* HEADER */}
      <header className="px-6 py-6 bg-[#FFF5F7]">
        <div className="mx-auto max-w-6xl flex items-center justify-center">
          <img
            src="/logo.png"
            alt="SheTravelsConnect logo"
            className="h-12 md:h-14 w-auto"
          />
        </div>
      </header>

      {/* HERO */}
      <section className="px-6 py-20 text-center">
        <span className="inline-block rounded-full bg-[#FFE3EC] px-4 py-2 text-sm font-medium text-[#FF2E88] shadow-sm">
          Wellness-centered travel for women ✨
        </span>

        <h1 className="mt-6 text-4xl font-bold leading-tight md:text-6xl">
          Travel together. <span className="text-[#FF2E88]">Heal, connect,</span>{" "}
          and explore the world safely.
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg text-[#4A1C24]">
          SheTravelsConnect helps women find like-minded travel companions and
          experience wellness-driven journeys — from yoga and creative workshops
          to meaningful connections across the world.
        </p>

        <div className="mx-auto mt-6 inline-flex items-center rounded-full bg-white px-5 py-3 shadow-md">
          <span className="text-sm font-semibold text-[#FF0000]">
            Join 150+ women already signed up 💖
          </span>
        </div>

        <a
          href="https://forms.gle/sxUtR7Zok4mTBrr18"
          target="_blank"
          rel="noreferrer"
          className="inline-block mt-8 rounded-2xl bg-[#FF0000] px-8 py-3 font-semibold text-white shadow-lg transition duration-300 hover:scale-105 hover:bg-[#E11D2E]"
        >
          Join the Waitlist ✨
        </a>
      </section>

      {/* STATEMENT SECTION */}
      <section className="bg-[#FF0000] px-6 py-20 text-center text-white">
        <h2 className="text-3xl font-bold md:text-5xl">
          Travel that feels softer, safer, and more meaningful.
        </h2>
        <p className="mt-6 text-[#FFE3EC] max-w-3xl mx-auto">
          From wellness experiences to genuine connection, SheTravelsConnect helps women
          explore the world in a way that feels intentional, supported, and unforgettable.
        </p>
      </section>

      {/* SAFETY */}
      <section className="px-6 py-20 text-center">
        <h2 className="text-3xl font-bold">
          Travel with <span className="text-[#FF2E88]">confidence</span>
        </h2>

        <div className="mt-10 grid max-w-4xl mx-auto gap-4 sm:grid-cols-2">
          {[
            "🔐 Verified profiles & identity checks",
            "👭 Women-only community",
            "🛡️ Safety-first matching system",
            "💬 Build trust before you travel",
          ].map((item) => (
            <div
              key={item}
              className="rounded-2xl bg-[#FFEAEA] px-6 py-4 text-[#C00000] shadow-md border border-[#FFD6DE]"
            >
              {item}
            </div>
          ))}
        </div>
      </section>

      {/* HOW IT WORKS HEADER */}
      <section className="bg-[#FF0000]/90 px-6 py-12 text-center text-white">
        <h2 className="text-3xl font-bold md:text-4xl">
          How it works — your journey in 3 simple steps
        </h2>
        <p className="mt-3 text-[#FFE3EC]">
          A simple, safe, and intentional way to travel and connect
        </p>
      </section>

      {/* HOW IT WORKS */}
      <section className="px-6 py-16">
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-3">
          {[
            {
              title: "Tell us your vibe",
              text: "Choose your destination, travel dates, and experience style.",
            },
            {
              title: "Get matched",
              text: "We connect you with women who align with your energy.",
            },
            {
              title: "Travel & connect",
              text: "Plan your trip and enjoy meaningful wellness experiences.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-2xl bg-[#FFEAEA] p-6 text-[#C00000] shadow-md border border-[#FFD6DE]"
            >
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p className="mt-3 text-[#7A3B45]">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="px-6 py-20 text-center">
        <h2 className="text-3xl font-bold">
          Your next journey starts <span className="text-[#FF2E88]">here</span>
        </h2>

        <a
          href="https://forms.gle/sxUtR7Zok4mTBrr18"
          target="_blank"
          rel="noreferrer"
          className="inline-block mt-6 rounded-2xl bg-[#FF0000] px-8 py-3 font-semibold text-white shadow-lg hover:scale-105 hover:bg-[#E11D2E]"
        >
          Join the Waitlist ✨
        </a>
      </section>

    </main>
  );
}