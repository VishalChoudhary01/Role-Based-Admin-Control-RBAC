import Logo from "/Logo/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="w-full sticky border-b shadow-md shadow-[#23394348]">
      <div className="lg:h-[3.5vw] min-h-12 md:h-[5vh] sm:h-[6vh] h-[7vh] lg:py-[0.5vw] md:py-[0.5vh] sm:py-[1vh] py-[1.5vh] flex navbar lg:px-[1vw] md:px-[2vw] sm:px-[3vw] px-[4vw] justify-between items-center">
        {/* Logo Section */}
        <div className="flex items-center lg:gap-x-2 md:gap-x-[1vw] sm:gap-x-[2vw] gap-x-[2vw]">
          <div className="lg:w-[2vw] lg:h-[2.5vw] md:w-[3vw] md:h-[3vw] sm:w-[4vw] sm:h-[4vw] w-[7vw] h-[7vw] relative">
            <img
              src={Logo}
              alt="logo"
              className="ImageShadow w-full h-full absolute"
            />
          </div>
          <p className="lg:text-[1.3vw] md:text-sm sm:text-[1.8vw] text-md">
            <span className="tracking-wider font-semibold italic font-[NotoSerifAhom]">VRV </span>
            <span className="bg-clip-text font-[PTSerif] multi-text-shadow font-bold text-transparent bg-gradient-to-r from-[#0f4c75] via-[#1d9bf0] to-[#61c0bf]">
              Security
            </span>
          </p>
        </div>

        {/* Admin Button */}
        <div>
          <Link
            to={"/admin"}
            className="lg:text-[1.1vw]  md:text-sm sm:text-[3vw] text-sm te lg:px-[1.5vw] md:px-[2vw] sm:px-[2.5vw] px-[4vw] lg:py-[0.4vw] md:py-[0.4vh] sm:py-[0.8vh] py-[1vh] tracking-wider inline-block shadow-md hover:shadow-lg active:text-white active:bg-[#333] transition-all font-medium bg-[#f6f5f561] border border-[#f7f5f5] bg-opacity-15 backdrop-blur-md rounded-full hover:scale-110 duration-300 ease-in-out"
          >
            Admin
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
