import { BiLogoTelegram } from "react-icons/bi";
import { BsTwitterX } from "react-icons/bs";
import conan from "../assets/pictures/cuadroconan.PNG";

export default function TokeAbout() {
  const logos = [
    {
      img: "https://files.readme.io/0aa2d7a-Birdeye_Logo_White_logomark_w_padding_600x600.png",
      href: "https://birdeye.com/",
    },
    {
      img: "https://avatars.githubusercontent.com/u/92743431?v=4",
      href: "https://github.com/",
    },
    {
      img: "https://play-lh.googleusercontent.com/t0EPynB_-unnXrfsSX7tZLk9tvxkWwpqF6WqrOCGlPc6iK3KFYZnBwbuSgM5yvuOjW8g=w240-h480-rw",
      href: "https://play.google.com/",
    },
    {
      img: "https://avatars.githubusercontent.com/u/68556652?s=200&v=4",
      href: "https://example.com/",
    },
    {
      img: "https://pngimg.com/uploads/x_logo/small/x_logo_PNG12.png",
      href: "https://x.com/conancoin25",
    },
    {
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Telegram_logo.svg/800px-Telegram_logo.svg.png",
      href: "https://telegram.org/",
    },
  ];
  return (
    <section className="relative w-full flex flex-col px-6 sm:px-12 py-16 min-h-screen bg-gradient-to-r  from-purple-900 to-cyan-800 items-center justify-center">
      <img
        src={conan}
        alt="Conan Animation"
        className="3xl:absolute  hidden 3xl:block  3xl:top-0  3xl:right-28 z-30 4xl:ml-5 w-[350px] 4xl:w-[500px]   h-auto transform -translate-y-1/4"
        data-aos="fade-left"
      />
      <div className="max-w-7xl 4xl:mt-44 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch">
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
                {logos.map((logo, i) => (
                  <a
                    key={i}
                    className="flex items-center justify-center"
                    href={logo.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      className="object-contain rounded-full p-4 w-32 h-auto"
                      src={logo.img}
                      alt={`Logo ${i}`}
                    />
                  </a>
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
                  href="https://t.me/+PYTTrIwWqpgxNGZh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-purple-500 text-white py-3 px-6 rounded-lg text-base md:text-lg font-bold hover:bg-purple-600 transition-all"
                >
                  <BiLogoTelegram size={24} /> Telegram
                </a>
                <a
                  href="https://x.com/conancoin25"
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
