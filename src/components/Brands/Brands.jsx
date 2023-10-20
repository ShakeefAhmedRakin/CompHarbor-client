import { useEffect, useState } from "react";
import BrandCard from "../BrandCard/BrandCard";

const Brands = () => {
  const [brands, setBrands] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch("https://brand-shop-server-rho.vercel.app/brands")
      .then((res) => res.json())
      .then((data) => {
        setBrands(data);
        setLoading(false);
      });
  }, []);

  return (
    <>
      <div className="px-2">
        <div className="container mx-auto my-8 border-[1px] border-black">
          <div className="bg-primaryLight dark:bg-primaryDark py-5 text-white">
            <h1 className="text-center font-bold text-2xl md:text-4xl">
              Top Brands
            </h1>
            <p className="max-w-4xl px-4 text-center mx-auto my-2 text-sm md:text-base">
              Explore the best in gaming tech. Discover our top brands, known
              for quality and performance.
            </p>
          </div>

          <div className="flex justify-center py-10 px-10 bg-white dark:bg-slate-900">
            {loading ? (
              <>
                <div className="flex items-center justify-center py-36">
                  <span className="loading loading-bars loading-xl"></span>
                </div>
              </>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-5">
                {brands.map((brand) => (
                  <BrandCard key={brand._id} brand={brand}></BrandCard>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Brands;
