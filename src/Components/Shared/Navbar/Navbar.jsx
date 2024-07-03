import { IoIosArrowRoundForward } from "react-icons/io";
import logo from "../../../assets/logo dark.png";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const navlinks = (
    <>
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li>
        <NavLink to={"/services"}>Services</NavLink>
      </li>
      <li>
        <NavLink to={"/blog"}>Blog</NavLink>
      </li>
      <li>
        <NavLink to={"/aboutus"}>About us</NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100 h-12 my-8">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
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
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {navlinks}
          </ul>
        </div>
        <img src={logo} alt="" className="h-8 " />
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-[#020043]">{navlinks}</ul>
      </div>
      <div className="navbar-end">
        <a className="btn text-[#020043] btn-outline">
          Appointment
          <span className="-rotate-45">
            <IoIosArrowRoundForward size={22} />
          </span>
        </a>
      </div>
    </div>
  );
};

export default Navbar;
