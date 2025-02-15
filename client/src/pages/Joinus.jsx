import { BiLogoTelegram } from "react-icons/bi";
import { BsTwitterX } from "react-icons/bs";
import conan from "../assets/pictures/ConanViejo.png";

export default function Joinus() {
  return (
    <section className="relative w-full flex flex-col px-6 sm:px-12 py-16 min-h-screen bg-gradient-to-r items-center justify-center flex from-purple-900 to-cyan-800">
      {/* Imagen de Conan posicionada abajo a la izquierda y solapada sobre el primer div */}
      <img
        src={conan}
        alt="Conan Animation"
        className="3xl:absolute  hidden 3xl:block  3xl:bottom-0  3xl:left-0 z-30 4xl:ml-5 w-[350px] 4xl:w-[500px] mb-10  h-auto transform -translate-y-1/4"
        data-aos="flip-up"
      />

      {/* Contenedor máximo */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2  gap-10 items-stretch">
        {/* Primer div */}

        <div
          data-aos="flip-up"
          className="relative bg-gradient-to-r from-purple-800 to-cyan-400 rounded-xl border-4 p-10 shadow-xl flex flex-col justify-between"
        >
          <div className="p-2 flex flex-col items-center lg:items-start text-white text-center lg:text-left max-w-lg">
            <h1 className="text-5xl md:text-7xl  font-bold text-purple-400 mb-6 font-lucky">
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
                className="flex items-center gap-2 bg-purple-500 text-white py-3 px-6 rounded-lg  text-base md:text-lg font-bold hover:bg-purple-600 transition-all"
              >
                <BiLogoTelegram size={24} />
                Telegram
              </a>

              <a
                href="https://twitter.com/conancrypto"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-blue-500 text-white py-3 px-6 rounded-lg text-base md:text-lg font-bold hover:bg-blue-600 transition-all"
              >
                <BsTwitterX size={24} />
                Twitter
              </a>
            </div>
          </div>
        </div>

        {/* Segundo div */}
        <div
          data-aos="flip-up"
          className="relative bg-gradient-to-r from-purple-800 to-cyan-400 rounded-xl border-4 p-10 shadow-xl flex flex-col justify-between"
        >
          <div className="p-2 flex flex-col items-center lg:items-start text-white text-center lg:text-left max-w-lg">
            <h1 className="text-5xl md:text-7xl font-bold text-purple-400 mb-6 font-lucky">
              Why choose <span className="text-white">Conan?</span>
            </h1>
            <p className="text-lg sm:text-xl leading-relaxed mb-4">
              $CONAN isn't just another memecoin—it's a movement. Inspired by
              strength, loyalty, and the fearless nature of Conan, this coin is
              set to dominate the blockchain battlefield. Become part of an
              unstoppable force today!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
