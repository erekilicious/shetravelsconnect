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

      {/* NAVBAR */}
      <section className="px-6 py-6 md:px-12 lg:px-20">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <div>
            <p className="text-xl font-bold tracking-tight text-rose-600">SheTravelsConnect</p>
            <p className="text-sm text-slate-500">Women-only travel companion matching</p>
          </div>

          <a
            href="https://forms.gle/YVm3eTLogCrx2fwV7"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="bg-black text-white px-6 py-3 rounded-xl hover:opacity-80 transition">
              Join the Waitlist ✨
            </button>
          </a>
        </div>
      </section>

      {/* HERO */}
      <section className="px-6 pb-16 pt-6 md:px-12 lg:px-20 lg:pb-24 lg:pt-10">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <div className="mb-5 inline-flex rounded-full border border-rose-200 bg-white/80 px-4 py-2 text-sm text-rose-700 shadow-sm">
              Launching soon for women who want safer, more social travel
            </div>

            <h1 className="max-w-2xl text-4xl font-bold md:text-5xl lg:text-6xl">
              Travel the world <span className="text-rose-600">together</span>.
            </h1>

            <p className="mt-5 max-w-xl text-lg text-slate-600">
              SheTravelsConnect helps women find safe, like-minded travel companions based on destination,
              travel dates, interests, and travel style.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="https://forms.gle/YVm3eTLogCrx2fwV7"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl bg-rose-500 px-6 py-4 text-center font-semibold text-white shadow-lg hover:scale-[1.02]"
              >
                Get early access ✨
              </a>

              <a
                href="#how-it-works"
                className="rounded-2xl border border-rose-200 bg-white px-6 py-4 text-center font-semibold text-slate-700 hover:scale-[1.02]"
              >
                See how it works
              </a>
            </div>
          </div>

          {/* MOCK UI CARD */}
          <div className="rounded-[2rem] bg-white p-6 shadow-xl">
            <p className="text-sm text-slate-500">Destination</p>
            <p className="font-semibold">Bali, Indonesia</p>
          </div>
        </div>
      </section>

      {/* WAITLIST SECTION (FIXED) */}
      <section id="waitlist" className="px-6 pb-20 pt-8 md:px-12 lg:px-20">
        <div className="mx-auto max-w-5xl rounded-[2rem] bg-rose-500 px-8 py-12 text-white shadow-xl md:px-12 md:py-16">

          <div className="text-center">
            <h2 className="text-3xl font-bold md:text-5xl">
              Be the first to join SheTravelsConnect
            </h2>

            <p className="mt-4 text-lg text-rose-50">
              Join the waitlist and get early access.
            </p>

            <a
              href="https://forms.gle/YVm3eTLogCrx2fwV7"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 block"
            >
              <button className="w-full rounded-2xl bg-slate-900 px-6 py-4 font-semibold text-white hover:scale-[1.02]">
                Join the waitlist ✨
              </button>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}