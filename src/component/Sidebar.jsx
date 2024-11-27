import { FaBarsStaggered, FaUserGraduate, FaUsers,FaArrowLeft } from "react-icons/fa6";
import { Link } from "react-router-dom";
const Sidebar = ({ isSidebarOpen,ToggleSidebar }) => {
  return (
    <div
      className={`fixed z-20 lg:w-[15%] md:w-[30%] w-[48%] lg:top-[3.6rem] md:top-[3.6rem] md:left-0 -left-1 h-svh rounded-tr-xl transition-all duration-500 bg-opacity-25 border-r-2 backdrop-blur-lg border-[#fff] bg-[#c3c1c14e] ${
        isSidebarOpen ? "translate-x-0" : "-translate-x-3/4"
      }`}
    >
        <div className="w-full flex justify-end p-4 cursor-pointer lg:text-xl md:text-lg text-md" onClick={ToggleSidebar}>
            {isSidebarOpen?<FaArrowLeft/>:<FaBarsStaggered />}
        </div>
      <ul className="w-full lg:p-[1rem] md:p-[0.8rem] pl-[0.4rem] pr-[1.2rem] lg:space-y-3 md:space-y-2 space-y-2 text-gray-800">
        <Link to={"./admin"} className="flex items-center gap-x-1 lg:text-[1.1vw] md:text-[2.2vw] text-[3.8vw]">
          <span className="text-xl"><FaUsers /></span>
          <span>Registered User&apos;s</span>
        </Link>
        <Link to={"/rolemanger"} className="flex items-center gap-x-1 lg:text-[1.1vw] md:text-[2.2vw] text-[3.8vw]">
          <span className="text-xl"><FaUserGraduate /></span>
          <span>Manage Roles</span>
        </Link>
      </ul>
    </div>
  );
};

export default Sidebar;
