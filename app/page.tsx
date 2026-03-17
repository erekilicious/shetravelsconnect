export default function Page() {
  const features = [
    {
      title: "Match by destination",
      text: "Connect with women travelling to the same city or country around the same time.",
      icon: "🌍",
    },
    {
      title: "Layered verification",
      text: "Built with trust in mind, including profile checks, verification layers, and safer matching.",
      icon: "🛡️",
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
            href="#waitlist"
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
                href="#waitlist"
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
              <span className="rounded-full bg-white px-4 py-2 shadow-sm">Photo verification</span>
              <span className="rounded-full bg-white px-4 py-2 shadow-sm">Safer connections</span>
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
                        <div className="flex flex-wrap items-center gap-2">
                          <p className="font-semibold">Amina, 31</p>
                          <span className="rounded-full bg-rose-50 px-2 py-1 text-xs font-medium text-rose-600">
                            Photo Verified
                          </span>
                        </div>
                        <p className="text-sm text-slate-500">Solo traveler • foodie • beach lover</p>
                      </div>
                    </div>
                    <div className="mt-4 grid gap-2 text-sm text-slate-600">
                      <div className="rounded-xl bg-rose-50 px-3 py-2">Shared destination</div>
                      <div className="rounded-xl bg-rose-50 px-3 py-2">Similar travel dates</div>
                      <div className="rounded-xl bg-rose-50 px-3 py-2">Compatible budget and vibe</div>
                      <div className="rounded-xl bg-rose-50 px-3 py-2">Verified profile</div>
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
              <h2 className="mt-3 text-3xl font-bold md:text-4xl">
                Because too many women want to travel — but not alone.
              </h2>
            </div>
            <p className="text-slate-300 leading-8">
              Finding a trusted travel companion is hard. Friends may not be available, solo travel can feel unsafe,
              and existing travel platforms don’t center women’s comfort, trust, and connection. SheTravelsConnect
              changes that with smarter matching and safety-conscious design.
            </p>
          </div>
        </div>
      </section>

      <section id="how-it-works" className="px-6 py-16 md:px-12 lg:px-20">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-rose-500">How it works</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
              From idea to itinerary in three simple steps
            </h2>
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
            <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
              Built for connection, confidence, and adventure
            </h2>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="rounded-[1.75rem] bg-gradient-to-b from-white to-rose-50 p-6 shadow-sm ring-1 ring-rose-100"
              >
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
              <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
                A global community of women who don’t have to travel alone
              </h2>
            </div>
            <p className="leading-8 text-slate-600">
              SheTravelsConnect is more than a travel app. It’s a platform designed to help women build trusted travel
              connections, share experiences, and feel empowered to explore more of the world.
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 py-16 md:px-12 lg:px-20">
        <div className="mx-auto max-w-6xl rounded-[2rem] border border-rose-100 bg-white p-8 shadow-sm md:p-12">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-rose-500">Founder</p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">Built by women, for women</h2>
              <p className="mt-4 leading-8 text-slate-600">
                Erekiye — Founder, SheTravelsConnect. I created this platform so women can connect with like-minded
                women to travel the world, explore new places, and create meaningful memories and friendships along
                the way. The goal is to make travel safer while building a supportive global community of women that
                goes beyond travel.
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <a
                  href="https://instagram.com/shetravelsconnect"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-2xl bg-rose-500 px-6 py-3 text-center font-semibold text-white shadow-sm transition hover:scale-[1.02]"
                >
                  Follow SheTravelsConnect on Instagram
                </a>
                <a
                  href="https://instagram.com/erekilicious"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-2xl border border-rose-300 bg-white px-6 py-3 text-center font-semibold text-slate-700 transition hover:scale-[1.02]"
                >
                  Meet the Founder
                </a>
              </div>
            </div>
            <div className="rounded-[1.5rem] bg-gradient-to-br from-rose-100 via-pink-100 to-white p-8 text-center">
              <p className="text-lg font-semibold text-slate-700">Join the growing community of women travelers</p>
              <p className="mt-3 text-slate-600">
                SheTravelsConnect is building a space where women can find trusted travel companions, share
                experiences, and explore the world together. Early supporters are already discovering the idea — and
                you can be among the first to join the movement.
              </p>
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
            <form className="mx-auto mt-8 flex max-w-2xl flex-col gap-3 sm:flex-row">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full rounded-2xl border border-white/30 px-5 py-4 text-slate-900 outline-none"
              />
              <button
                type="submit"
                className="rounded-2xl bg-slate-900 px-6 py-4 font-semibold text-white transition hover:scale-[1.02]"
              >
                Join the waitlist
              </button>
            </form>
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
            <a href="#" className="hover:text-slate-800">
              About
            </a>
            <a href="#" className="hover:text-slate-800">
              Contact
            </a>
            <a
              href="https://instagram.com/shetravelsconnect"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-slate-800"
            >
              📸 Instagram
            </a>
            <a href="#" className="hover:text-slate-800">
              Privacy
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}