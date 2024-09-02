const About = () => {
  return (
    <div>
      <div className="bg-[#0e2815] relative py-10">
        <div className="">
          <h1 className="text-4xl text-center text-yellow-500 font-bold italic">
            About Us
          </h1>
          <p className="text-center text-white ">Follow function for more</p>
        </div>
        <div className="w-24 lg:w-72 flex justify-end items-end absolute top-0 right-0">
          <img src="/public/leaf-3.png" alt="" />
        </div>
        <div className="flex flex-col-reverse lg:flex-row  items-center max-w-7xl mx-auto">
          <div className="w-1/2">
            <img src="/public/plant-1.png" alt="" className="w-96" />
          </div>
          <div className="w-1/2">
            <h1 className="text-xl mt-10 lg:text-5xl text-white">
              Come with us <br /> <span className="text-yellow-600">grow up </span> 
              your plant
            </h1>
            <p className="text-white italic lg:w-2/3 pt-10 font-semibold">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
              obcaecati minus itaque vel quia explicabo totam at ducimus cumque,
              cum nam distinctio qui sapiente illum.
            </p>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row  items-center max-w-7xl mx-auto">
         
          <div className="w-1/2">
            <h1 className="text-xl lg:text-5xl text-white">
              Make your <span className="text-yellow-600">organic</span> <br />
              garden
            </h1>
            <p className="text-white italic lg:w-2/3 pt-10 font-semibold">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
              obcaecati minus itaque vel quia explicabo totam at ducimus cumque,
              cum nam distinctio qui sapiente illum.
            </p>
          </div>
          <div className="w-1/2">
            <img src="/public/plant-2.png" alt="" className="w-96" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
