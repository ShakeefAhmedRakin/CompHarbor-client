import PropTypes from "prop-types";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

const CartCard = ({ product, handleDelete }) => {
  return (
    <>
      <div className="flex flex-col justify-between w-full max-w-lg bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <img
          className="p-8 rounded-t-lg w-full h-[200px] lg:h-[320px] object-contain"
          src={product.product_image}
          alt="product image"
        />

        <div className="px-5 pb-5">
          <div className="flex justify-between">
            <span className="badge my-4 font-bold">
              {product.product_brand}
            </span>
            <span className="badge my-4 font-medium">
              {product.product_type}
            </span>
          </div>
          <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
            {product.product_name}
          </h5>

          <div className="my-2 flex justify-between">
            <Rating
              style={{ maxWidth: 120 }}
              value={parseInt(product.product_rating)}
              readOnly
            />
            <span className="bg-blue-100 pt-1 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
              {product.product_rating}.0
            </span>
          </div>

          <div className="flex justify-between items-center mt-4">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
              {product.product_price}৳
            </h1>

            <button
              onClick={() => handleDelete(product.cart_id)}
              className="btn bg-primaryLight text-white hover:bg-primaryLight"
            >
              Remove
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
