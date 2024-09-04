

const Navbar = () => {
 
  return (
    <>
       <style>
    {`
      html {
        scroll-behavior: smooth;
      }
    `}
  </style>

    <div className="navbar bg-[#0e2815] mx-auto px-40  fixed top-0 w-full z-50 border-y-2">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg 
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-white "
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[100] mt-3 w-52 p-2 shadow text-black  "
          >
            <li className="italic"><a href="#banner">Home</a></li>
            <li className="italic"><a href="#about">About</a></li>
            <li className="italic"><a href="#popular">Popular</a></li>
            <li className="italic"><a href="#review">Review</a></li>
          </ul>
        </div>
        <a className="text-white font-bold  lg:text-3xl text-xl italic ">IndorePlants.</a>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal px-1 flex justify-between gap-5 text-lg text-white font-bold">
        
        <li className="italic"><a href="#banner">Home</a></li>
            <li className="italic"><a href="#about">About</a></li>
            <li className="italic"><a href="#popular">Popular</a></li>
            <li className="italic"><a href="#review">Review</a></li>
        </ul>
      </div>
      </div>
      </>
  );
};

export default Navbar;
