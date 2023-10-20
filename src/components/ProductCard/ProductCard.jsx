import PropTypes from "prop-types";
import { Rating } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <>
      <div className="flex flex-col justify-between w-full max-w-lg bg-gray-50 border-[1.5px] border-black dark:border-white shadow dark:bg-gray-800">
        <img
          className="p-8 rounded-t-lg w-full h-[200px] lg:h-[320px] object-contain"
          src={product.product_image}
          alt="product image"
        />

        <div className="px-5 pb-5">
          <div className="flex gap-4">
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
            <span className="bg-blue-100 pt-1 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
              {product.product_rating}.0
            </span>
          </div>

          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            {product.product_price}৳
          </h1>
          <div className="flex justify-between mt-4">
            <Link to={`/update/${product._id}`}>
              <button className="btn border-none bg-primaryLight dark:bg-primaryDark hover:dark:bg-primaryDark text-white hover:bg-primaryLight">
                Update
              </button>
            </Link>

            <Link to={`/product/${product._id}`}>
              <button className="btn border-none bg-primaryLight dark:bg-primaryDark hover:dark:bg-primaryDark text-white hover:bg-primaryLight">
                Details
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

ProductCard.propTypes = {
  product: PropTypes.object,
};

export default ProductCard;
