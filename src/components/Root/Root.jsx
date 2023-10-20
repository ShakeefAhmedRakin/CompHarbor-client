import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const Root = () => {
  const toggleTheme = () => {
    console.log("Theme Switching");
    document.documentElement.classList.toggle("dark");
  };
  return (
    <>
      <div className="bg-white dark:bg-gray-800">
        <Navbar toggleTheme={toggleTheme}></Navbar>
        <Outlet></Outlet>
        <Footer></Footer>
      </div>
    </>
  );
};

export default Root;
