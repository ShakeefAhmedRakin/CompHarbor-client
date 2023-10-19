import { useEffect, useState } from "react";
import BrandCard from "../BrandCard/BrandCard";

const Brands = () => {
  const [brands, setBrands] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/brands")
      .then((res) => res.json())
      .then((data) => setBrands(data));
  }, []);

  return (
    <>
      <div className="container px-2 mx-auto my-8 border-[1px] border-black p-8">
        <h1 className="text-center font-bold text-4xl">Featured Brands</h1>
        <p className="text-center max-w-5xl mx-auto mt-2 mb-8">
          Explore top tech brands known for quality and innovation.
        </p>

        <div className="flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {brands.map((brand) => (
              <BrandCard key={brand.id} brand={brand}></BrandCard>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Brands;
