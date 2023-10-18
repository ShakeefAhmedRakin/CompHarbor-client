import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const BrandCard = ({ brand }) => {
  return (
    <>
      <Link to={`/${brand.name}`}>
        <div className="card card-compact w-full bg-base-100 shadow-xl hover:scale-[1.02] cursor-pointer duration-300">
          <figure>
            <img src={brand.image} className="h-56 object-cover" />
          </figure>
          <h2 className="text-center font-bold text-2xl my-2">{brand.name}</h2>
        </div>
      </Link>
    </>
  );
};

BrandCard.propTypes = {
  brand: PropTypes.object,
};

export default BrandCard;
