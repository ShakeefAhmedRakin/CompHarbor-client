import { useLoaderData } from "react-router-dom";
import ProductCard from "../ProductCard/ProductCard";
import { TbMoodEmpty } from "react-icons/tb";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Autoplay, EffectFade, Pagination } from "swiper/modules";

const Products = () => {
  const products = useLoaderData();

  const title = products[0] ? products[0]?.product_brand : "Products";

  const slides = (
    <>
      <SwiperSlide>
        <img
          className="w-full object-cover h-full object-bottom"
          src="https://i.ibb.co/zh1n3TV/ad-1.jpg"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          className="w-full object-cover h-full object-center"
          src="https://i.ibb.co/Sx05vTx/GT75-titan-3840-2160.jpg"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          className="w-full object-cover h-full object-right-bottom"
          src="https://i.ibb.co/WGNNqp4/download.png"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          className="w-full object-cover h-full object-center"
          src="https://i.ibb.co/tZ59Gd1/BglPGC.webp"
        />
      </SwiperSlide>
    </>
  );

  return (
    <>
      <div className="container mx-auto px-4 py-20 ">
        <div className="border-[1px] bg-white dark:bg-gray-900 border-black dark:border-white">
          <div className="p-4">
            <Swiper
              spaceBetween={30}
              effect={"fade"}
              pagination={{
                clickable: true,
              }}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              modules={[EffectFade, Pagination, Autoplay]}
              className="mySwiper h-[140px] md:h-[350px] z-0"
            >
              {slides}
            </Swiper>
          </div>
          <hr className="mb-5" />
          <h1 className="bg-primaryLight dark:bg-primaryDark py-5 text-center my-5 mx-4 font-bold text-4xl text-white">
            {title}
          </h1>
          <hr className="my-5" />
          <div className="container px-2 mx-auto my-8 p-8">
            <div className="flex justify-center">
              {products.length > 0 ? (
                <div className="w-full lg:w-fit grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                  {products.map((product) => (
                    <ProductCard
                      key={product._id}
                      product={product}
                    ></ProductCard>
                  ))}
                </div>
              ) : (
                <div className="py-36 flex flex-col items-center">
                  <h1 className="text-center font-bold text-3xl text-gray-900 dark:text-white">
                    No items for this brand yet!
                  </h1>
                  <TbMoodEmpty className="text-6xl mt-4 text-gray-900 dark:text-white"></TbMoodEmpty>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
