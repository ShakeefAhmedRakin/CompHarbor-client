import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { Toaster } from "sonner";

const Root = () => {
  const toggleTheme = () => {
    document.documentElement.classList.toggle("dark");
  };

  return (
    <>
      <Toaster position="top-center" richColors offset="70px" />
      <div className="bg-white dark:bg-gray-900">
        <Navbar toggleTheme={toggleTheme}></Navbar>
        <Outlet></Outlet>
        <Footer></Footer>
      </div>
    </>
  );
};

export default Root;
