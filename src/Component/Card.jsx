import { FaTruck } from "react-icons/fa";
import { CiHeadphones } from "react-icons/ci";
import { TbPlant } from "react-icons/tb";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
const Card = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-10 my-28  lg:max-w-7xl lg:mx-auto justify-center">
      <div
        className="border-2 text-green-900 w-72 p-10 rounded-2xl hover:bg-slate-50 hover:transform hover:transition hover:duration-1000 hover:scale-105 mx-auto"
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1500"
      >
        <div className="flex gap-5 items-center">
          <FaTruck className="text-2xl" />
          <h1 className="font-medium text-lg">
            Fast <br /> Delivary
          </h1>
        </div>
        <div className="italic">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio,
          pariatur. Error odio repellat aspernatur architecto.
        </div>
      </div>
      <div
        className="border-2 text-green-900 w-72 p-10 rounded-2xl hover:bg-slate-50 hover:transform hover:transition hover:duration-1000 hover:scale-105 mx-auto"
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1500"
      >
        <div className="flex gap-5 items-center">
          <CiHeadphones className="text-2xl" />
          <h1 className="font-medium text-lg">
            Great Customer <br /> Service
          </h1>
        </div>
        <div className="italic">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio,
          pariatur. Error odio repellat aspernatur architecto.
        </div>
      </div>
      <div
        className="border-2 text-green-900 w-72 p-10 rounded-2xl hover:bg-slate-50 hover:transform hover:transition hover:duration-1000 hover:scale-105 mx-auto"
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1500"
      >
        <div className="flex gap-5 items-center">
          <TbPlant className="text-2xl" />
          <h1 className="font-medium text-lg">
            Original <br /> Plants
          </h1>
        </div>
        <div className="italic">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio,
          pariatur. Error odio repellat aspernatur architecto.
        </div>
      </div>
      <div
        className="border-2 text-green-900 w-72 p-10 rounded-2xl hover:bg-slate-50 hover:transform hover:transition hover:duration-1000 hover:scale-105 mx-auto"
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1500"
      >
        <div className="flex gap-5 items-center">
          <RiMoneyDollarCircleLine className="text-2xl" />
          <h1 className="font-medium text-lg">
            Affordable <br />
            Price
          </h1>
        </div>
        <div className="italic">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio,
          pariatur. Error odio repellat aspernatur architecto.
        </div>
      </div>
    </div>
  );
};

export default Card;
