import { PiComputerTowerBold } from "react-icons/pi";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="footer footer-center bg-primaryLight dark:bg-primaryDark text-white py-10">
        <div className="px-8 py-6 bg-transparent hover:bg-transparent normal-case text-xl md:text-3xl border-[1px] border-white rounded-none">
          <h1 className="font-normal text-white tracking-widest flex items-center gap-x-1">
            <PiComputerTowerBold></PiComputerTowerBold>Comp Harbor
          </h1>
        </div>
        <nav className="grid grid-flow-col gap-4 border-white border-[1px] p-5">
          <Link to="/">
            <a className="link link-hover">Home</a>
          </Link>
          <Link to="/login">
            <a className="link link-hover">Login</a>
          </Link>
          <Link to="/register">
            <a className="link link-hover">Sign Up</a>
          </Link>
        </nav>
        <aside>
          <p>Copyright © 2023 - All right reserved by Computer Harbor Ltd</p>
        </aside>
      </footer>
    </>
  );
};

export default Footer;
