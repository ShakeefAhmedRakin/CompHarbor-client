import { useEffect, useState } from "react";
import { Toaster } from "sonner";

const AddProduct = () => {
  const [brands, setBrands] = useState([]);

  useEffect(() => {
    fetch("/brands.json")
      .then((res) => res.json())
      .then((data) => setBrands(data));
  }, []);

  console.log(brands);

  const handleAddProduct = (e) => {
    e.preventDefault();
    const form = e.target;
    const product_image = form.image.value;
    const product_name = form.name.value;
    const product_brand = form.brand.value;
    const product_type = form.type.value;
    const product_price = form.price.value;
    const product_description = form.description.value;
    const product_rating = form.rating.value;

    const newProduct = {
      product_name,
      product_image,
      product_brand,
      product_type,
      product_price,
      product_rating,
      product_description,
    };

    console.log("--------------------------------");
    console.log(newProduct);
    console.log("--------------------------------");

    fetch("http://localhost:5000/products", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newProduct),
    })
      .then((res) => res.json())
      .them((data) => console.log(data));
  };

  return (
    <>
      <Toaster position="bottom-right" richColors />
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-lg mx-auto">
          <div className="border-[1px] border-black p-8 bg-white dark:bg-gray-800">
            <form
              onSubmit={handleAddProduct}
              className="text-black dark:text-white"
            >
              <h1 className="text-center font-bold text-4xl">Add Product</h1>
              <hr className="my-5" />

              <div className="mb-6">
                <label className="block mb-2 text-sm font-medium text-black dark:text-white">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  className="bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-900 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:text-white"
                  placeholder="Name"
                  required
                />
              </div>

              <div className="mb-6">
                <label className="block mb-2 text-sm font-medium text-black dark:text-white">
                  Choose Brand
                </label>
                <select
                  id="brand"
                  name="brand"
                  className="bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-900 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:text-white"
                >
                  {brands.map((brand) => (
                    <option
                      key={brand.id}
                      value={brand.name}
                      className="text-Inter"
                    >
                      {brand.name}
                    </option>
                  ))}
                </select>
              </div>

              <div className="mb-6">
                <label className="block mb-2 text-sm font-medium text-black dark:text-white">
                  Type
                </label>
                <input
                  type="text"
                  name="type"
                  className="bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-900 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:text-white"
                  placeholder="Type"
                  required
                />
              </div>
              <div className="mb-6">
                <label className="block mb-2 text-sm font-medium text-black dark:text-white">
                  Image Link
                </label>
                <input
                  type="text"
                  name="image"
                  className="bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-900 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:text-white"
                  placeholder="Image Link"
                  required
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="mb-6">
                  <label className="block mb-2 text-sm font-medium text-black dark:text-white">
                    Rating
                  </label>
                  <input
                    type="number"
                    name="rating"
                    className="bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-900 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:text-white"
                    placeholder="Rating"
                    required
                  />
                </div>
                <div className="mb-6">
                  <label className="block mb-2 text-sm font-medium text-black dark:text-white">
                    Price
                  </label>
                  <input
                    type="number"
                    name="price"
                    className="bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-900 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:text-white"
                    placeholder="Price"
                    required
                  />
                </div>
              </div>

              <div className="mb-6">
                <label className="block mb-2 text-sm font-medium text-black dark:text-white">
                  Short description
                </label>
                <input
                  type="text"
                  name="description"
                  className="bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-900 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:text-white"
                  placeholder="Short description"
                  required
                />
              </div>

              <div className="flex justify-center">
                <button
                  type="submit"
                  className="btn bg-primaryLight hover:bg-primaryLight font-medium text-white"
                >
                  Add Product
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddProduct;
