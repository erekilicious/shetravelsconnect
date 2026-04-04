export default function Home() {
  return (
    <main className="min-h-screen bg-[#FFF5F7] text-[#2A0E12]">

      {/* HERO */}
      <section className="px-6 py-20 text-center">
        <span className="bg-[#FADADD] text-[#A1002B] px-4 py-2 rounded-full text-sm">
          Wellness-centered travel for women ✨
        </span>

        <h1 className="mt-6 text-4xl md:text-6xl font-bold">
          Travel together. Heal, connect, and explore the world safely.
        </h1>

        <p className="mt-6 text-lg text-[#5C2A33] max-w-2xl mx-auto">
          SheTravelsConnect helps women find like-minded travel companions and
          experience wellness-driven journeys — from yoga and creative workshops
          to meaningful connections across the world.
        </p>

        <a
          href="https://forms.gle/sxUtR7Zok4mTBrr18"
          target="_blank"
          rel="noreferrer"
          className="inline-block mt-8 bg-[#A1002B] text-white px-6 py-3 rounded-2xl font-semibold"
        >
          Join the Waitlist ✨
        </a>
      </section>

      {/* DESTINATION / BALI VIBE */}
      <section className="px-6 py-16">
        <div className="max-w-5xl mx-auto bg-white p-8 rounded-2xl shadow-lg text-center">
          <h2 className="text-3xl font-bold">
            Imagine your next trip...
          </h2>

          <p className="mt-4 text-[#5C2A33]">
            A sunrise yoga session in Bali. Painting by the ocean.
            Deep conversations over coffee in a new city.
          </p>

          <p className="mt-4 text-[#5C2A33]">
            Not just travel — but experiences that help you reconnect
            with yourself and others.
          </p>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="px-6 py-16">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
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
            <div key={item.title} className="bg-white p-6 rounded-2xl shadow-md">
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p className="mt-3 text-[#5C2A33]">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* WELLNESS TEXT */}
      <section className="px-6 py-16 text-center">
        <h2 className="text-3xl font-bold">
          Travel that nurtures you
        </h2>

        <p className="mt-6 text-[#5C2A33]">
          This is about more than where you go. It’s about how you feel.
        </p>

        <div className="mt-6 space-y-2 text-[#5C2A33]">
          <p>🧘🏽‍♀️ Yoga & mindfulness</p>
          <p>🎨 Creative experiences</p>
          <p>☕ Slow, meaningful moments</p>
          <p>🌅 Travel that recharges you</p>
        </div>
      </section>

      {/* FOUNDER SECTION */}
      <section className="px-6 py-20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center bg-white p-8 rounded-2xl shadow-lg">

          {/* IMAGE */}
          <div className="rounded-2xl overflow-hidden shadow-md">
            <img
              src="/founder.jpg"
              alt="founder"
              className="w-full h-full object-cover"
            />
          </div>

          {/* TEXT */}
          <div>
            <h2 className="text-3xl font-bold">
              Built with intention
            </h2>

            <p className="mt-4 text-[#5C2A33] text-lg">
              Hi, I’m Erekiye — Founder of SheTravelsConnect.
            </p>

            <p className="mt-4 text-[#5C2A33]">
              I created this platform because I know what it feels like to want to
              explore the world, but not always feel safe or supported doing it alone.
            </p>

            <p className="mt-4 text-[#5C2A33]">
              SheTravelsConnect is about more than travel — it’s about connection,
              confidence, and creating meaningful experiences with women who truly get you.
            </p>

            <p className="mt-4 text-[#A1002B] font-semibold">
              Travel should feel safe, intentional, and deeply fulfilling.
            </p>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="px-6 py-20 text-center">
        <h2 className="text-3xl font-bold">
          Your next journey starts here
        </h2>

        <p className="mt-4 text-[#5C2A33]">
          Join a growing community of women redefining travel.
        </p>

        <a
          href="https://forms.gle/sxUtR7Zok4mTBrr18"
          target="_blank"
          rel="noreferrer"
          className="inline-block mt-6 bg-[#A1002B] text-white px-6 py-3 rounded-2xl font-semibold"
        >
          Join the Waitlist ✨
        </a>
      </section>

    </main>
  );
}