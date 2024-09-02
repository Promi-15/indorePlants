import { FaLeaf } from "react-icons/fa";
import { PiPlant } from "react-icons/pi";
import { LuLeaf } from "react-icons/lu";
import { FaFacebookF } from "react-icons/fa";
import { CiInstagram } from "react-icons/ci";
import { FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { PiPottedPlantLight } from "react-icons/pi";
const Banner = () => {
  return (
    <div className="bg-[#0e2815] px-10">
      <div className="min-h-screen flex flex-col-reverse lg:flex-row md:flex-row mx-auto max-w-5xl items-center justify-center relative gap-9 ">
        <div className="lg:w-1/2 z-10">
          <h1 className=" text-xl lg:text-5xl font-bold text-white">
            <span className="text-yellow-600">Plants</span> make a positive{" "}
            <span className="text-yellow-600">impact</span> on your environment
          </h1>
          <p className="py-6 text-white italic font-bold">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa
            laborum libero consectetur similique quia distinctio?
          </p>
          <div className="flex flex-col lg:flex-row  items-center gap-10 ">
            <button className="btn bg-yellow-600 border-none w-48 text-white">
              Shop Now{" "}
              <span>
                <LuLeaf />
              </span>
            </button>
            <button className="btn btn-outline border-2 border-green-600 w-48 text-white">
              Know More{" "}
              <span>
                <LuLeaf />
              </span>
            </button>
          </div>
          <p className="text-white pt-5 italic font-bold">
            You will get 30 days free trial
          </p>
          <div className="flex gap-7 pt-20 text-white mb-5">
            <FaFacebookF />
            <CiInstagram></CiInstagram>
            <FaLinkedinIn />
            <FaXTwitter />
          </div>
        </div>
        <div className="w-72 py-5 lg:w-1/2 relative z-10">
          <img src="/public/home.png" className="" />
          <div className="flex justify-between w-full items-center bg-transparent absolute top-1">
            <PiPlant className="text-3xl lg:text-5xl text-gray-500 rotate-45" />

            <FaLeaf className="text-3xl lg:text-5xl text-gray-500 -rotate-90" />
          </div>
          <div className="text-5xl text-gray-500  absolute -rotate-45  bottom-5">
            <PiPottedPlantLight />
          </div>
        </div>
        <div className="absolute inset-0 flex items-center justify-center ">
          <div className="rounded-full w-[500px] h-[500px] bg-gradient-radial from-slate-50 via-transparent to-transparent opacity-15 z-0"></div>
        </div>
      </div>
      <div className="absolute  bottom-0 right-0 lg:top-[320px] lg:left-[1000px]">
        <div className="rounded-full w-[500px] h-[500px] bg-gradient-radial from-slate-50 via-transparent to-transparent opacity-15 z-0"></div>
      </div>
    </div>
  );
};

export default Banner;
