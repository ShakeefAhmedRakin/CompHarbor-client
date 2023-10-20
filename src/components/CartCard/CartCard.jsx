import PropTypes from "prop-types";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { ImCross } from "react-icons/im";

const CartCard = ({ product, handleDelete }) => {
  return (
    <>
      <div className="flex justify-start w-full max-w-[1500px] bg-gray-50 border-[1.5px] border-black dark:border-white shadow dark:bg-gray-800">
        <div className="border-r-[1px] border-black">
          <img
            className="aspect-square h-[100px] md:h-[200px] object-contain"
            src={product.product_image}
            alt="product image"
          />
        </div>

        <div className="flex flex-col justify-between flex-1 p-2 md:p-4 gap-1">
          <div className="flex flex-col">
            <div className="flex justify-between w-full">
              <h5 className="text-xs md:text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                {product.product_name}
              </h5>
              <h1 className="text-sm md:text-xl font-extrabold text-gray-900 dark:text-white">
                {product.product_price}৳
              </h1>
            </div>
            <hr className="my-2" />
            <div className="flex gap-1">
              <span className="badge font-bold badge-sm md:badge-md">
                {product.product_brand}
              </span>
              <span className="badge font-medium badge-sm md:badge-md">
                {product.product_type}
              </span>
            </div>
            <div className="ml-1 my-2">
              <div className="flex items-center">
                <Rating
                  style={{ maxWidth: 120 }}
                  value={parseInt(product.product_rating)}
                  readOnly
                />
                <span className=" bg-blue-100 dark:bg-primaryDark pt-1 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:text-white ml-3">
                  {product.product_rating}.0
                </span>
              </div>
            </div>
          </div>
          <div className="flex justify-end items-center">
            <button
              onClick={() => handleDelete(product.cart_id)}
              className="btn btn-sm md:btn-md border-none bg-primaryLight dark:bg-primaryDark hover:dark:bg-primaryDark text-white hover:bg-primaryLight"
            >
              <ImCross className="text-[10px] md:text-base"></ImCross>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

CartCard.propTypes = {
  product: PropTypes.object,
  handleDelete: PropTypes.func,
};

export default CartCard;
