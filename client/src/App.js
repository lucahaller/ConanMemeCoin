import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import AOS from "aos";
import "aos/dist/aos.css";
import logo3 from "../src/assets/logos/logo3.png";
import logo4 from "../src/assets/fondos/4.png";
import fondo from "../src/assets/fondos/huesitos2.jpg";
import fondo2 from "../src/assets/fondos/fonprueba.png";
import { useEffect } from "react";
import ftm from "../src/assets/pictures/FTM.jpeg";

function App() {
  useEffect(() => {
    setTimeout(() => {
      window.history.scrollRestoration = "manual"; // Desactiva la restauración automática del scroll
      window.scrollTo(0, 0); // Mueve la página arriba
    }, 50);

    AOS.init({
      duration: 1000,
      delay: 100,
      once: true,
    });
  }, []);

  return (
    <div
      className=" bg-gradient-to-r bg-black
     to-stone-400"
    >
      <Navbar />
      <section
        className="pt-28 px-10 pb-72 min-h-screen bg-gradient-to-r flex justify-center"
        id="first"
      >
        <div
          className="w-full xl:h-[1000px]  flex-col bg-purple-700 items-center  border-purple-400 border-8 rounded-3xl p-0 shadow-lg flex bg-cover"
          style={{ backgroundImage: `url(${fondo2})` }}
        >
          <img
            src={logo4}
            alt="Logo"
            className="w-fit h-3/4 pb-0"
            data-aos="zoom-in"
          />
          <div className="flex flex-row gap-10  md:text-3xl text-xl">
            <button className="px-10 py-3 border-4  border-black shadow-[3px_3px_0px_#000] text-marronclaro hover:text-marroncito font-bold bg-violet-500 transition-all duration-300 cursor-pointer hover:translate-x-[1.5px] hover:translate-y-[1.5px] hover:shadow-[1.5px_1.5px_0px_#000] hover:bg-marronclaro active:translate-x-[3px] active:translate-y-[3px] active:shadow-none">
              Chart
            </button>
            <button className="px-7 py-3 border-4  border-black shadow-[3px_3px_0px_#000] hover:text-marronclaro font-bold bg-violetita transition-all duration-300 cursor-pointer hover:translate-x-[1.5px] hover:translate-y-[1.5px] hover:shadow-[1.5px_1.5px_0px_#000] hover:bg-marronhover active:translate-x-[3px] active:translate-y-[3px] active:shadow-none">
              Join us
            </button>
          </div>
        </div>
      </section>
      <section className="min-h-full flex justify-center items-center py-20">
        <div className="max-w-7xl w-full flex flex-col lg:flex-row items-center  p-4 md:p-4 lg:p-0 justify-center lg:items-start gap-10">
          {/* Contenido a la izquierda */}
          <div className="lg:w-2/3 text-center lg:text-left">
            <h2 className="text-7xl font-lucky text-stone-800">
              About the history of{" "}
              <span className="text-purple-800 inline-block" data-aos="flip-up">
                CONAN
              </span>
            </h2>

            <p className="mt-5 text-xl text-stone-600 text-center md:text-justify">
              Conan is more than just a memecoin. It was born from the vision of
              a strong and brave dog, ready to conquer the crypto world. A token
              with a unique story and a community-driven spirit.
            </p>
          </div>

          {/* Imagen a la derecha */}
          <div className="lg:w-1/2 flex justify-center " data-aos="fade-left">
            <div className="relative p-1  rotate-6 bg-gradient-to-r from-purple-800 to-cyan-400 rounded-xl">
              <div className="p-2 rounded-xl  ">
                {/* Contenido dentro del borde */}
                <img
                  src={ftm}
                  alt="Conan Illustration"
                  className="w-80 h-auto shadow-lg rounded-lg "
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
