import { FaFacebookF } from "react-icons/fa";
import { CiInstagram } from "react-icons/ci";
import { FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLeaf } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="relative  ">
      <div className="bg-green-800   absolute lg:-top-10  px-10 py-6 rounded-md w-[1200px] lg:left-32">
        <h1 className="text-white text-4xl py-2">
          <span className="text-yellow-600">Subscribe</span> To Our newsletter
        </h1>
        <input
          type="text"
          name=""
          placeholder="Your Email Address"
          className="w-full p-2 rounded-md"
        />
      </div>
      <div className="bg-[#edd593]">
        <div className="flex pt-52  ">
          <hr className="border-2 border-green-700 w-96 mx-auto"></hr>
          <div className="flex mx-auto gap-5 text-xl pb-8">
            <FaFacebookF />
            <FaLinkedinIn />
            <FaXTwitter />
            <CiInstagram />
          </div>
          <hr className="border-2 border-green-700 w-96 mx-auto"></hr>
        </div>
        <div className="grid lg:grid-cols-4 grid-cols-1 gap-8 mx-auto max-w-7xl pb-3">
          <div>
            <FaLeaf className="text-5xl text-green-800"></FaLeaf>
            <h1 className="text-green-700 font-bold italic text-xl">
              Indore Plants
            </h1>
          </div>
          <div className="text-green-950">
            <h1 className="text-2xl font-bold pb-5">Quick Link</h1>
            <h1>Plants</h1>
            <h1>Flowers</h1>
            <h1>Gardening</h1>
            <h1>Seeds</h1>
            <h1>Shipping</h1>
          </div>
          <div className="text-green-950">
            <h1 className="text-2xl font-bold pb-5"> Popular Services</h1>
            <h1>Tree Planting</h1>
            <h1>Grass Cutting</h1>
            <h1>weeds Control</h1>
            <h1>Projects</h1>
          </div>
          <div className="text-green-950">
            <h1 className="text-2xl font-bold pb-5"> Contact Us</h1>
            <h1>+88 333 78 901</h1>
            <h1>code@gmail.com</h1>
            <h1>124 Tailwind Ave,USA</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
