export default function Home() {
  return (
    <main className="min-h-screen bg-[#FFF5F7] text-[#2A0E12]">

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

      {/* 🔥 STATEMENT SECTION (NEW ANCHOR) */}
      <section className="bg-[#FF0000] px-6 py-20 text-center text-white">
        <div className="mx-auto max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#FFD6DE]">
            Imagine your next trip
          </p>

          <h2 className="mt-4 text-3xl font-bold leading-tight md:text-5xl">
            Travel that feels softer, safer, and more meaningful.
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-[#FFF0F3]">
            From wellness experiences to genuine connection, SheTravelsConnect helps women
            explore the world in a way that feels intentional, supported, and unforgettable.
          </p>
        </div>
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
              className="rounded-2xl bg-white p-6 shadow-md transition duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <h3 className="text-xl font-semibold text-[#2A0E12]">
                {item.title}
              </h3>
              <p className="mt-3 text-[#4A1C24]">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* WELLNESS */}
      <section className="px-6 py-16 text-center">
        <h2 className="text-3xl font-bold">
          Travel that <span className="text-[#FF2E88]">nurtures you</span>
        </h2>

        <p className="mt-6 text-[#4A1C24]">
          This is about more than where you go. It’s about how you feel.
        </p>

        <div className="mx-auto mt-8 grid max-w-3xl gap-4 sm:grid-cols-2">
          {[
            "🧘🏽‍♀️ Yoga & mindfulness",
            "🎨 Creative experiences",
            "☕ Slow, meaningful moments",
            "🌅 Travel that recharges you",
          ].map((item) => (
            <div
              key={item}
              className="rounded-2xl bg-white px-5 py-4 text-[#4A1C24] shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              {item}
            </div>
          ))}
        </div>
      </section>

      {/* FOUNDER */}
      <section className="px-6 py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-10 rounded-2xl bg-white p-8 shadow-lg transition duration-300 hover:shadow-xl md:grid-cols-2">
          <div className="overflow-hidden rounded-2xl shadow-md">
            <img
              src="/founder.jpg"
              alt="Erekiye, Founder of SheTravelsConnect"
              className="h-full w-full object-cover"
            />
          </div>

          <div>
            <h2 className="text-3xl font-bold">
              Built with <span className="text-[#FF2E88]">intention</span>
            </h2>

            <p className="mt-4 text-lg text-[#4A1C24]">
              Hi, I’m Erekiye — Founder of SheTravelsConnect.
            </p>

            <p className="mt-4 text-[#4A1C24]">
              I created this platform because I know what it feels like to want to
              explore the world, but not always feel safe or supported doing it alone.
            </p>

            <p className="mt-4 text-[#4A1C24]">
              SheTravelsConnect is about more than travel — it’s about connection,
              confidence, and creating meaningful experiences with women who truly get you.
            </p>

            <p className="mt-4 font-semibold text-[#FF0000]">
              Travel should feel safe, intentional, and deeply fulfilling.
            </p>

            {/* INSTAGRAM LINKS */}
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a
                href="https://instagram.com/erekilicious"
                target="_blank"
                rel="noreferrer"
                className="rounded-2xl bg-[#FFE3EC] px-5 py-3 text-[#FF2E88] font-medium transition hover:scale-105"
              >
                Follow Erekiye
              </a>

              <a
                href="https://instagram.com/SheTravelsConnect"
                target="_blank"
                rel="noreferrer"
                className="rounded-2xl bg-[#FFEAEA] px-5 py-3 text-[#FF0000] font-medium transition hover:scale-105"
              >
                Follow SheTravelsConnect
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="px-6 py-20 text-center">
        <h2 className="text-3xl font-bold">
          Your next journey starts <span className="text-[#FF2E88]">here</span>
        </h2>

        <p className="mt-4 text-[#4A1C24]">
          Join a growing community of women redefining travel.
        </p>

        <a
          href="https://forms.gle/sxUtR7Zok4mTBrr18"
          target="_blank"
          rel="noreferrer"
          className="inline-block mt-6 rounded-2xl bg-[#FF0000] px-8 py-3 font-semibold text-white shadow-lg transition duration-300 hover:scale-105 hover:bg-[#E11D2E]"
        >
          Join the Waitlist ✨
        </a>

        {/* INSTAGRAM FOOTER */}
        <div className="mt-8 text-sm text-[#4A1C24]">
          <p>Connect with us:</p>
          <div className="flex justify-center gap-4 mt-2">
            <a href="https://instagram.com/erekilicious" className="text-[#FF2E88] hover:underline">
              @erekilicious
            </a>
            <a href="https://instagram.com/SheTravelsConnect" className="text-[#FF0000] hover:underline">
              @SheTravelsConnect
            </a>
          </div>
        </div>
      </section>

    </main>
  );
}