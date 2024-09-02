import { FaLeaf } from "react-icons/fa";
import { PiPlant } from "react-icons/pi";

const Banner = () => {
  return (
    <div className="bg-[#13361d]">
      <div className="min-h-screen flex mx-auto max-w-5xl items-center justify-center relative gap-9 ">
        <div className=" w-1/2 z-10">
          <h1 className="text-5xl font-bold text-white">
            <span className="text-yellow-600">Plants</span> make a positive{" "}
            <span className="text-yellow-600">impact</span> on your environment
          </h1>
          <p className="py-6 text-white">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa
            laborum libero consectetur similique quia distinctio?
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
        <div className="w-1/2 relative z-10">
          <img src="/public/home.png" className="" />
          <div className="flex justify-between w-full items-center bg-transparent absolute top-0">
            <PiPlant className="text-5xl text-gray-500" />

            <FaLeaf className="text-5xl text-gray-500" />
          </div>
        </div>
        <div className="absolute inset-0 flex items-center justify-center ">
          <div className="rounded-full w-[500px] h-[500px] bg-gradient-radial from-slate-50 via-transparent to-transparent opacity-15 z-0"></div>
        </div>
        
          </div>
          <div className="absolute  bottom-0 right-0">
          <div className="rounded-full w-[500px] h-[500px] bg-gradient-radial from-slate-50 via-transparent to-transparent opacity-15 z-0"></div>
        </div>
    </div>
  );
};

export default Banner;
