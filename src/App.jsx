import { useState } from "react";

function App() {
  const [showSecret, setShowSecret] = useState(false);
  const [openLetter, setOpenLetter] = useState(false);
  const [selectedReason, setSelectedReason] = useState(null);

  const reasons = [
    {
      icon: "🌷",
      title: "Your heart",
      text: "There is something genuinely beautiful about the way you care. It is one of those things that makes me want to be a better person too.",
    },
    {
      icon: "🫶",
      title: "The way you are",
      text: "I don't love some perfect version of you. I love you as you are — with your emotions, your little moods, your stubborn moments, your softness and everything in between.",
    },
    {
      icon: "😊",
      title: "You make me smile",
      text: "Sometimes you don't even have to try. Just knowing that you're there can make an ordinary day feel completely different.",
    },
    {
      icon: "🏡",
      title: "You feel like home",
      text: "There is a comfort in knowing that I have someone I can share my thoughts, dreams, worries and happiness with.",
    },
    {
      icon: "✨",
      title: "Your presence",
      text: "You have become part of the little things I look forward to. Somehow life feels warmer when you're a part of it.",
    },
    {
      icon: "❤️",
      title: "Simply you",
      text: "At the end of everything, I don't need a complicated reason. I love you because you're you. And that's enough.",
    },
  ];

  const littleThings = [
    "The way you can become quiet when something is on your mind.",
    "Your cute and sometimes completely random moments.",
    "The way you care, even when you don't always know how to express it.",
    "The little conversations that I could probably continue for hours.",
    "Your stubborn side that sometimes makes me smile.",
    "The moments when you are simply being yourself.",
  ];

  const promises = [
    {
      icon: "🤝",
      title: "I promise to keep choosing you",
      text: "Not only when everything is easy, but especially when life becomes difficult.",
    },
    {
      icon: "👂",
      title: "I promise to listen",
      text: "Even when you struggle to explain what you're feeling, I want to keep learning how to understand you.",
    },
    {
      icon: "🌱",
      title: "I promise to grow with you",
      text: "I don't expect either of us to be perfect. I want us to keep learning, growing and becoming better together.",
    },
    {
      icon: "🏠",
      title: "I promise to build with you",
      text: "A life full of ordinary mornings, stupid jokes, difficult days, celebrations, memories and countless little moments.",
    },
  ];

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#fff7f8] text-rose-950">
      {/* =========================================================
          BACKGROUND
      ========================================================= */}

      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-pink-200/40 blur-3xl" />
        <div className="absolute -right-32 top-1/4 h-96 w-96 rounded-full bg-rose-200/40 blur-3xl" />
        <div className="absolute -bottom-32 left-1/3 h-96 w-96 rounded-full bg-red-100/50 blur-3xl" />

        <span className="absolute left-[7%] top-[12%] animate-pulse text-2xl opacity-30">
          ❤️
        </span>

        <span className="absolute left-[88%] top-[18%] animate-bounce text-3xl opacity-30">
          💕
        </span>

        <span className="absolute left-[12%] top-[48%] animate-pulse text-xl opacity-20">
          ✨
        </span>

        <span className="absolute left-[91%] top-[55%] animate-pulse text-2xl opacity-30">
          💗
        </span>

        <span className="absolute left-[6%] top-[80%] animate-bounce text-3xl opacity-20">
          💖
        </span>

        <span className="absolute left-[82%] top-[86%] animate-pulse text-xl opacity-30">
          ✨
        </span>
      </div>

      {/* =========================================================
          HERO
      ========================================================= */}

      <section className="relative z-10 flex min-h-screen items-center justify-center px-6 py-24">
        <div className="mx-auto max-w-5xl text-center">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-rose-200 bg-white/60 px-5 py-2 text-sm font-medium text-rose-500 shadow-sm backdrop-blur-md">
            <span>♡</span>
            <span>A little corner of the internet made for you</span>
            <span>♡</span>
          </div>

          <p className="mb-6 text-xs font-bold uppercase tracking-[0.45em] text-rose-400 sm:text-sm">
            For my beautiful Emaan Pervez
          </p>

          <h1 className="text-6xl font-black tracking-tight text-rose-600 sm:text-7xl md:text-8xl lg:text-9xl">
            I Love You
          </h1>

          <div className="relative mx-auto my-10 flex h-32 w-32 items-center justify-center">
            <div className="absolute inset-0 animate-ping rounded-full bg-rose-200/40" />
            <div className="relative flex h-24 w-24 items-center justify-center rounded-full bg-white/70 text-6xl shadow-xl backdrop-blur-md">
              ❤️
            </div>
          </div>

          <p className="mx-auto max-w-2xl text-lg leading-8 text-rose-900/70 sm:text-xl">
            I could have written you another message.
            <br />
            But somehow, a normal message never felt enough.
          </p>

          <p className="mx-auto mt-6 max-w-xl text-base leading-7 text-rose-900/50">
            So I made you a little place on the internet instead.
          </p>

          <a
            href="#letter"
            className="mt-10 inline-flex items-center gap-3 rounded-full bg-rose-500 px-8 py-4 text-lg font-bold text-white shadow-xl shadow-rose-300/40 transition duration-300 hover:-translate-y-1 hover:bg-rose-600 hover:shadow-2xl"
          >
            Start reading
            <span>↓</span>
          </a>
        </div>
      </section>

      {/* =========================================================
          LOVE LETTER
      ========================================================= */}

      <section
        id="letter"
        className="relative z-10 px-6 py-24 sm:py-32"
      >
        <div className="mx-auto max-w-4xl">
          <div className="rounded-[2rem] border border-white/80 bg-white/70 p-8 shadow-2xl shadow-rose-200/30 backdrop-blur-xl sm:p-12 md:p-16">
            <div className="mb-10 text-center">
              <span className="text-5xl">💌</span>

              <p className="mt-5 text-sm font-bold uppercase tracking-[0.3em] text-rose-400">
                A letter for you
              </p>

              <h2 className="mt-3 text-4xl font-black text-rose-600 sm:text-5xl">
                If I could put my heart into words...
              </h2>
            </div>

            <div className="space-y-6 text-lg leading-9 text-rose-950/75">
              <p>
                Emaan, I don't think I will ever find one perfect sentence
                that explains everything I feel for you.
              </p>

              <p>
                There are so many little things about you that have slowly
                become important to me. Conversations, smiles, silly moments,
                the things you say, the things you don't say, and even the
                moments when you are difficult to understand.
              </p>

              <p>
                And honestly, I don't want to love only the easy parts of you.
                I want to understand the complicated parts too.
              </p>

              <p>
                I know you're not always going to be happy. Sometimes you'll
                overthink. Sometimes you'll become quiet. Sometimes you'll be
                stubborn. Sometimes something small might feel huge to you.
              </p>

              <p className="font-semibold text-rose-600">
                And I don't want those things to make me love you less.
                I want them to teach me how to love you better.
              </p>

              {openLetter && (
                <div className="animate-[fadeIn_0.5s_ease-out] space-y-6">
                  <p>
                    I want to know the version of you that laughs until she
                    can't breathe, and the version of you that needs someone
                    to simply sit beside her.
                  </p>

                  <p>
                    I want to celebrate your good days and stand beside you
                    through the difficult ones.
                  </p>

                  <p>
                    I want us to have the kind of relationship where we can be
                    childish together, serious together, annoying each other,
                    forgive each other, laugh at stupid things and still know
                    that we are on the same team.
                  </p>

                  <p>
                    Most importantly, I want you to know that I don't take
                    having you in my life for granted.
                  </p>

                  <p className="text-xl font-bold text-rose-600">
                    You are someone I genuinely want a future with.
                  </p>
                </div>
              )}
            </div>

            <div className="mt-10 text-center">
              <button
                onClick={() => setOpenLetter(!openLetter)}
                className="rounded-full border border-rose-200 bg-rose-50 px-7 py-3 font-semibold text-rose-600 transition hover:bg-rose-100 active:scale-95"
              >
                {openLetter ? "That's enough for now ❤️" : "Read a little more 💕"}
              </button>
            </div>

            <div className="mt-12 border-t border-rose-100 pt-8 text-right">
              <p className="font-serif text-xl italic text-rose-500">
                Always yours,
              </p>
              <p className="mt-2 text-2xl font-bold text-rose-600">
                Zohaib ❤️
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          DIVIDER
      ========================================================= */}

      <div className="relative z-10 flex items-center justify-center px-6">
        <div className="h-px w-24 bg-rose-200" />
        <span className="mx-5 text-rose-400">♡</span>
        <div className="h-px w-24 bg-rose-200" />
      </div>

      {/* =========================================================
          WHY I LOVE YOU
      ========================================================= */}

      <section className="relative z-10 px-6 py-24 sm:py-32">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-rose-400">
              It's more than one reason
            </p>

            <h2 className="mt-4 text-4xl font-black text-rose-600 sm:text-5xl">
              Why you are so special to me
            </h2>

            <p className="mt-5 text-lg leading-8 text-rose-900/60">
              If I tried to write down every reason, we'd probably be here
              forever. So here are just a few.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {reasons.map((reason, index) => (
              <button
                key={reason.title}
                onClick={() => setSelectedReason(index)}
                className="group rounded-3xl border border-white/80 bg-white/65 p-7 text-left shadow-lg shadow-rose-100/40 backdrop-blur-md transition duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-rose-200/40"
              >
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-rose-50 text-3xl transition group-hover:scale-110">
                  {reason.icon}
                </div>

                <h3 className="text-xl font-bold text-rose-600">
                  {reason.title}
                </h3>

                <p className="mt-3 leading-7 text-rose-900/60">
                  {reason.text}
                </p>

                <span className="mt-5 block text-sm font-semibold text-rose-400">
                  Tap me ♡
                </span>
              </button>
            ))}
          </div>

          {selectedReason !== null && (
            <div className="mt-8 rounded-3xl border border-rose-100 bg-rose-50/80 p-7 text-center shadow-lg">
              <span className="text-4xl">
                {reasons[selectedReason].icon}
              </span>

              <h3 className="mt-4 text-2xl font-bold text-rose-600">
                {reasons[selectedReason].title}
              </h3>

              <p className="mx-auto mt-3 max-w-2xl leading-8 text-rose-900/70">
                {reasons[selectedReason].text}
              </p>

              <button
                onClick={() => setSelectedReason(null)}
                className="mt-5 text-sm font-semibold text-rose-400 hover:text-rose-600"
              >
                Close
              </button>
            </div>
          )}
        </div>
      </section>

      {/* =========================================================
          LITTLE THINGS
      ========================================================= */}

      <section className="relative z-10 overflow-hidden bg-rose-600 px-6 py-24 text-white sm:py-32">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute left-10 top-10 text-8xl">♡</div>
          <div className="absolute bottom-10 right-10 text-8xl">♡</div>
        </div>

        <div className="relative mx-auto max-w-5xl">
          <div className="text-center">
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-rose-200">
              The little things
            </p>

            <h2 className="mt-4 text-4xl font-black sm:text-5xl">
              It's the little things I remember.
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-rose-100">
              Love isn't always found in huge moments. Sometimes it's hidden
              in the smallest things.
            </p>
          </div>

          <div className="mt-14 grid gap-4 sm:grid-cols-2">
            {littleThings.map((thing, index) => (
              <div
                key={thing}
                className="rounded-2xl border border-white/10 bg-white/10 p-6 backdrop-blur-sm transition hover:bg-white/15"
              >
                <div className="flex gap-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/15 text-sm font-bold">
                    {index + 1}
                  </span>

                  <p className="leading-7 text-rose-50">{thing}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* =========================================================
    PHOTO
========================================================= */}

<section className="relative z-10 px-6 py-16">
  <div className="mx-auto max-w-3xl text-center">

    <p className="text-sm font-bold uppercase tracking-[0.3em] text-rose-400">
      A moment worth keeping
    </p>

    <h2 className="mt-3 text-3xl font-black text-rose-600 sm:text-4xl">
      One of my favorite views ❤️
    </h2>

    <div className="mt-8 overflow-hidden rounded-[2rem] border-8 border-white shadow-2xl shadow-rose-200/50">
      <img
        src="/images/Engagement.jpeg"
        alt="A special memory"
        className="h-auto max-h-[600px] w-full object-cover"
      />
    </div>

    <p className="mt-5 text-sm italic text-rose-900/50">
      A little memory that means a lot to me. ❤️
    </p>

  </div>
</section>

     
      {/* =========================================================
          FUTURE
      ========================================================= */}

      <section className="relative z-10 px-6 py-24 sm:py-32">
        <div className="mx-auto max-w-5xl rounded-[2rem] bg-gradient-to-br from-pink-100 via-rose-100 to-red-100 p-8 shadow-2xl shadow-rose-200/30 sm:p-12 md:p-16">
          <div className="text-center">
            <div className="text-5xl">🏡</div>

            <p className="mt-5 text-sm font-bold uppercase tracking-[0.3em] text-rose-400">
              The future
            </p>

            <h2 className="mt-4 text-4xl font-black text-rose-600 sm:text-5xl">
              I don't just want memories with you.
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-9 text-rose-900/70">
              I want a future full of them.
            </p>
          </div>

          <div className="mx-auto mt-12 max-w-3xl space-y-6 text-lg leading-9 text-rose-900/70">
            <p>
              I want the ordinary days just as much as the extraordinary ones.
            </p>

            <p>
              Morning conversations. Random food runs. Laughing at things
              nobody else would understand. Helping each other through bad
              days. Celebrating the good ones.
            </p>

            <p>
              I want us to grow together and look back one day at all the
              versions of ourselves we became along the way.
            </p>

            <p className="text-center text-xl font-bold text-rose-600">
              I want a life where "us" is one of my favorite words.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================
          PROMISES
      ========================================================= */}

      <section className="relative z-10 bg-white/60 px-6 py-24 backdrop-blur-sm sm:py-32">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-rose-400">
              From my heart
            </p>

            <h2 className="mt-4 text-4xl font-black text-rose-600 sm:text-5xl">
              Things I want you to know
            </h2>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {promises.map((promise) => (
              <div
                key={promise.title}
                className="rounded-3xl border border-rose-100 bg-white p-8 shadow-lg shadow-rose-100/30"
              >
                <div className="flex items-start gap-5">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-rose-50 text-3xl">
                    {promise.icon}
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-rose-600">
                      {promise.title}
                    </h3>

                    <p className="mt-3 leading-7 text-rose-900/60">
                      {promise.text}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          SECRET
      ========================================================= */}

      <section className="relative z-10 px-6 py-24 sm:py-32">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-rose-100 text-5xl shadow-xl">
            🎁
          </div>

          <p className="mt-8 text-sm font-bold uppercase tracking-[0.3em] text-rose-400">
            One last thing
          </p>

          <h2 className="mt-4 text-4xl font-black text-rose-600 sm:text-5xl">
            There is something I haven't told you yet.
          </h2>

          <p className="mt-6 text-lg leading-8 text-rose-900/60">
            You have to click the button.
          </p>

          <button
            onClick={() => setShowSecret(!showSecret)}
            className="mt-8 rounded-full bg-rose-500 px-9 py-4 text-lg font-bold text-white shadow-xl shadow-rose-300/40 transition hover:-translate-y-1 hover:bg-rose-600 hover:shadow-2xl active:scale-95"
          >
            {showSecret ? "Hide the secret 💕" : "Open my secret 💌"}
          </button>

          {showSecret && (
            <div className="mt-10 animate-[fadeIn_0.5s_ease-out] rounded-[2rem] border border-rose-100 bg-white p-8 text-left shadow-2xl shadow-rose-200/40 sm:p-12">
              <div className="text-center text-5xl">❤️</div>

              <p className="mt-7 text-lg leading-9 text-rose-900/75">
                The secret is actually not much of a secret.
              </p>

              <p className="mt-5 text-lg leading-9 text-rose-900/75">
                Somewhere along the way, you became one of the most important
                people in my life.
              </p>

              <p className="mt-5 text-lg leading-9 text-rose-900/75">
                And when I imagine the future, I don't just imagine places I
                want to go or things I want to achieve.
              </p>

              <p className="mt-5 text-xl font-bold leading-9 text-rose-600">
                I imagine you being there.
              </p>

              <p className="mt-5 text-lg leading-9 text-rose-900/75">
                That's my secret.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* =========================================================
          FINAL MESSAGE
      ========================================================= */}

      <section className="relative z-10 overflow-hidden bg-gradient-to-br from-rose-600 via-pink-600 to-red-600 px-6 py-28 text-center text-white sm:py-40">
        <div className="absolute inset-0">
          <span className="absolute left-[10%] top-[15%] text-4xl opacity-20">
            ♡
          </span>

          <span className="absolute right-[10%] top-[25%] text-5xl opacity-20">
            ♡
          </span>

          <span className="absolute bottom-[20%] left-[15%] text-3xl opacity-20">
            ✨
          </span>

          <span className="absolute bottom-[15%] right-[15%] text-4xl opacity-20">
            💕
          </span>
        </div>

        <div className="relative mx-auto max-w-4xl">
          <div className="text-6xl">❤️</div>

          <p className="mt-8 text-sm font-bold uppercase tracking-[0.4em] text-rose-200">
            For you, Emaan
          </p>

          <h2 className="mt-5 text-5xl font-black sm:text-6xl md:text-7xl">
            You are loved.
          </h2>

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-9 text-rose-100 sm:text-xl">
            More than a simple message could ever explain.
          </p>

          <div className="mx-auto mt-12 max-w-2xl space-y-5 text-lg leading-9 text-white/90">
            <p>
              Thank you for being you.
            </p>

            <p>
              Thank you for becoming part of my life.
            </p>

            <p>
              Thank you for all the moments we've already shared and all the
              ones that are still waiting for us.
            </p>

            <p className="pt-5 text-2xl font-bold text-white">
              I love you, Emaan.
            </p>

            <p className="text-lg text-rose-200">
              Today, tomorrow, and through all the ordinary little days in
              between.
            </p>
          </div>

          <div className="mt-14">
            <div className="mx-auto h-px w-24 bg-white/30" />

            <p className="mt-6 font-serif text-xl italic text-rose-200">
              With all my heart,
            </p>

            <p className="mt-2 text-2xl font-bold">
              Zohaib ❤️
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================
          FOOTER
      ========================================================= */}

      <footer className="relative z-10 bg-rose-950 px-6 py-8 text-center text-rose-200">
        <p className="text-sm">
          Made with love, just for Emaan ❤️
        </p>

        <p className="mt-2 text-xs text-rose-400">
          Some things are better felt than said.
        </p>
      </footer>

      {/* =========================================================
          CUSTOM ANIMATION
      ========================================================= */}

      <style>
        {`
          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: translateY(10px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          html {
            scroll-behavior: smooth;
          }

          ::selection {
            background: rgba(244, 63, 94, 0.2);
          }

          ::-webkit-scrollbar {
            width: 8px;
          }

          ::-webkit-scrollbar-track {
            background: #fff1f2;
          }

          ::-webkit-scrollbar-thumb {
            background: #fda4af;
            border-radius: 999px;
          }

          ::-webkit-scrollbar-thumb:hover {
            background: #fb7185;
          }
        `}
      </style>
    </main>
  );
}

export default App;