import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import AOS from "aos";
import "aos/dist/aos.css";
import logo3 from "../src/assets/logos/logo3.png";

function App() {
  return (
    <div>
      <Navbar />
      <section
        className="pt-36 px-10 min-h-screen bg-gradient-to-r  from-blue-200 to-cyan-200 flex justify-center"
        id="first"
      >
        <div className=" w-full   bg-marroncito  border-8 rounded-xl  p-0 shadow-lg flex  justify-center">
          <img src={logo3} alt="Logo" className="w-auto h-3/5 " />
        </div>
      </section>
    </div>
  );
}

export default App;
