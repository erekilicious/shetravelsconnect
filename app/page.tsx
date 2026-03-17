export default function Page() {
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
      
      {/* NAV */}
      <section className="px-6 py-6 md:px-12 lg:px-20">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <div>
            <p className="text-xl font-bold tracking-tight text-rose-600">SheTravelsConnect</p>
            <p className="text-sm text-slate-500">Women-only travel companion matching</p>
          </div>
          <a href="#waitlist" className="rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:scale-[1.02]">
            Join the waitlist
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
            <h1 className="max-w-2xl text-4xl font-bold leading-tight tracking-tight md:text-5xl lg:text-6xl">
              Travel the world <span className="text-rose-600">together</span>.
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-8 text-slate-600">
              SheTravelsConnect helps women find safe, like-minded travel companions based on destination,
              travel dates, interests, and travel style.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href="#waitlist" className="rounded-2xl bg-rose-500 px-6 py-4 text-center font-semibold text-white shadow-lg transition hover:scale-[1.02]">
                Get early access
              </a>
              <a href="#how-it-works" className="rounded-2xl border border-rose-200 bg-white px-6 py-4 text-center font-semibold text-slate-700 shadow-sm transition hover:scale-[1.02]">
                See how it works
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-[2rem] border border-white/70 bg-white/90 p-5 shadow-2xl">
              <div className="rounded-[1.5rem] bg-gradient-to-br from-rose-100 via-pink-100 to-white p-6">
                <p className="font-semibold">Amina, 31 — Bali Trip Match ✈️</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 🔥 SAFETY SECTION */}
      <section className="w-full py-16 px-6 md:px-12 bg-pink-50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Your Safety Comes First
          </h2>

          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            SheTravelsConnect is designed with women’s safety at its core — using
            layered verification, community accountability, and smart safety tools
            to help women travel together with confidence.
          </p>

          <div className="flex flex-wrap justify-center gap-3 mt-6">
            <span className="bg-white border border-pink-200 text-pink-700 px-4 py-2 rounded-full text-sm font-medium">Email Verified</span>
            <span className="bg-white border border-pink-200 text-pink-700 px-4 py-2 rounded-full text-sm font-medium">Phone Verified</span>
            <span className="bg-white border border-pink-200 text-pink-700 px-4 py-2 rounded-full text-sm font-medium">Photo Verified</span>
            <span className="bg-white border border-pink-200 text-pink-700 px-4 py-2 rounded-full text-sm font-medium">ID Verified</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="bg-white rounded-2xl shadow-md p-6">
              <h3 className="text-xl font-semibold">Multi-Layer Verification</h3>
              <p className="mt-3 text-gray-600">Email, phone, photo, and ID verification build trust.</p>
            </div>
            <div className="bg-white rounded-2xl shadow-md p-6">
              <h3 className="text-xl font-semibold">Women-Centered Community</h3>
              <p className="mt-3 text-gray-600">A safe space designed specifically for women.</p>
            </div>
            <div className="bg-white rounded-2xl shadow-md p-6">
              <h3 className="text-xl font-semibold">Smart Safety Tools</h3>
              <p className="mt-3 text-gray-600">Reporting, blocking, and safety features protect users.</p>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how-it-works" className="px-6 py-16 md:px-12 lg:px-20">
        <div className="grid gap-6 md:grid-cols-3">
          {steps.map((step) => (
            <div key={step.number} className="bg-white p-6 rounded-xl shadow">
              <p className="text-rose-500">{step.number}</p>
              <h3 className="font-semibold">{step.title}</h3>
              <p>{step.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* WAITLIST */}
      <section id="waitlist" className="px-6 py-16">
        <div className="text-center">
          <h2 className="text-3xl font-bold">Join the waitlist</h2>
          <input className="border p-3 mt-4" placeholder="Enter email" />
        </div>
      </section>

    </div>
  );
}