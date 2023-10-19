import { useLoaderData } from "react-router-dom";
import { Rating } from "@smastrom/react-rating";

const ProductDetails = () => {
  const details = useLoaderData();

  console.log(details);
  return (
    <>
      <h1>DETAILS</h1>
      <div className="container px-2 mx-auto my-8 p-8">
        <div className="w-full h-fit bg-white border border-gray-200 shadow dark:bg-gray-800 dark:border-gray-700 p-4">
          <div className="flex flex-col lg:flex-row w-full h-full bg-gray-100 dark:bg-gray-900 ">
            <img
              className="w-full object-contain max-w-lg h-96 p-8"
              src={details.product_image}
              alt="product image"
            />
            <div className="flex flex-col items-left justify-between w-full p-2 md:p-8 gap-x-2">
              <div className="space-y-2">
                <h5 className="text-xl md:text-3xl font-semibold tracking-tight text-gray-900 dark:text-white">
                  {details.product_name}
                </h5>
                <div className="space-x-2">
                  <span className="badge font-medium">
                    {details.product_brand}
                  </span>
                  <span className="badge font-medium">
                    {details.product_type}
                  </span>
                </div>
                <hr className="my-1" />
                <Rating
                  style={{ maxWidth: 120 }}
                  value={parseInt(details.product_rating)}
                  readOnly
                />
                <p className="mt-5 text-base text-gray-900 dark:text-white">
                  {details.product_description}
                </p>
              </div>
              <div className="flex justify-between mt-8">
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
                  {details.product_price}৳
                </h1>
                <button className="btn bg-primaryLight text-white hover:bg-primaryLight">
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
