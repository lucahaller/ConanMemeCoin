import React from "react";
import conan from "../assets/pictures/ConanViejo.png";
import conan2 from "../assets/pictures/conanacostado.PNG";

export default function HowBuy() {
  return (
    <section
      id="howtobuy"
      className="min-h-screen w-full py-16 bg-gradient-to-r from-purple-900 to-cyan-800 relative"
    >
      <div className=" mx-auto px-6 sm:px-12 flex flex-col items-center justify-center">
        {/* Título Principal */}
        <h1 className="text-5xl lg:text-6xl font-bold text-center text-white mb-12 font-lucky">
          How to Buy
        </h1>

        <div className="flex flex-col lg:flex-row items-center gap-10">
          {/* Columna Izquierda: Imagen */}
          <div className="flex flex-col justify-center">
            <div className="relative">
              <img
                src={conan2}
                alt="ILUSTRACIÓN PENDIENTE"
                className="w-[900px] h-auto"
              />
            </div>
          </div>

          {/* Columna Derecha: Pasos */}
          <div className="max-w-3xl space-y-12">
            {/* Paso 1 */}
            <div
              data-aos="fade-left"
              data-aos-delay="0"
              className="relative p-1 rounded-xl  "
            >
              <div className=" rounded-xl">
                <h2 className="text-3xl md:text-4xl font-lucky text-violet-400 mb-2">
                  1. Create a Wallet
                </h2>
                <p className="text-gray-300 leading-relaxed">
                  Download{" "}
                  <a
                    href="https://phantom.com/"
                    className="text-violet-400 inline-flex"
                  >
                    Phantom
                  </a>{" "}
                  <img
                    src="https://187760183-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F-MVOiF6Zqit57q_hxJYp%2Fuploads%2FHEjleywo9QOnfYebBPCZ%2FPhantom_SVG_Icon.svg?alt=media&token=71b80a0a-def7-4f98-ae70-5e0843fdaaec"
                    className="w-8 h-auto rounded-lg inline-flex m-2"
                  />
                  <p>
                    or your wallet of choice from the app store or Google Play
                    Store for free. Desktop users, download the Google Chrome
                    extension by visiting the Phantom app.
                  </p>
                </p>
              </div>
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

      {/* Imagen de Conan para móviles, ubicada en la esquina inferior derecha */}
      <img
        src={conan}
        alt="Conan Animation"
        className="absolute lg:hidden bottom-0 right-0 z-30  w-[200px] sm:w-[300px] md:w-[350px]  h-auto transform -translate-y-1/4"
        data-aos="flip-up"
      />
    </section>
  );
}
