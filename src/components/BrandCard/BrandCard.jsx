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
              className="h-full w-full aspect-square object-cover filter blur-[1px] transition-filter duration-500 group-hover:blur-0"
            />
            <div className="bg-black bg-opacity-70 h-full w-full absolute opacity-100 group-hover:opacity-0 transition-opacity duration-300 flex items-center justify-center">
              <h1 className="text-center text-white font-extrabold text-2xl xl:text-4xl">
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
