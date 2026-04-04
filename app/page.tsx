export default function Home() {
  return (
    <main className="min-h-screen bg-[#FFF5F7] text-[#2A0E12]">

      {/* HERO */}
      <section className="px-6 py-20 text-center">
        <span className="inline-block rounded-full bg-[#FFE3EC] px-4 py-2 text-sm font-medium text-[#FF2E88] shadow-sm">
          Wellness-centered travel for women ✨
        </span>

        <h1 className="mt-6 text-4xl font-bold leading-tight md:text-6xl">
          Travel together. <span className="text-[#FF2E88]">Heal, connect,</span> and explore the world safely.
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg text-[#4A1C24]">
          SheTravelsConnect helps women find like-minded travel companions and
          experience wellness-driven journeys — from yoga and creative workshops
          to meaningful connections across the world.
        </p>

        {/* SOCIAL PROOF */}
        <div className="mx-auto mt-6 inline-flex items-center rounded-full bg-white px-5 py-3 shadow-md">
          <span className="text-sm font-semibold text-[#C00000]">
            Join 150+ women already signed up 💖
          </span>
        </div>

        {/* CTA */}
        <a
          href="https://forms.gle/sxUtR7Zok4mTBrr18"
          target="_blank"
          rel="noreferrer"
          className="inline-block mt-8 bg-[#C00000] hover:bg-[#A00000] text-white px-8 py-3 rounded-2xl font-semibold shadow-lg transition duration-300 hover:scale-105"
        >
          Join the Waitlist ✨
        </a>
      </section>

      {/* DESTINATION / EXPERIENCE */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-5xl rounded-2xl bg-white p-8 text-center shadow-lg transition duration-300 hover:shadow-xl">
          <h2 className="text-3xl font-bold">Imagine your next trip...</h2>

          <p className="mt-4 text-[#4A1C24]">
            A sunrise yoga session in Bali. Painting by the ocean. Deep
            conversations over coffee in a new city.
          </p>

          <p className="mt-4 text-[#4A1C24]">
            Not just travel — but experiences that help you reconnect
            with yourself and others.
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
              <h3 className="text-xl font-semibold text-[#2A0E12]">{item.title}</h3>
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
              alt="Founder"
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

            <p className="mt-4 font-semibold text-[#C00000]">
              Travel should feel safe, intentional, and deeply fulfilling.
            </p>
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
          className="inline-block mt-6 bg-[#C00000] hover:bg-[#A00000] text-white px-8 py-3 rounded-2xl font-semibold shadow-lg transition duration-300 hover:scale-105"
        >
          Join the Waitlist ✨
        </a>
      </section>

    </main>
  );
}
