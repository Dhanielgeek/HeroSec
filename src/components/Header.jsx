import arrow from "../assets/Frame.png";
import { FaArrowRight } from "react-icons/fa";
import Logo from "../assets/Auto Layout Horizontal.png";
import { useState } from "react";

import { RiMenu3Fill } from "react-icons/ri";
import { MdOutlineClear } from "react-icons/md";
import { AnimatePresence, motion } from "framer-motion";

const Header = () => {
  const [Toggle, setToggle] = useState(false);

  const HandleToggle = () => {
    setToggle(!Toggle);
  };

  const closeToggle = () => {
    setToggle(false);
  };

  return (
    <div className="w-full h-[6rem]">
      <div className="w-full h-[50%] text-white font-semibold bg-[#000009] flex justify-center max-md:justify-around items-center">
        <div className="w-[4%] h-full  flex justify-center items-center max-md:w-[10%]">
          <img src={arrow} alt="" width={25} />
        </div>
        <div className=" w-[60%] h-full flex justify-center  items-center max-md:w-[80%] ">
          <p className=" max-md:text-[10px] text-center">
            Nov 8th, 10AM PT | Fine-Tuning OpenAI’s GPT 3.5 to Unlock Enterprise
            Use Cases
          </p>
          <nav className="w-[20%] h-full cursor-pointer max-md:text-[10px] flex justify-center gap-1 items-center max-md:w-[50%]">
            Register Now <FaArrowRight className=" max-md:hidden" />{" "}
          </nav>
        </div>
      </div>
      <div className="w-full h-[50%] border-slate-600 border-b bg-[#00000f] flex justify-around items-center max-md:justify-between px-7">
        <div className="w-[10%] h-full  flex justify-center items-center max-md:w-[30%]">
          <img src={Logo} alt="" />
        </div>
        <div className="w-[48%] h-full max-md:hidden  font-semibold text-white flex justify-around items-center">
          <nav>Products</nav>
          <nav>Governments</nav>
          <nav>Solutions</nav>
          <nav>Customers</nav>
          <nav>Pricing</nav>
          <nav>Resources</nav>
        </div>
        <div className="w-[18%] h-full flex justify-around items-center max-md:hidden">
          <button className="flex justify-center font-semibold text-white items-center gap-2 px-3 py-2 rounded-md bg-custom-gradient">
            Book a Demo <FaArrowRight />
          </button>
          <p className=" font-semibold  text-white">Login</p>
        </div>
        <div className="w-[20%] h-[100%] relative hidden  max-md:flex justify-center items-center">
          {Toggle ? (
            <MdOutlineClear
              className="w-[50%] h-[50%] text-white cursor-pointer"
              onClick={HandleToggle}
            />
          ) : (
            <RiMenu3Fill
              className="w-[50%] h-[50%] text-white cursor-pointer"
              onClick={HandleToggle}
            />
          )}
          <AnimatePresence>
            {Toggle && (
              <motion.div
                className=" w-[18rem] absolute z-20 bg-[#00000f] top-[3rem] right-0"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className=" w-full flex flex-col items-start px-6 py-4">
                  <nav
                    className="text-white font-semibold cursor-pointer py-2"
                    onClick={() => {
                      closeToggle();
                    }}
                  >
                    Products
                  </nav>
                  <nav
                    className="text-white font-semibold cursor-pointer py-2"
                    onClick={() => {
                      const faqSection = document.getElementById("faq");
                      if (faqSection) {
                        faqSection.scrollIntoView({ behavior: "smooth" });
                      }
                    }}
                  >
                    Governments
                  </nav>
                  <nav
                    className="text-white font-semibold cursor-pointer py-2"
                    onClick={() => {
                      closeToggle();
                    }}
                  >
                    Solutions
                  </nav>
                  <nav
                    className="text-white font-semibold cursor-pointer py-2"
                    onClick={() => {
                      closeToggle();
                    }}
                  >
                    Customers
                  </nav>
                  <nav
                    className="text-white font-semibold cursor-pointer py-2"
                    onClick={() => {
                      closeToggle();
                    }}
                  >
                    Pricing
                  </nav>
                  <nav
                    className="text-white font-semibold cursor-pointer py-2"
                    onClick={() => {
                      closeToggle();
                    }}
                  >
                    Resources
                  </nav>
                </div>
                <div className="w-full flex flex-col justify-around  px-5 items-start py-2">
                  <button className=" flex justify-center items-center px-2 gap-2 py-2 bg-custom-gradient font-semibold text-white mb-2 rounded-md">
                    Book a Demo <FaArrowRight />
                  </button>
                  <button className="px-9 py-2  font-semibold text-white rounded-md">
                    Login
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default Header;
