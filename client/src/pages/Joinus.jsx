import { BiLogoTelegram } from "react-icons/bi";
import { BsTwitterX } from "react-icons/bs";

export default function Joinus() {
  return (
    <section className="w-full relative px-6 sm:px-12 py-16 min-h-screen flex justify-center items-center bg-gradient-to-r from-gray-900 to-gray-800">
      <div className="relative  bg-gradient-to-r from-purple-800 to-cyan-400 rounded-xl border-4 p-10 max-w-5xl flex flex-col lg:flex-row items-center shadow-xl">
        {/* Contenido de la izquierda */}
        <div className=" p-2 flex flex-col items-center lg:items-start text-white text-center lg:text-left max-w-lg ">
          <h1 className="text-7xl font-bold text-purple-400 mb-6 font-lucky">
            Join <span className="text-white">Conan</span> Community
          </h1>
          <p className="text-lg sm:text-xl leading-relaxed mb-4">
            $CONAN isn't just another memecoin—it's a movement. Inspired by
            strength, loyalty, and the fearless nature of Conan, this coin is
            set to dominate the blockchain battlefield. Become part of an
            unstoppable force today!
          </p>
          <p className="text-lg sm:text-xl leading-relaxed mb-6">
            Follow us and join the Conan warriors:
          </p>

          {/* Botones */}
          <div className="flex flex-row gap-5">
            <a
              href="https://t.me/conancrypto"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-purple-500 text-white py-3 px-6 rounded-lg text-lg font-bold hover:bg-purple-600 transition-all"
            >
              <BiLogoTelegram size={24} />
              Telegram
            </a>

            <a
              href="https://twitter.com/conancrypto"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-blue-500 text-white py-3 px-6 rounded-lg text-lg font-bold hover:bg-blue-600 transition-all"
            >
              <BsTwitterX size={24} />
              Twitter
            </a>
          </div>
        </div>

        {/* Imagen de Conan (Espacio reservado) */}
        <div className="lg:w-1/3 mt-10 lg:mt-0">
          <img
            src="/assets/conan-illustration.png"
            alt="Conan Memecoin"
            className="w-full max-w-sm"
          />
        </div>
      </div>
    </section>
  );
}
