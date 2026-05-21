
export default function Home() {
  return (
    <main className="min-h-screen bg-[#f8f2ec] text-[#2b2b2b]">
      {/* HERO */}
      <section className="min-h-screen grid md:grid-cols-2 items-center px-6 md:px-16">
        <div>
          <p className="uppercase tracking-[0.4em] text-sm text-[#8a7567] mb-6">
            Apostrophy Creative
          </p>

          <h1 className="text-6xl md:text-8xl leading-[0.95] font-serif mb-8">
            Dream.
            <span className="block text-[#7b4b32] italic">
              Create. Believe. 🤍
            </span>
          </h1>

          <p className="text-lg text-[#6e5a4d] leading-relaxed mb-10 max-w-xl">
            Soft aesthetic personalized gifts made for birthdays,
            graduations, anniversaries & unforgettable moments.
          </p>

          <div className="flex flex-wrap gap-4">
            <button className="px-8 py-4 rounded-full bg-[#7b4b32] text-white">
              Shop Gifts ✨
            </button>

            <button className="px-8 py-4 rounded-full border border-[#7b4b32]">
              Graduation Gifts 🎓
            </button>
          </div>
        </div>

        <div className="mt-12 md:mt-0">
          <div className="h-[500px] rounded-[40px] bg-gradient-to-br from-[#d8c2b0] to-[#efe3d7] shadow-2xl"></div>
        </div>
      </section>

      {/* OCCASIONS */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-5xl font-serif mb-14">
            Shop By Occasion ✨
          </h2>

          <div className="grid md:grid-cols-5 gap-6">
            {[
              "Birthday 🎂",
              "Graduation 🎓",
              "Anniversary 💕",
              "Farewell 🤍",
              "Friendship ✨",
            ].map((item, i) => (
              <div
                key={i}
                className="bg-[#f8f2ec] rounded-full aspect-square flex items-center justify-center shadow-md hover:scale-105 transition"
              >
                <h3 className="text-xl font-serif text-center px-4">
                  {item}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BEST SELLERS */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-serif mb-14 text-center">
            Most Loved Gifts 🤍
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              "Birthday Surprise Box 🎀",
              "Graduation LEGO Frame 🎓",
              "Anniversary Memory Frame 💕",
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-[32px] overflow-hidden shadow-md hover:shadow-2xl transition"
              >
                <div className="h-72 bg-gradient-to-br from-[#d8c2b0] to-[#efe3d7]"></div>

                <div className="p-8">
                  <h3 className="text-2xl font-serif mb-4">
                    {item}
                  </h3>

                  <p className="text-[#6e5a4d] mb-6">
                    Personalized aesthetic gifts made with love & memories.
                  </p>

                  <button className="underline underline-offset-4">
                    View More →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GRADUATION */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <p className="uppercase tracking-[0.3em] text-sm text-[#8a7567] mb-4">
            Graduation Spotlight
          </p>

          <h2 className="text-6xl font-serif mb-8">
            Made for unforgettable convocation moments 🎓
          </h2>

          <p className="text-lg text-[#6e5a4d] max-w-3xl mx-auto leading-relaxed">
            Personalized graduation gifts inspired by emotional memories,
            university milestones & meaningful moments.
          </p>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-5xl font-serif mb-14">
            Customer Love 🥹
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              "“She literally cried opening this 😭”",
              "“Best graduation gift ever.”",
              "“Looks prettier in real life 🤍”",
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-[32px] p-10 shadow-md"
              >
                <p className="text-xl leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 px-6 text-center bg-white">
        <h2 className="text-6xl font-serif mb-8">
          Ready to surprise someone? ✨
        </h2>

        <p className="text-lg text-[#6e5a4d] mb-10">
          Personalized gifts made with memories & love.
        </p>

        <a
          href="https://wa.me/601113165425"
          className="px-10 py-5 rounded-full bg-[#7b4b32] text-white inline-block"
        >
          Customize Yours 🤍
        </a>
      </section>
    </main>
  )
}
