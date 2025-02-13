import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import AOS from "aos";
import "aos/dist/aos.css";
import logo3 from "../src/assets/logos/logo3.png";
import fondo from "../src/assets/fondos/huesitos2.jpg";

function App() {
  return (
    <div>
      <Navbar />
      <section
        className="pt-28 px-10 pb-72 min-h-screen bg-gradient-to-r from-stone-300 to-stone-400 flex justify-center"
        id="first"
      >
        <div
          className="w-full xl:h-[1000px] bg-marroncito  border-8 rounded-3xl p-0 shadow-lg flex justify-center bg-cover"
          style={{ backgroundImage: `url(${fondo})` }}
        >
          <img
            src={logo3}
            alt="Logo"
            className="w-auto h-4/5"
            data-aos="zoom-in"
          />
        </div>
      </section>
    </div>
  );
}

export default App;
