import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const BrandCard = ({ brand }) => {
  return (
    <>
      <Link to={`/products/${brand.name}`}>
        <div className="max-w-[250px] h-full bg-gray-100 shadow-xl transform hover:scale-102 transition-transform cursor-pointer duration-300 hover:-translate-y-[3px]">
          <div className="relative flex items-center group">
            <img
              src={brand.image}
              className="h-full w-full aspect-square object-cover filter transition-filter duration-500"
            />
            <div className="bg-black bg-opacity-60 bottom-0 w-full absolute opacity-100 group-hover:opacity-0 transition-opacity duration-300 flex items-center justify-center py-2">
              <h1 className="text-center text-white font-bold text-2xl xl:text-2xl">
                {brand.name}
              </h1>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

BrandCard.propTypes = {
  brand: PropTypes.object,
};

export default BrandCard;
