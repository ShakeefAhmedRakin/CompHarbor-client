import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { PiComputerTowerBold } from "react-icons/pi";
import "./Navbar.css";
import { BsNintendoSwitch } from "react-icons/bs";
import PropTypes from "prop-types";
import { Toaster, toast } from "sonner";

const Navbar = ({ toggleTheme }) => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {
        toast.success("Successfully logged out");
      })
      .catch((error) => console.log(error));
  };

  const links = (
    <>
      <li className="navigation-link">
        <NavLink to="/">Home</NavLink>
      </li>

      {user && (
        <>
          <li className="navigation-link">
            <NavLink to="/add-product">Add Product</NavLink>
          </li>
          <li className="navigation-link">
            <NavLink to="/my-cart">My Cart</NavLink>
          </li>
        </>
      )}
    </>
  );

  const logo = (
    <>
      <a className="btn bg-transparent hover:bg-transparent  hover:border-white hover:scale-[1.02] normal-case text-2xl border-[1px] border-white rounded-none">
        <h1 className="font-normal text-white tracking-widest flex items-center gap-x-1">
          <PiComputerTowerBold></PiComputerTowerBold>Comp Harbor
        </h1>
      </a>
    </>
  );

  return (
    <>
      <Toaster position="bottom-right" richColors />
      <div className="navbar bg-primaryLight dark:bg-primaryDark">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="white"
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
              className="text-lg space-y-4 dropdown-content mt-3 border-white border-[1px] -ml-2 z-50 p-4 shadow bg-primaryLight dark:bg-primaryDark rounded-none w-screen"
            >
              {user ? (
                <>
                  <div className="flex justify-center">
                    <div className="flex md:hidden justify-center items-center gap-2 bg-transparent border-[1px] border-white py-[2.55px] pl-[3.5px] pr-2">
                      <img
                        src={user?.photoURL}
                        className="w-10 h-10 rounded-full"
                      />
                      <p className="text-white">{user?.displayName}</p>
                    </div>
                  </div>
                </>
              ) : (
                ""
              )}
              <div className="flex md:hidden justify-center">{logo}</div>
              <div className="flex items-center flex-col gap-3">{links}</div>
            </ul>
          </div>
          <div className="hidden md:flex">{logo}</div>
          <div className="ml-4">
            <button
              className="btn bg-transparent hover:bg-transparent border-white hover:border-white border-[1px] duration-300 rounded-none"
              onClick={toggleTheme}
            >
              <BsNintendoSwitch className="text-3xl text-white"></BsNintendoSwitch>
            </button>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="px-1 text-lg hidden lg:flex gap-6">{links}</ul>
        </div>
        <div className="navbar-end text-white">
          {user ? (
            <>
              {user.displayName ? (
                <>
                  <div className="hidden md:flex justify-center items-center gap-2 mr-2 bg-transparent border-[1px] border-white py-[2.55px] pl-[3.5px] pr-2">
                    <img
                      src={user?.photoURL}
                      className="w-10 h-10 rounded-full"
                    />
                    <p className="text-white">{user?.displayName}</p>
                  </div>
                </>
              ) : (
                ""
              )}
              <a
                className="btn hover:scale-[1.02] bg-transparent hover:bg-transparent hover:border-white border-white border-[1px] text-white rounded-none"
                onClick={handleLogOut}
              >
                Log out
              </a>
            </>
          ) : (
            <Link
              to="/login"
              className="btn hover:scale-[1.02] bg-transparent hover:bg-transparent hover:border-white border-white border-[1px] text-white rounded-none"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </>
  );
};

Navbar.propTypes = {
  toggleTheme: PropTypes.func,
};

export default Navbar;
