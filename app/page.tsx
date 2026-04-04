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
export default function SheTravelsConnectLandingPage() {
  return (
    <main className="min-h-screen bg-[#FFF9F8] text-[#4B2E35]">
      {/* Hero Section */}
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
                href="#waitlist"
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
              <p className="text-sm font-semibold text-[#A5632B]">Travel as self-care 🌿</p>
            </div>
            <div className="absolute -right-4 top-8 rounded-2xl bg-[#FDECEF] px-4 py-3 shadow-lg">
              <p className="text-sm font-semibold text-[#B65A72]">Safe connections 💖</p>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
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
                Safety concerns, schedule mismatches, and a lack of meaningful travel
                connection often hold women back from the experiences they truly want.
              </p>
              <p className="mt-4 text-lg leading-8 text-[#6E4D57]">
                And even when they do travel, it can feel rushed, surface-level, and
                disconnected from how they actually want to feel.
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

      {/* Solution Section */}
      <section className="bg-[#FFF3F5] px-6 py-20 md:px-12 lg:px-20">
        <div className="mx-auto max-w-6xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#C07A8E]">
            The solution
          </p>
          <h2 className="mt-4 text-3xl font-bold md:text-5xl">
            Travel differently — with intention, connection, and care.
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-[#6E4D57]">
            SheTravelsConnect is more than a travel platform. It is a space where women
            can find compatible travel partners, feel safe and supported, and experience
            travel as a form of wellness.
          </p>
          <p className="mx-auto mt-4 max-w-3xl text-lg leading-8 text-[#6E4D57]">
            From pottery and painting to yoga and slow, meaningful exploration, every
            journey becomes more than just a trip.
          </p>
        </div>
      </section>

      {/* How It Works */}
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

      {/* Wellness Experience Section */}
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
              This is not just about where you go — it is about how you feel while you are there.
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

      {/* Why Women Love It */}
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

      {/* Founder Section */}
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

      {/* Vision Section */}
      <section className="bg-[#4B2E35] px-6 py-20 text-white md:px-12 lg:px-20">
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#F4C7D3]">
            Our vision
          </p>
          <h2 className="mt-4 text-3xl font-bold md:text-5xl">
            We’re building a global community where women don’t just travel — they connect, grow, and thrive together.
          </h2>
        </div>
      </section>

      {/* Final CTA */}
      <section id="waitlist" className="px-6 py-20 md:px-12 lg:px-20">
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
              href="https://forms.gle/sxUtR7Zok4mTBrr18" target="_blank" rel="noreferrer"
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
eexport default function SheTravelsConnectLandingPage() {
  return (
    <main className="min-h-screen bg-[#FFF9F8] text-[#4B2E35]">
      {/* Hero Section */}
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
                href="#waitlist"
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
              <p className="text-sm font-semibold text-[#A5632B]">Travel as self-care 🌿</p>
            </div>
            <div className="absolute -right-4 top-8 rounded-2xl bg-[#FDECEF] px-4 py-3 shadow-lg">
              <p className="text-sm font-semibold text-[#B65A72]">Safe connections 💖</p>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
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
                Safety concerns, schedule mismatches, and a lack of meaningful travel
                connection often hold women back from the experiences they truly want.
              </p>
              <p className="mt-4 text-lg leading-8 text-[#6E4D57]">
                And even when they do travel, it can feel rushed, surface-level, and
                disconnected from how they actually want to feel.
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

      {/* Solution Section */}
      <section className="bg-[#FFF3F5] px-6 py-20 md:px-12 lg:px-20">
        <div className="mx-auto max-w-6xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#C07A8E]">
            The solution
          </p>
          <h2 className="mt-4 text-3xl font-bold md:text-5xl">
            Travel differently — with intention, connection, and care.
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-[#6E4D57]">
            SheTravelsConnect is more than a travel platform. It is a space where women
            can find compatible travel partners, feel safe and supported, and experience
            travel as a form of wellness.
          </p>
          <p className="mx-auto mt-4 max-w-3xl text-lg leading-8 text-[#6E4D57]">
            From pottery and painting to yoga and slow, meaningful exploration, every
            journey becomes more than just a trip.
          </p>
        </div>
      </section>

      {/* How It Works */}
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

      {/* Wellness Experience Section */}
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
              This is not just about where you go — it is about how you feel while you are there.
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

      {/* Why Women Love It */}
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

      {/* Founder Section */}
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

      {/* Vision Section */}
      <section className="bg-[#4B2E35] px-6 py-20 text-white md:px-12 lg:px-20">
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#F4C7D3]">
            Our vision
          </p>
          <h2 className="mt-4 text-3xl font-bold md:text-5xl">
            We’re building a global community where women don’t just travel — they connect, grow, and thrive together.
          </h2>
        </div>
      </section>

      {/* Final CTA */}
      <section id="waitlist" className="px-6 py-20 md:px-12 lg:px-20">
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
              href="https://forms.gle/sxUtR7Zok4mTBrr18" target="_blank" rel="noreferrer"
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

  const features = [
    {
      title: "Match by destination",
      text: "Connect with women travelling to the same city or country around the same time.",
      icon: "🌍",
    },
    {
      title: "Safety-first community",
      text: "Built with women’s comfort, trust, and safer travel planning in mind.",
      icon: "🔒",
    },
    {
      title: "Travel style compatibility",
      text: "Find people who match your vibe — from luxury escapes to budget adventures.",
      icon: "✨",
    },
  ];

  const steps = [
    {
      number: "01",
      title: "Create your profile",
      text: "Share your destination, travel dates, interests, and the kind of trip you want.",
    },
    {
      number: "02",
      title: "Meet like-minded women",
      text: "Get matched with women whose travel plans, pace, and preferences align with yours.",
    },
    {
      number: "03",
      title: "Plan and go",
      text: "Chat, coordinate, build your itinerary, and explore with more confidence.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50 via-pink-50 to-white text-slate-800">
      <section className="px-6 py-6 md:px-12 lg:px-20">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <div>
            <p className="text-xl font-bold tracking-tight text-rose-600">SheTravelsConnect</p>
            <p className="text-sm text-slate-500">Women-only travel companion matching</p>
          </div>
          <a
            href="https://forms.gle/YsL7aVwFb3m8GSFn9"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:scale-[1.02]"
          >
            Join the waitlist
          </a>
        </div>
      </section>

      <section className="px-6 pb-16 pt-6 md:px-12 lg:px-20 lg:pb-24 lg:pt-10">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <div className="mb-5 inline-flex rounded-full border border-rose-200 bg-white/80 px-4 py-2 text-sm text-rose-700 shadow-sm">
              Launching soon for women who want safer, more social travel
            </div>
            <h1 className="max-w-2xl text-4xl font-bold leading-tight tracking-tight md:text-5xl lg:text-6xl">
              Travel the world <span className="text-rose-600">together</span>.
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-8 text-slate-600">
              SheTravelsConnect helps women find safe, like-minded travel companions based on destination,
              travel dates, interests, and travel style.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="https://forms.gle/YVm3eTLogCrx2fwV7"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl bg-rose-500 px-6 py-4 text-center font-semibold text-white shadow-lg transition hover:scale-[1.02]"
              >
                Get early access
              </a>
              <a
                href="#how-it-works"
                className="rounded-2xl border border-rose-200 bg-white px-6 py-4 text-center font-semibold text-slate-700 shadow-sm transition hover:scale-[1.02]"
              >
                See how it works
              </a>
            </div>
            <div className="mt-8 flex flex-wrap gap-3 text-sm text-slate-600">
              <span className="rounded-full bg-white px-4 py-2 shadow-sm">Women-only community</span>
              <span className="rounded-full bg-white px-4 py-2 shadow-sm">Destination matching</span>
              <span className="rounded-full bg-white px-4 py-2 shadow-sm">Travel date compatibility</span>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -left-6 top-10 hidden h-32 w-32 rounded-full bg-rose-200/50 blur-3xl md:block" />
            <div className="absolute -bottom-4 right-0 hidden h-40 w-40 rounded-full bg-pink-200/50 blur-3xl md:block" />
            <div className="relative rounded-[2rem] border border-white/70 bg-white/90 p-5 shadow-2xl backdrop-blur">
              <div className="rounded-[1.5rem] bg-gradient-to-br from-rose-100 via-pink-100 to-white p-6">
                <div className="grid gap-4">
                  <div className="rounded-2xl bg-white p-4 shadow-sm">
                    <p className="text-sm text-slate-500">Destination</p>
                    <p className="mt-1 font-semibold">Bali, Indonesia</p>
                  </div>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="rounded-2xl bg-white p-4 shadow-sm">
                      <p className="text-sm text-slate-500">Travel style</p>
                      <p className="mt-1 font-semibold">Relaxed + adventurous</p>
                    </div>
                    <div className="rounded-2xl bg-white p-4 shadow-sm">
                      <p className="text-sm text-slate-500">Dates</p>
                      <p className="mt-1 font-semibold">July 8 – July 15</p>
                    </div>
                  </div>
                  <div className="rounded-3xl border border-rose-100 bg-white p-5 shadow-sm">
                    <p className="text-sm font-medium text-rose-600">Your match</p>
                    <div className="mt-3 flex items-center gap-4">
                      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-rose-100 text-2xl">
                        ✈️
                      </div>
                      <div>
                        <p className="font-semibold">Amina, 31</p>
                        <p className="text-sm text-slate-500">Solo traveler • foodie • beach lover</p>
                      </div>
                    </div>
                    <div className="mt-4 grid gap-2 text-sm text-slate-600">
                      <div className="rounded-xl bg-rose-50 px-3 py-2">Shared destination</div>
                      <div className="rounded-xl bg-rose-50 px-3 py-2">Similar travel dates</div>
                      <div className="rounded-xl bg-rose-50 px-3 py-2">Compatible budget and vibe</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-16 md:px-12 lg:px-20">
        <div className="mx-auto max-w-6xl rounded-[2rem] bg-slate-900 px-8 py-12 text-white shadow-xl md:px-12">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-rose-300">Why it matters</p>
              <h2 className="mt-3 text-3xl font-bold md:text-4xl">Because too many women want to travel — but not alone.</h2>
            </div>
            <p className="text-slate-300 leading-8">
              Finding a trusted travel companion is hard. Friends may not be available, solo travel can feel unsafe,
              and existing travel platforms don’t center women’s comfort and connection. SheTravelsConnect changes that.
            </p>
          </div>
        </div>
      </section>

      <section id="how-it-works" className="px-6 py-16 md:px-12 lg:px-20">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-rose-500">How it works</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">From idea to itinerary in three simple steps</h2>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {steps.map((step) => (
              <div key={step.number} className="rounded-[1.75rem] border border-rose-100 bg-white p-6 shadow-sm">
                <p className="text-sm font-semibold text-rose-500">{step.number}</p>
                <h3 className="mt-3 text-xl font-semibold">{step.title}</h3>
                <p className="mt-3 leading-7 text-slate-600">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-16 md:px-12 lg:px-20">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-rose-500">Why women will love it</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">Built for connection, confidence, and adventure</h2>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.title} className="rounded-[1.75rem] bg-gradient-to-b from-white to-rose-50 p-6 shadow-sm ring-1 ring-rose-100">
                <div className="text-3xl">{feature.icon}</div>
                <h3 className="mt-4 text-xl font-semibold">{feature.title}</h3>
                <p className="mt-3 leading-7 text-slate-600">{feature.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-16 md:px-12 lg:px-20">
        <div className="mx-auto max-w-6xl rounded-[2rem] border border-rose-100 bg-white p-8 shadow-sm md:p-12">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-rose-500">Our vision</p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">A global community of women who don’t have to travel alone</h2>
            </div>
            <p className="leading-8 text-slate-600">
              SheTravelsConnect is more than a travel app. It’s a platform designed to help women build trusted travel
              connections, share experiences, and feel empowered to explore more of the world.
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 py-16 md:px-12 lg:px-20">
        <div className="mx-auto max-w-6xl rounded-[2rem] bg-white p-8 shadow-sm border border-rose-100 md:p-12">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-rose-500">Founder</p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">Built by women, for women</h2>
              <p className="mt-4 leading-8 text-slate-600">
                Erekiye — Founder, SheTravelsConnect. I created this platform so women can connect with like-minded women to travel the world, explore new places, and create meaningful memories and friendships along the way. The goal is to make travel safer while building a supportive global community of women that goes beyond travel.
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <a href="https://instagram.com/shetravelsconnect" target="_blank" rel="noopener noreferrer" className="rounded-2xl bg-rose-500 px-6 py-3 text-white font-semibold shadow-sm hover:scale-[1.02] transition text-center">
                  Follow SheTravelsConnect on Instagram
                </a>
                <a href="https://instagram.com/erekilicious" target="_blank" rel="noopener noreferrer" className="rounded-2xl border border-rose-300 px-6 py-3 text-slate-700 font-semibold hover:scale-[1.02] transition text-center bg-white">
                  Meet the Founder
                </a>
              </div>
            </div>
            <div className="rounded-[1.5rem] bg-gradient-to-br from-rose-100 via-pink-100 to-white p-8 text-center">
              <p className="text-lg font-semibold text-slate-700">Join the growing community of women travelers</p>
              <p className="mt-3 text-slate-600">SheTravelsConnect is building a space where women can find trusted travel companions, share experiences, and explore the world together. Early supporters are already discovering the idea — and you can be among the first to join the movement.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="waitlist" className="px-6 pb-20 pt-8 md:px-12 lg:px-20">
        <div className="mx-auto max-w-5xl rounded-[2rem] bg-rose-500 px-8 py-12 text-white shadow-xl md:px-12 md:py-16">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-rose-100">Join early</p>
            <h2 className="mt-3 text-3xl font-bold md:text-5xl">Be the first to join SheTravelsConnect</h2>
            <p className="mt-4 text-lg leading-8 text-rose-50">
              Join the waitlist and be first to hear about launch updates, early access, and founder perks.
            </p>
            <a
              href="https://forms.gle/YVm3eTLogCrx2fwV7"
              target="_blank"
              rel="noopener noreferrer"
              className="mx-auto mt-8 inline-block rounded-2xl bg-slate-900 px-6 py-4 font-semibold text-white transition hover:scale-[1.02]"
            >
              Join the waitlist ✨
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-rose-100 px-6 py-8 md:px-12 lg:px-20">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="font-semibold text-slate-900">SheTravelsConnect</p>
            <p className="text-sm text-slate-500">Travel the world, together.</p>
          </div>
          <div className="flex flex-wrap gap-5 text-sm text-slate-500">
            <a href="#" className="hover:text-slate-800">About</a>
            <a href="#" className="hover:text-slate-800">Contact</a>
            <a href="https://instagram.com/shetravelsconnect" target="_blank" rel="noopener noreferrer" className="hover:text-slate-800 flex items-center gap-2">📸 Instagram</a>
            <a href="#" className="hover:text-slate-800">Privacy</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
