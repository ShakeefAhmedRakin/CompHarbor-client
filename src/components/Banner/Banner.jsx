import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <>
      <div className="relative flex items-center justify-center py-20 lg:py-48">
        <img
          src="https://i.ibb.co/ncVB3NZ/pexels-andrey-matveev-5766819.jpg"
          className="absolute object-cover h-full w-full z-10"
        />
        <div className="absolute h-full w-full z-10 bg-gradient-to-bl from-primaryLight via-gray-700 dark:via-gray-900 dark:to-primaryLight to-primaryLight opacity-80"></div>
        <div className="container z-20 text-white px-2 flex flex-col-reverse lg:flex-row-reverse  justify-center items-center gap-8">
          <div className="p-2 border-[3px] border-white dark:border-[#1c232b]">
            <div
              data-aos="zoom-in"
              className="max-w-2xl bg-primaryLight dark:bg-primaryDark flex flex-col items-center justify-center py-8 gap-6 text-white dark:text-white"
            >
              <div className="py-5 px-2 bg-transparent normal-case text-2xl border-[1px] border-white dark:border-white rounded-none">
                <h1 className="font-medium text-white dark:text-white tracking-widest flex items-center gap-x-1 text-base md:text-2xl">
                  Shop the Latest in Tech
                </h1>
              </div>
              <p className="text-lg px-4 md:px-12 text-center">
                Welcome to our online store, your one-stop destination for all
                things tech. Explore a wide range of products, from cutting-edge
                gadgets to essential accessories. Find the best deals and
                top-quality tech gear for all your needs.
              </p>
              <Link
                to="/register"
                className="btn hover:scale-[1.02] bg-white hover:bg-white hover:border-none border-black border-none rounded-none font-bold text-black"
              >
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
