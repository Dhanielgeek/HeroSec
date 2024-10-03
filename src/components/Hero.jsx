import { FaArrowRight } from "react-icons/fa";
import img1 from "../assets/Auto Layout Vertical (1).png";
import img2 from "../assets/Auto Layout Vertical (2).png";
import img3 from "../assets/Auto Layout Vertical (3).png";
import img4 from "../assets/Auto Layout Vertical (4).png";
import img5 from "../assets/Auto Layout Vertical (5).png";
import img6 from "../assets/Auto Layout Vertical (6).png";

const Hero = () => {
  const ImgArry = [img1, img2, img3, img4, img5, img6];

  return (
    <div className="Hero_img w-full h-[50rem] bg-gradient-to-r bg-[#00000f] flex-col flex justify-center items-center">
      <div className="w-[60%] h-[50%] flex justify-center space-y-8 items-center flex-col max-md:w-[90%]">
        <h2 className="text-6xl text-center font-bold text-white max-md:text-5xl bg-opacity-80">
          Power{" "}
          <span className="text-purple-400">
            Automotive{" "}
            <span className="bg-gradient-to-r from-[#de53ff] via-[#f3b996] to-[#f9da76] bg-clip-text text-transparent font-bold">
              {" "}
              AI
            </span>
          </span>{" "}
          With Your Data
        </h2>
        <p className="text-xl text-center text-slate-200 font-medium max-md:text-sm bg-opacity-80">
          Make the best models with the best data. Scale Data Engine leverages
          your enterprise data, and with Scale Generative AI Platform, safely
          unlocks the value of AI.
        </p>
        <div className="w-[60%] h-[10%] flex justify-center items-center gap-2 max-md:w-[90%]">
          <button className="flex justify-center items-center px-3 py-3 bg-custom-gradient rounded text-white font-semibold gap-2">
            Book a Demo <FaArrowRight />{" "}
          </button>
          <p className="flex justify-center items-center gap-2 font-semibold text-white">
            Build AI <FaArrowRight />
          </p>
        </div>
      </div>
      <div className="w-[60%] h-[20%] flex flex-col justify-around  items-center max-md:w-[90%]">
        <p className="text-slate-300 py-2 font-semibold text-sm text-center">
          Scale works with Generative AI Companies, U.S Government Agencies,
          Enterprises & Startup
        </p>
        <div className="w-full h-[30%] flex justify-around items-center flex-wrap max-md:h-[80%]">
          {ImgArry.map((item, index) => (
            <img key={index} className="" src={item} alt="" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
