import { Link, NavLink } from "react-router-dom";
import './navbar.css'

const Navbar = () => {
    // nav items for small devices and larg devices
  const navItems = <>
    <NavLink to='/'><li className="mr-10">Home</li></NavLink>
    <NavLink><li className="mr-10">Blogs</li></NavLink>
    <NavLink><li className="mr-10">Adress</li></NavLink>
    <NavLink><li className="mr-10">Donate us</li></NavLink>

  </>;

  return (
    <div className="navbar bg-transparent background-img text-white max-w-7xl mx-auto bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
        {
            navItems
        }
          </ul>
        </div>
        {/* div for name and icon */}
        <div className="flex items-center">
            <img src="https://i.ibb.co/WDYxJ4y/icons8-handshake-64.png" alt="" />
            <h2 className="text-4xl font-bold ms-5">FlowLancher</h2>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
            {
                navItems
            }
        </ul>
      </div>
      <div className="navbar-end">
        <Link to='/login'><button>Login</button></Link>
      </div>
    </div>
  );
};

export default Navbar;
