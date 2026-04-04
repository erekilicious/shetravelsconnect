export default function Home() {
  return (
    <main className="min-h-screen bg-[#FFF9F8] text-[#4B2E35]">
      <section className="relative overflow-hidden px-6 py-20 md:px-12 lg:px-20">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
          <div>
            <span className="inline-block rounded-full bg-[#FDECEF] px-4 py-2 text-sm font-medium text-[#B65A72] shadow-sm">
              Wellness-centered travel for women ✨
            </span>

            <h1 className="mt-6 text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
              Travel together. Heal, connect, and explore the world safely.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#6E4D57]">
              SheTravelsConnect helps women find like-minded travel companions and
              experience wellness-driven journeys — from yoga and creative workshops
              to meaningful connections across the world.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="https://forms.gle/sxUtR7Zok4mTBrr18"
                target="_blank"
                rel="noreferrer"
                className="rounded-2xl bg-[#E85D75] px-6 py-3 text-base font-semibold text-white shadow-lg transition hover:scale-[1.02]"
              >
                Join the Waitlist ✨
              </a>

              <a
                href="#how-it-works"
                className="rounded-2xl border border-[#E7C8D0] bg-white px-6 py-3 text-base font-semibold text-[#B65A72] shadow-sm transition hover:bg-[#FFF1F4]"
              >
                Discover how it works
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-[2rem] bg-white p-4 shadow-2xl shadow-[#E7C8D0]/40">
              <img
                src="https://images.unsplash.com/photo-1527631746610-bca00a040d60?auto=format&fit=crop&w=1200&q=80"
                alt="Women traveling together and enjoying a meaningful experience"
                className="h-[520px] w-full rounded-[1.5rem] object-cover"
              />
            </div>

            <div className="absolute -bottom-6 -left-4 rounded-2xl bg-[#FFF4E8] px-4 py-3 shadow-lg">
              <p className="text-sm font-semibold text-[#A5632B]">
                Travel as self-care 🌿
              </p>
            </div>

            <div className="absolute -right-4 top-8 rounded-2xl bg-[#FDECEF] px-4 py-3 shadow-lg">
              <p className="text-sm font-semibold text-[#B65A72]">
                Safe connections 💖
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 md:px-12 lg:px-20">
        <div className="mx-auto max-w-6xl rounded-[2rem] bg-white p-8 shadow-lg md:p-12">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#C07A8E]">
                The problem
              </p>

              <h2 className="mt-4 text-3xl font-bold md:text-4xl">
                So many women want to travel… but not alone.
              </h2>

              <p className="mt-5 text-lg leading-8 text-[#6E4D57]">
                Safety concerns, schedule mismatches, and a lack of meaningful
                travel connection often hold women back from the experiences they
                truly want.
              </p>

              <p className="mt-4 text-lg leading-8 text-[#6E4D57]">
                And even when they do travel, it can feel rushed, surface-level,
                and disconnected from how they actually want to feel.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                "Safety concerns can make solo travel feel overwhelming",
                "Friends may not share the same travel schedule or priorities",
                "Many trips feel stressful instead of restorative",
                "Women want connection, intention, and well-being woven into the experience",
              ].map((item) => (
                <div key={item} className="rounded-2xl bg-[#FFF7F9] p-5 shadow-sm">
                  <p className="text-base leading-7 text-[#5E3F49]">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#FFF3F5] px-6 py-20 md:px-12 lg:px-20">
        <div className="mx-auto max-w-6xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#C07A8E]">
            The solution
          </p>

          <h2 className="mt-4 text-3xl font-bold md:text-5xl">
            Travel differently — with intention, connection, and care.
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-[#6E4D57]">
            SheTravelsConnect is more than a travel platform. It is a space where
            women can find compatible travel partners, feel safe and supported, and
            experience travel as a form of wellness.
          </p>

          <p className="mx-auto mt-4 max-w-3xl text-lg leading-8 text-[#6E4D57]">
            From pottery and painting to yoga and slow, meaningful exploration,
            every journey becomes more than just a trip.
          </p>
        </div>
      </section>

      <section id="how-it-works" className="px-6 py-20 md:px-12 lg:px-20">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#C07A8E]">
              How it works
            </p>

            <h2 className="mt-4 text-3xl font-bold md:text-4xl">
              Built for safe, meaningful, wellness-driven travel.
            </h2>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {[
              {
                step: "01",
                title: "Tell us your vibe",
                text: "Choose your destination, travel dates, and the kind of experience you want — adventure, relaxation, creativity, or connection.",
              },
              {
                step: "02",
                title: "Get matched",
                text: "We connect you with women who align with your travel style, energy, and intentions.",
              },
              {
                step: "03",
                title: "Travel & experience together",
                text: "Plan your journey, build meaningful connections, and enjoy curated wellness experiences along the way.",
              },
            ].map((item) => (
              <div key={item.step} className="rounded-[2rem] bg-white p-8 shadow-lg">
                <span className="text-sm font-bold text-[#E85D75]">{item.step}</span>
                <h3 className="mt-4 text-2xl font-semibold">{item.title}</h3>
                <p className="mt-4 text-base leading-7 text-[#6E4D57]">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-20 md:px-12 lg:px-20">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center">
          <div className="rounded-[2rem] bg-[#FFF8F2] p-4 shadow-xl shadow-[#E7C8D0]/30">
            <img
              src="https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1200&q=80"
              alt="Wellness experience during travel"
              className="h-[480px] w-full rounded-[1.5rem] object-cover"
            />
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#C07A8E]">
              Wellness experiences
            </p>

            <h2 className="mt-4 text-3xl font-bold md:text-5xl">
              Travel that nurtures you.
            </h2>

            <p className="mt-6 text-lg leading-8 text-[#6E4D57]">
              This is not just about where you go — it is about how you feel while
              you are there.
            </p>

            <div className="mt-8 grid gap-4">
              {[
                "🧘🏽‍♀️ Morning yoga in a new city",
                "🎨 Creative workshops like painting or pottery",
                "☕ Slow mornings, deep conversations, and shared moments",
                "🌅 Experiences that leave you feeling recharged, not exhausted",
              ].map((item) => (
                <div key={item} className="rounded-2xl bg-[#FFF7F9] px-5 py-4 shadow-sm">
                  <p className="text-base font-medium text-[#5E3F49]">{item}</p>
                </div>
              ))}
            </div>

            <p className="mt-6 text-lg font-semibold text-[#B65A72]">
              Travel becomes your form of self-care.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#FFF3F5] px-6 py-20 md:px-12 lg:px-20">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#C07A8E]">
              Why women love it
            </p>

            <h2 className="mt-4 text-3xl font-bold md:text-4xl">
              More than a trip. It’s a safer, softer way to explore.
            </h2>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {[
              "Women-only community",
              "Safety-first approach",
              "Meet like-minded women globally",
              "Travel with purpose, not pressure",
              "Blend adventure with wellness",
            ].map((item) => (
              <div key={item} className="rounded-[2rem] bg-white p-6 text-center shadow-md">
                <p className="text-base font-semibold text-[#5E3F49]">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20 md:px-12 lg:px-20">
        <div className="mx-auto grid max-w-6xl gap-10 rounded-[2rem] bg-white p-8 shadow-xl md:p-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="rounded-[2rem] bg-[#FDECEF] p-4">
            <img
              src="https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&w=1000&q=80"
              alt="Founder portrait placeholder"
              className="h-[420px] w-full rounded-[1.5rem] object-cover"
            />
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#C07A8E]">
              Founder
            </p>

            <h2 className="mt-4 text-3xl font-bold md:text-4xl">
              Built with intention, for women like you.
            </h2>

            <p className="mt-6 text-lg leading-8 text-[#6E4D57]">
              Hi, I’m Erekiye — Founder of SheTravelsConnect.
            </p>

            <p className="mt-4 text-lg leading-8 text-[#6E4D57]">
              I created this platform because I know what it feels like to want to
              explore the world, but not always feel safe or supported doing it alone.
            </p>

            <p className="mt-4 text-lg leading-8 text-[#6E4D57]">
              SheTravelsConnect is about more than travel. It is about connection,
              confidence, and creating meaningful experiences with women who truly get you.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#4B2E35] px-6 py-20 text-white md:px-12 lg:px-20">
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#F4C7D3]">
            Our vision
          </p>

          <h2 className="mt-4 text-3xl font-bold md:text-5xl">
            We’re building a global community where women don’t just travel — they
            connect, grow, and thrive together.
          </h2>
        </div>
      </section>

      <section className="px-6 py-20 md:px-12 lg:px-20">
        <div className="mx-auto max-w-5xl rounded-[2rem] bg-[#FFF3F5] px-8 py-14 text-center shadow-lg md:px-12">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#C07A8E]">
            Join the movement
          </p>

          <h2 className="mt-4 text-3xl font-bold md:text-5xl">
            Your next meaningful journey starts here.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[#6E4D57]">
            Join a growing community of women redefining what travel looks and feels like.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="https://instagram.com/SheTravelsConnect"
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl border border-[#E7C8D0] bg-white px-6 py-3 text-base font-semibold text-[#B65A72] shadow-sm transition hover:bg-[#FFF9FB]"
            >
              Follow on Instagram
            </a>

            <a
              href="https://forms.gle/sxUtR7Zok4mTBrr18"
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl bg-[#E85D75] px-6 py-3 text-base font-semibold text-white shadow-lg transition hover:scale-[1.02]"
            >
              Join the Waitlist ✨
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
