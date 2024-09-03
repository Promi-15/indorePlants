import { FaStar } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
const Popular = () => {
  return (
    <div className=" bg-green-900 min-h-screen ">
      <div className="text-center pt-10">
        <h1 className="text-yellow-600 font-bold italic text-5xl mb-5">Your Choice Plant</h1>
        <p className="text-white">Follow instruction for more</p>
      </div>
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-9 lg:pt-40">
        <div className=" border-2 relative p-16    bg-gray-400 rounded-lg bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20  border-gray-100 ">
          <div className="w-40 absolute -top-28 mx-auto left-16">
            <img src="/public/cart-1.png" alt="" />
          </div>
          <div>
            <h1 className="italic font-bold text-white">
              Nephrolepis exaltata
            </h1>
            <p className="text-white text-xl my-4">Boston Fern</p>

            <div className="flex gap-2">
              <FaStar className="text-orange-500" />
              <FaStar className="text-orange-500" />
              <FaStar className="text-orange-500" />
              <FaStar className="text-orange-500" />
              <FaStar className="text-orange-500" />
            </div>
            <div className="flex gap-36 items-center mt-5">
              <h1 className="text-white">$5</h1>
              <FaShoppingCart className="text-orange-600 " />
            </div>
          </div>
        </div>
        <div className=" border-2 relative p-16    bg-gray-400 rounded-lg bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20  border-gray-100 ">
          <div className="w-40 absolute -top-28 mx-auto left-16">
            <img src="/public/cart-2.png" alt="" />
          </div>
          <div>
            <h1 className="italic font-bold text-white">
              Nephrolepis exaltata
            </h1>
            <p className="text-white text-xl my-4">Boston Fern</p>

            <div className="flex gap-2">
              <FaStar className="text-orange-500" />
              <FaStar className="text-orange-500" />
              <FaStar className="text-orange-500" />
              <FaStar className="text-orange-500" />
              <FaStar className="text-orange-500" />
            </div>
            <div className="flex gap-36 items-center mt-5">
              <h1 className="text-white">$5</h1>
              <FaShoppingCart className="text-orange-600 " />
            </div>
          </div>
        </div>
        <div className=" border-2 relative p-16    bg-gray-400 rounded-lg bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20  border-gray-100 ">
          <div className="w-40 absolute -top-28 mx-auto left-16">
            <img src="/public/cart-3.png" alt="" />
          </div>
          <div>
            <h1 className="italic font-bold text-white">
              Nephrolepis exaltata
            </h1>
            <p className="text-white text-xl my-4">Boston Fern</p>

            <div className="flex gap-2">
              <FaStar className="text-orange-500" />
              <FaStar className="text-orange-500" />
              <FaStar className="text-orange-500" />
              <FaStar className="text-orange-500" />
              <FaStar className="text-orange-500" />
            </div>
            <div className="flex gap-36 items-center mt-5">
              <h1 className="text-white">$5</h1>
              <FaShoppingCart className="text-orange-600 " />
            </div>
          </div>
        </div>
        <div className=" border-2 relative p-16    bg-gray-400 rounded-lg bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20  border-gray-100 ">
          <div className="w-40 absolute -top-28 mx-auto left-16">
            <img src="/public/cart-4.png" alt="" />
          </div>
          <div>
            <h1 className="italic font-bold text-white">
              Nephrolepis exaltata
            </h1>
            <p className="text-white text-xl my-4">Boston Fern</p>

            <div className="flex gap-2">
              <FaStar className="text-orange-500" />
              <FaStar className="text-orange-500" />
              <FaStar className="text-orange-500" />
              <FaStar className="text-orange-500" />
              <FaStar className="text-orange-500" />
            </div>
            <div className="flex gap-36 items-center mt-5">
              <h1 className="text-white">$5</h1>
              <FaShoppingCart className="text-orange-600 " />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popular;
