// Apostrophy Creative Website
// Ready for Vercel deployment ✨
// Upload this project into a React / Next.js setup

export default function ApostrophyCreativeWebsite() {
  return (
    <div className="min-h-screen bg-[#f8f2ec] text-[#2b2b2b] font-sans overflow-x-hidden">
      {/* Floating Blur Backgrounds */}
      <div className="fixed top-0 left-0 w-96 h-96 bg-[#c8b3a1]/30 rounded-full blur-3xl"></div>
      <div className="fixed bottom-0 right-0 w-96 h-96 bg-[#e8d8ca]/40 rounded-full blur-3xl"></div>

      {/* Hero Section */}
      <section className="relative min-h-screen grid md:grid-cols-2 items-center px-6 md:px-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-[#f7f3ee] to-[#efe8df]"></div>

        <div className="relative z-10 max-w-2xl text-left">
          <p className="uppercase tracking-[0.4em] text-sm text-[#8a7567] mb-6">
            Apostrophy Creative
          </p>

          <h1 className="text-6xl md:text-8xl font-serif leading-[0.95] mb-8">
            Apostrophy
            <span className="block italic text-[#7b4b32]">Creative 🤍</span>
          </h1>

          <p className="text-xl text-[#6e5a4d] leading-relaxed max-w-2xl mx-auto mb-10">
            Soft aesthetic personalized gifts made for birthdays, graduations, anniversaries & sentimental memories.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-14">
            <button className="px-10 py-5 rounded-full bg-[#7b4b32] text-white text-lg hover:scale-105 transition duration-300 shadow-xl">
              Shop Gifts ✨
            </button>

            <button className="px-10 py-5 rounded-full border border-[#7b4b32] text-lg hover:bg-[#7b4b32] hover:text-white transition duration-300">
              Graduation Gifts 🎓
            </button>
          </div>

          <div className="flex flex-wrap gap-4 mb-14">
            <button className="px-10 py-5 rounded-full bg-[#7b4b32] text-white text-lg hover:scale-105 transition duration-300 shadow-xl">
              More
            </button>

            <button className="px-10 py-5 rounded-full border border-[#7b4b32] text-lg hover:bg-[#7b4b32] hover:text-white transition duration-300">
              Shop
            </button>
          </div>
        </div>

        <div className="relative z-10 flex justify-center items-center mt-16 md:mt-0">
          <div className="w-full max-w-xl h-[600px] rounded-[40px] bg-gradient-to-br from-[#d8c2b0] to-[#efe3d7] shadow-2xl"></div>
        </div>
      </section>

      {/* Trending Section */}
      <section className="py-24 px-6 max-w-7xl mx-auto relative">
        <div className="flex items-center justify-between mb-12">
          <div>
            <p className="uppercase tracking-[0.3em] text-sm text-[#8a7567] mb-3">
              Best Sellers
            </p>
            <h2 className="text-6xl font-serif">
              Best Sellers
            </h2>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: 'Graduation LEGO Frame 🎓',
              desc: 'The most requested convo gift lately.',
            },
            {
              title: 'Birthday Memory Frame 🎀',
              desc: 'Cute aesthetic gifts girls secretly love.',
            },
            {
              title: 'Anniversary Surprise Box 🤍',
              desc: 'Meaningful memories for couples.',
            },
          ].map((item, index) => (
            <div
              key={index}
              className="group bg-white rounded-[32px] overflow-hidden shadow-md hover:shadow-2xl transition duration-500 hover:-translate-y-2"
            >
              <div className="h-80 bg-gradient-to-br from-[#d8c2b0] to-[#efe3d7]"></div>

              <div className="p-8">
                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                <p className="text-[#8a7567] mb-6 leading-relaxed">{item.desc}</p>

                <button className="group-hover:translate-x-2 transition font-medium underline underline-offset-4">
                  View Details →
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Occasion Section */}
      <section className="bg-white py-24 px-6 relative overflow-hidden">
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <p className="uppercase tracking-[0.3em] text-sm text-[#8a7567] mb-4">
            Gift Categories
          </p>

          <h2 className="text-5xl font-bold mb-14">
            Made for every special moment 🎀
          </h2>

          <div className="grid md:grid-cols-4 gap-8 mt-16">
            {[
              'Birthday 🎂',
              'Graduation 🎓',
              'Anniversary 💕',
              'Friendship ✨',
            ].map((occasion, index) => (
              <div
                key={index}
                className="bg-[#f8f2ec] border border-[#dcc8b8] rounded-full aspect-square flex items-center justify-center hover:scale-105 transition duration-300 shadow-sm hover:shadow-xl flex-col gap-3"
              >
                <h3 className="text-2xl font-serif">{occasion}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="rounded-[40px] bg-gradient-to-br from-[#d8c2b0] to-[#efe3d7] h-[550px] shadow-xl"></div>
          </div>

          <div>
            <p className="uppercase tracking-[0.3em] text-sm text-[#8a7567] mb-4">
              Made With Love
            </p>

            <h2 className="text-6xl font-black leading-tight mb-8">
              Every gift tells a story 🤍
            </h2>

            <p className="text-lg text-[#6e5a4d] leading-relaxed mb-10">
              Every personalized gift is crafted carefully to make moments feel more meaningful & unforgettable.
            </p>

            <div className="space-y-5">
              {[
                'Choose your aesthetic gift ✨',
                'Send customization details 🤍',
                'We craft every detail carefully 🎀',
                'Surprise someone special 🥹',
              ].map((step, index) => (
                <div
                  key={index}
                  className="bg-white rounded-3xl p-5 shadow-md flex items-center gap-5 hover:translate-x-2 transition"
                >
                  <div className="w-12 h-12 rounded-full bg-[#7b4b32] text-white flex items-center justify-center font-bold">
                    {index + 1}
                  </div>

                  <p className="font-medium text-lg">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Customer Reviews */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <p className="uppercase tracking-[0.3em] text-sm text-[#8a7567] mb-4">
            Sweet Memories
          </p>

          <h2 className="text-5xl font-bold mb-14">
            Moments our customers loved 🤍
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              '“She literally cried when she opened it 😭”',
              '“The prettiest graduation gift ever.”',
              '“Looks even cuter in real life 🤍”',
            ].map((review, index) => (
              <div
                key={index}
                className="bg-[#f8f2ec] rounded-[32px] p-10 shadow-sm hover:shadow-xl transition"
              >
                <p className="text-xl leading-relaxed font-medium">{review}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-28 px-6 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#ece7e1] to-[#f7f3ee]"></div>

        <div className="relative z-10 max-w-4xl mx-auto">
          <h2 className="text-6xl md:text-7xl font-black leading-tight mb-8">
            Create beautiful memories ✨
          </h2>

          <p className="text-xl text-[#6e5a4d] mb-10 leading-relaxed">
            Cute aesthetic gifts designed for the people you love most.
          </p>

          <button className="px-12 py-6 rounded-full bg-[#7b4b32] text-white text-xl hover:scale-105 transition duration-300 shadow-2xl">
            Order Now 🤍
          </button>
        </div>
      </section>
    </div>
  )
}
