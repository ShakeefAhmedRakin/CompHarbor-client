import { useLoaderData } from "react-router-dom";
import ProductCard from "../ProductCard/ProductCard";
import { TbMoodEmpty } from "react-icons/tb";

const Products = () => {
  const products = useLoaderData();

  return (
    <>
      <div className="container mx-auto px-4 py-20 ">
        <div className="border-[1px] bg-white dark:bg-gray-800 border-black dark:border-white">
          <h1 className="text-center my-10 font-bold text-4xl text-gray-900 dark:text-white">
            Products
          </h1>
          <hr className="my-5" />
          <div className="container px-2 mx-auto my-8 p-8">
            <div className="flex justify-center">
              {products.length > 0 ? (
                <div className="w-full lg:w-fit grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
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
