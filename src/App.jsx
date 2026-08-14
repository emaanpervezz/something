import { useState } from "react";

function App() {
  const [showMessage, setShowMessage] = useState(false);

  return (
    <main className="min-h-screen overflow-hidden bg-gradient-to-br from-pink-100 via-rose-50 to-red-100 text-rose-950">
      
      {/* Floating hearts */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <span className="absolute left-[8%] top-[15%] animate-bounce text-3xl opacity-40">
          ❤️
        </span>

        <span className="absolute left-[85%] top-[20%] animate-pulse text-4xl opacity-50">
          💕
        </span>

        <span className="absolute left-[15%] top-[75%] animate-pulse text-2xl opacity-40">
          💗
        </span>

        <span className="absolute left-[78%] top-[78%] animate-bounce text-3xl opacity-40">
          💖
        </span>

        <span className="absolute left-[50%] top-[10%] animate-pulse text-2xl opacity-30">
          ✨
        </span>
      </div>

      {/* Hero section */}
      <section className="relative flex min-h-screen items-center justify-center px-6 py-20">
        <div className="relative z-10 w-full max-w-4xl text-center">

          {/* Small heading */}
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.4em] text-rose-500">
            A little message for you Emaan Pervez
          </p>

          {/* Main title */}
          <h1 className="text-6xl font-black tracking-tight text-rose-600 drop-shadow-sm sm:text-7xl md:text-8xl">
            I Love You
          </h1>

          {/* Heart */}
          <div className="my-8 text-7xl drop-shadow-lg animate-pulse sm:text-8xl">
            ❤️
          </div>

          {/* Description */}
          <p className="mx-auto max-w-2xl text-lg leading-8 text-rose-900/80 sm:text-xl">
            In a world full of beautiful moments, you are my favorite one.
            You make ordinary days feel special and bring a little more
            happiness into everything around me.
          </p>

          {/* Button */}
          <button
            onClick={() => setShowMessage(!showMessage)}
            className="mt-10 rounded-full bg-rose-500 px-8 py-4 text-lg font-bold text-white shadow-xl shadow-rose-300/50 transition duration-300 hover:-translate-y-1 hover:bg-rose-600 hover:shadow-2xl active:scale-95"
          >
            {showMessage ? "Hide my message 💕" : "Click for a surprise 💌"}
          </button>

          {/* Secret message */}
          {showMessage && (
            <div className="mx-auto mt-10 max-w-xl rounded-3xl border border-white/70 bg-white/70 p-8 shadow-2xl backdrop-blur-md">
              <div className="mb-4 text-5xl">💌</div>

              <h2 className="mb-4 text-3xl font-bold text-rose-600">
                You mean so much to me
              </h2>

              <p className="leading-8 text-rose-900/80">
                No matter how many words I write, they could never completely
                explain how special you are to me. I hope you always remember
                that you are loved, appreciated, and cherished. ❤️
              </p>

              <p className="mt-6 text-xl font-semibold text-rose-500">
                Forever & always 💕
              </p>
            </div>
          )}

        </div>
      </section>

      {/* Bottom section */}
      <section className="relative border-t border-rose-200/60 bg-white/40 px-6 py-20 backdrop-blur-sm">
        <div className="mx-auto max-w-4xl text-center">

          <h2 className="text-4xl font-bold text-rose-600">
            Some things are better felt than said.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-rose-900/70">
            So this little website is my way of saying something simple,
            something honest, and something from the heart.
          </p>

          <div className="mt-10 flex justify-center gap-4 text-4xl">
            <span>🌹</span>
            <span>❤️</span>
            <span>🌹</span>
          </div>

        </div>
      </section>

      {/* Footer */}
      <footer className="bg-rose-600 px-6 py-8 text-center text-white">
        <p className="text-sm font-medium">
          Made with Love ❤️
        </p>
      </footer>

    </main>
  );
}

export default App;