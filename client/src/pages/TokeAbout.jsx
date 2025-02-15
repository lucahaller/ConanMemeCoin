import { BiLogoTelegram } from "react-icons/bi";
import { BsTwitterX } from "react-icons/bs";
import conan from "../assets/pictures/ConanViejo.png";

export default function TokeAbout() {
  return (
    <section className="relative w-full flex flex-col px-6 sm:px-12 py-16 min-h-screen bg-gradient-to-r  from-purple-900 to-cyan-800 items-center justify-center">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch">
        {/* Tokenomics */}
        <div
          data-aos="flip-up"
          className="relative bg-gradient-to-r from-purple-800 to-cyan-400 rounded-xl border-4 p-10 shadow-xl flex flex-col justify-between h-full"
        >
          <div className="p-2 flex flex-col items-center lg:items-start text-white text-center lg:text-left max-w-lg">
            <h1 className="text-5xl md:text-7xl font-bold text-purple-400 mb-6 font-lucky">
              Tokenomics
            </h1>
            <p className="text-lg sm:text-xl leading-relaxed mb-4">
              Conan ($CONAN) is built for strength, resilience, and
              community-driven success. Our supply model ensures fairness,
              transparency, and longevity in the crypto space. Conan ($CONAN) is
              built for strength, resilience, and community-driven success. Our
              supply model ensures fairness, transparency, and longevity in the
              crypto space. Conan ($CONAN) is built for strength, resilience,
              and community-driven success. Our supply model ensures fairness,
              transparency, and longevity in the crypto space. Conan ($CONAN) is
              built for strength, resilience, and community-driven success. Our
              supply model ensures fairness, transparency, and longevity in the
              crypto space.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-10">
          {/* Available On */}
          <div
            data-aos="flip-up"
            className="relative bg-gradient-to-r from-purple-800 to-cyan-400 rounded-xl border-4 p-10 shadow-xl flex flex-col justify-between"
          >
            <div className="p-2 flex flex-col items-center text-white text-center max-w-lg">
              <h1 className="text-4xl md:text-6xl font-bold text-purple-400 mb-6 font-lucky">
                Available On
              </h1>
              <div className="grid grid-cols-3 gap-4">
                {[...Array(6)].map((_, i) => (
                  <div
                    key={i}
                    className="bg-white rounded-full p-4 w-20 h-20 flex items-center justify-center shadow-md"
                  >
                    <span className="text-black font-bold">Logo</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div
            data-aos="flip-up"
            className="relative bg-gradient-to-r from-purple-800 to-cyan-400 rounded-xl border-4 p-10 shadow-xl flex flex-col justify-between"
          >
            <div className="p-2 flex flex-col items-center text-white text-center max-w-lg">
              <h1 className="text-4xl md:text-6xl font-bold text-purple-400 mb-6 font-lucky">
                Social Media
              </h1>
              <div className="flex flex-row gap-5">
                <a
                  href="https://t.me/conancrypto"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-purple-500 text-white py-3 px-6 rounded-lg text-base md:text-lg font-bold hover:bg-purple-600 transition-all"
                >
                  <BiLogoTelegram size={24} /> Telegram
                </a>
                <a
                  href="https://twitter.com/conancrypto"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-blue-500 text-white py-3 px-6 rounded-lg text-base md:text-lg font-bold hover:bg-blue-600 transition-all"
                >
                  <BsTwitterX size={24} /> Twitter
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
