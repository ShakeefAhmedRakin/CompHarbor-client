import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { Toaster, toast } from "sonner";

const UpdateProduct = () => {
  const [brands, setBrands] = useState([]);

  const existingDetails = useLoaderData();

  const {
    _id,
    product_name,
    product_image,
    product_brand,
    product_type,
    product_price,
    product_rating,
    product_description,
  } = existingDetails;

  useEffect(() => {
    fetch("/brands.json")
      .then((res) => res.json())
      .then((data) => setBrands(data));
  }, []);

  console.log(brands);

  const handleUpdateProduct = (e) => {
    e.preventDefault();
    const form = e.target;
    const product_image = form.image.value;
    const product_name = form.name.value;
    const product_brand = form.brand.value;
    const product_type = form.type.value;
    const product_price = form.price.value;
    const product_description = form.description.value;
    const product_rating = form.rating.value;

    const updatedProduct = {
      product_name,
      product_image,
      product_brand,
      product_type,
      product_price,
      product_rating,
      product_description,
    };
    // Sending data to server
    fetch(`http://localhost:5000/product/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedProduct),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          toast.success("Product has been updated successfully");
        }
      });
  };

  return (
    <>
      <Toaster position="bottom-right" richColors />
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-lg mx-auto">
          <div className="border-[1px] border-black p-8 bg-white dark:bg-gray-800">
            <form
              onSubmit={handleUpdateProduct}
              className="text-black dark:text-white"
            >
              <h1 className="text-center font-bold text-4xl">Update Product</h1>
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
                  defaultValue={product_name}
                />
              </div>

              <div className="mb-6">
                <label className="block mb-2 text-sm font-medium text-black dark:text-white">
                  Choose Brand
                </label>
                <select
                  id="brand"
                  name="brand"
                  defaultValue={product_brand}
                  className="bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-900 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:text-white"
                >
                  {brands.map((brand) => {
                    if (brand.name === product_brand) {
                      return (
                        <option key={brand.id} value={brand.name} selected>
                          {brand.name}
                        </option>
                      );
                    } else {
                      return (
                        <option key={brand.id} value={brand.name}>
                          {brand.name}
                        </option>
                      );
                    }
                  })}
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
                  defaultValue={product_type}
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
                  defaultValue={product_image}
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
                    defaultValue={product_rating}
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
                    defaultValue={product_price}
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
                  defaultValue={product_description}
                />
              </div>

              <div className="flex justify-center">
                <button
                  type="submit"
                  className="btn bg-primaryLight hover:bg-primaryLight font-medium text-white"
                >
                  Update Product
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default UpdateProduct;
