import React from "react";

export default function HowBuy() {
  return (
    <section
      id="HowToBuyScroll"
      className="min-h-screen w-full py-16 bg-gradient-to-r from-purple-900 to-cyan-800"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-12">
        {/* Título Principal */}
        <h1 className="text-5xl lg:text-6xl font-bold text-center text-white mb-12 font-lucky">
          How to Buy
        </h1>

        <div className="flex flex-col lg:flex-row items-center gap-10">
          {/* Columna Izquierda: Imagen */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <div className="relative">
              <img
                src="images/yetirocketcutout2.png"
                alt="ILUSTRACIÓN PENDIENTE"
                className="w-full max-w-md"
              />
            </div>
          </div>

          {/* Columna Derecha: Pasos */}
          <div className="w-full lg:w-1/2 space-y-12">
            {/* Paso 1 */}
            <div data-aos="fade-left" data-aos-delay="0">
              <h2 className="text-3xl md:text-4xl font-lucky text-violet-400 mb-2">
                1. Create a Wallet
              </h2>
              <p className="text-gray-300 leading-relaxed">
                Download Phantom or your wallet of choice from the app store or
                Google Play Store for free. Desktop users, download the Google
                Chrome extension by visiting the Phantom app.
              </p>
            </div>

            {/* Paso 2 */}
            <div data-aos="fade-left" data-aos-delay="200">
              <h2 className="text-3xl md:text-4xl font-lucky text-violet-400 mb-2">
                2. Get Some SOL
              </h2>
              <p className="text-gray-300 leading-relaxed">
                Have SOL in your wallet to switch to <strong>ARS$CONAN</strong>.
                If you don't have any SOL, you can buy SOL from an exchange or
                cross-chain swap and send it to your wallet.
              </p>
            </div>

            {/* Paso 3 */}
            <div data-aos="fade-left" data-aos-delay="400">
              <h2 className="text-3xl md:text-4xl font-lucky text-violet-400 mb-2">
                3. Go to Raydium
              </h2>
              <p className="text-gray-300 leading-relaxed">
                Connect to Raydium. Visit{" "}
                <a
                  href="https://raydium.io"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:underline"
                >
                  raydium.io
                </a>{" "}
                in Google Chrome or use the browser inside your Phantom app.
                Connect your wallet. Paste the <strong>ARS$CONAN</strong> token
                address into Raydium and confirm the swap. When Phantom prompts
                you for a wallet signature, sign.
              </p>
            </div>

            {/* Paso 4 */}
            <div data-aos="fade-left" data-aos-delay="600">
              <h2 className="text-3xl md:text-4xl font-lucky text-violet-400 mb-2">
                4. Swap
              </h2>
              <p className="text-gray-300 leading-relaxed">
                Switch SOL for <strong>ARS$CONAN</strong>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
