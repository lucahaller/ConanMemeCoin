import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import AOS from "aos";
import "aos/dist/aos.css";
import logo3 from "../src/assets/logos/logo3.png";
import logo4 from "../src/assets/fondos/4.png";
import fondo from "../src/assets/fondos/huesitos2.jpg";
import fondo2 from "../src/assets/fondos/fondo3.png";
import { useEffect, useState } from "react";
import ftm from "../src/assets/pictures/fotomiley.png";
import Joinus from "./pages/Joinus";
import { useSpring, animated } from "react-spring";
import { IoMdArrowRoundBack } from "react-icons/io";
import HowBuy from "./pages/Howbuy";

function App() {
  const [showVideo, setShowVideo] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      window.history.scrollRestoration = "manual"; // Desactiva la restauración automática del scroll
      window.scrollTo(0, 0); // Mueve la página arriba
    }, 50);

    AOS.init({
      duration: 1000,
      delay: 100,
      once: false,
    });
  }, []);
  const flipStyle = useSpring({
    transform: showVideo ? "rotateY(180deg)" : "rotateY(0deg)",
    config: { tension: 300, friction: 20 },
  });

  return (
    <div
      className=" bg-gradient-to-r bg-black
     to-stone-400 w-full overflow-x-hidden"
    >
      <Navbar />
      <section
        className="pt-28 sm:px-10 px-5  pb-72 min-h-screen bg-gradient-to-r flex justify-center"
        id="first"
      >
        <div
          className="w-full xl:h-[1000px]  flex-col bg-purple-800 items-center  border-purple-400 border-8 rounded-3xl p-0 shadow-lg flex bg-cover"
          style={{ backgroundImage: `url(${fondo2})` }}
        >
          <img
            src={logo4}
            alt="Logo"
            className="w-fit h-3/4 pb-0"
            data-aos="zoom-in"
          />
          <div
            className="flex flex-row sm:gap-10 gap-2  md:text-3xl text-xl"
            data-aos="flip-up"
          >
            <button className="px-10 py-3 border-4  border-black shadow-[3px_3px_0px_#000] text-white hover:text-gray-300 font-bold bg-violet-600 transition-all duration-300 cursor-pointer hover:translate-x-[1.5px] hover:translate-y-[1.5px] hover:shadow-[1.5px_1.5px_0px_#000] hover:bg-violet-700 active:translate-x-[3px] active:translate-y-[3px] active:shadow-none">
              Chart
            </button>
            <button className="md:px-7 px-7   py-2 sm:py-3 border-4  text-gray-900 border-black shadow-[3px_3px_0px_#000] hover:text-gray-800 font-bold bg-violetita transition-all duration-300 cursor-pointer hover:translate-x-[1.5px] hover:translate-y-[1.5px] hover:shadow-[1.5px_1.5px_0px_#000] hover:bg-pink-500 active:translate-x-[3px] active:translate-y-[3px] active:shadow-none">
              Join us
            </button>
          </div>
        </div>
      </section>
      <section className="min-h-full flex  justify-center items-center py-20">
        <div className="max-w-7xl w-full flex flex-col lg:flex-row items-center  p-4 md:p-4 lg:p-4 justify-center lg:items-start gap-10 lg:gap-40">
          {/* Contenido a la izquierda */}
          <div className="lg:relative flex w-full lg:w-4/5 perspective">
            <animated.div
              className="lg:relative flex  w-full text-center lg:text-left"
              style={{
                ...flipStyle,
                transformStyle: "preserve-3d",
              }}
            >
              {/* Lado del About */}
              <div
                className={`lg:absolute flex flex-col w-full backface-hidden ${
                  showVideo ? "hidden" : "block"
                }`}
              >
                <h2 className="text-7xl font-lucky text-stone-200">
                  About the history of{" "}
                  <span
                    className="text-violet-600 inline-block"
                    data-aos="flip-up"
                  >
                    CONAN
                  </span>
                </h2>

                <p className="mt-5 text-xl text-stone-400 text-center md:text-justify">
                  Conan is more than just a memecoin. It was born from the
                  vision of a strong and brave dog, ready to conquer the crypto
                  world. A token with a unique story and a community-driven
                  spirit.
                </p>

                <div
                  className="flex flex-row gap-10 mt-10 md:text-2xl text-xl w-full items-center justify-center"
                  data-aos="flip-up"
                >
                  <button className="px-10 w-full py-3 border-4 border-gray-100 shadow-[3px_3px_0px_#fff] text-marronclaro hover:text-gray-300 font-bold bg-violet-600 transition-all duration-300 cursor-pointer hover:translate-x-[1.5px] hover:translate-y-[1.5px] hover:shadow-[1.5px_1.5px_0px_#fff] hover:bg-violet-800 active:translate-x-[3px] active:translate-y-[3px] active:shadow-none">
                    Read all history
                  </button>
                  <button
                    onClick={() => setShowVideo(true)}
                    className="px-10 py-3 w-full border-4 text-gray-900 border-gray-100 shadow-[3px_3px_0px_#fff] hover:text-gray-800 font-bold bg-violetita transition-all duration-300 cursor-pointer hover:translate-x-[1.5px] hover:translate-y-[1.5px] hover:shadow-[1.5px_1.5px_0px_#fff] hover:bg-pink-500 active:translate-x-[3px] active:translate-y-[3px] active:shadow-none"
                  >
                    See a video
                  </button>
                </div>
              </div>

              {/* Lado del Video */}
              <div
                className={`lg:absolute flex flex-col w-full backface-hidden rotate-y-180 ${
                  showVideo ? "block" : "hidden"
                }`}
              >
                <div className="scale-x-[-1]">
                  {" "}
                  {/* Esto corrige la inversión */}
                  <iframe
                    className="w-full h-64 md:h-96 rounded-lg"
                    src="https://www.youtube.com/embed/IlP7gVyc5pY?si=5kOQLxZ4xwTIfud4"
                    title="YouTube video"
                    frameBorder="0"
                    allowFullScreen
                    data-aos="flip-left"
                  ></iframe>
                  <button
                    onClick={() => setShowVideo(false)}
                    className="mt-5 px-5 flex flex-row  justify-start w-full items-center py-2 bg-red-600  font-bold rounded-lg px-7 py-3 border-4 text-gray-900 border-gray-100 shadow-[3px_3px_0px_#fff] hover:text-gray-800 font-bold bg-violetita transition-all duration-300 cursor-pointer hover:translate-x-[1.5px] hover:translate-y-[1.5px] hover:shadow-[1.5px_1.5px_0px_#fff] hover:bg-pink-500 active:translate-x-[3px] active:translate-y-[3px] active:shadow-none"
                  >
                    <IoMdArrowRoundBack className="" />{" "}
                    <p className="flex items-center">Back</p>
                  </button>
                </div>
              </div>
            </animated.div>
          </div>

          {/* Imagen a la derecha */}
          <div className="lg:w-1/2 flex  " data-aos="fade-left">
            <div className=" sm:m-20 lg:m-0 flex lg:relative p-1  lg:rotate-6 bg-gradient-to-r from-purple-800 to-cyan-400 rounded-xl">
              <div className="p-2 rounded-xl  ">
                {/* Contenido dentro del borde */}
                <img
                  src={ftm}
                  alt="Conan Illustration"
                  className="lg:w-80  w-auto h-auto shadow-lg rounded-lg "
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <HowBuy />
      <Joinus />
    </div>
  );
}

export default App;
