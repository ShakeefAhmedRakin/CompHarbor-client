import { useLoaderData } from "react-router-dom";
import { Rating } from "@smastrom/react-rating";
import { AuthContext } from "../../providers/AuthProvider";
import { useContext } from "react";
import { Toaster, toast } from "sonner";

const ProductDetails = () => {
  const details = useLoaderData();
  const { user } = useContext(AuthContext);

  const productInfo = {
    user_id: user.uid,
    product_id: details._id,
  };

  const handleAddToCart = () => {
    fetch("https://brand-shop-server-rho.vercel.app/carts", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(productInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          toast.success("Item added to cart successfully");
        }
      });
  };

  return (
    <>
      {details.error === "Invalid product ID" ? (
        <>
          <div
            data-aos="fade-up"
            className="px-2 flex items-center justify-center"
          >
            <div className="container mx-auto my-8 border-[1px] border-black max-w-xl">
              <div className="bg-primaryLight dark:bg-primaryDark py-44 text-white space-y-4">
                <h1 className="font-black text-white text-9xl text-center">
                  404
                </h1>
                <p className="text-center text-2xl font-bold tracking-tight text-gray-50 sm:text-4xl">
                  Uh-oh!
                </p>

                <p className="text-center mt-4 text-gray-50">
                  {`We can't find that product.`}
                </p>
              </div>
            </div>
          </div>
        </>
      ) : (
        <div>
          <Toaster position="bottom-right" richColors />

          <div data-aos="fade-up" className="container px-2 mx-auto my-8 p-8">
            <div className="w-full h-fit bg-white border border-gray-200 shadow dark:bg-gray-800 dark:border-gray-700 p-4">
              <h1 className="bg-primaryLight dark:bg-primaryDark py-5 text-center my-5 font-bold text-xl md:text-4xl text-white">
                Product Details
              </h1>
              <div className="flex flex-col lg:flex-row w-full h-full bg-gray-100 dark:bg-gray-900 ">
                <div className="">
                  <img
                    className="w-full aspect-square object-contain h-48 md:h-96"
                    src={details.product_image}
                    alt="product image"
                  />
                </div>
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
                    <p className="mt-5 text-sm md:text-base text-gray-900 dark:text-white">
                      {details.product_description}
                    </p>
                  </div>
                  <div className="flex justify-between place-items-center mt-8">
                    <h1 className="text-xl md:text-3xl font-bold text-gray-900 dark:text-white">
                      {details.product_price}৳
                    </h1>
                    <button
                      onClick={handleAddToCart}
                      className="btn btn-sm md:btn-md bg-primaryLight dark:bg-primaryDark dark:hover:bg-primaryDark text-white hover:bg-primaryLight"
                    >
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductDetails;
