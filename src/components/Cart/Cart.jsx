import { useContext, useState } from "react";
import { useEffect } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { toast } from "sonner";
import CartCard from "../CartCard/CartCard";
import { BsFillCartXFill } from "react-icons/bs";

const Cart = () => {
  const [loading, setLoading] = useState(false);
  const { user } = useContext(AuthContext);
  const userID = user?.uid;

  const [products, setProducts] = useState([]);

  useEffect(() => {
    setLoading(true);
    fetch(`https://brand-shop-server-rho.vercel.app/carts/${userID}`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      });
  }, [userID]);

  const handleDelete = (idToBeDeleted) => {
    fetch(`https://brand-shop-server-rho.vercel.app/carts/${idToBeDeleted}`, {
      method: "DELETE",
    })
      .then((result) => result.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          toast.success("Item removed from cart");

          const remaining = products.filter(
            (product) => product.cart_id !== idToBeDeleted
          );
          setProducts(remaining);
        }
      });
  };
  return (
    <>
      <div data-aos="fade-up" className="container mx-auto px-4 py-20 ">
        <div className="border-[1px] bg-white dark:bg-gray-900 border-black dark:border-white">
          <h1 className="bg-primaryLight dark:bg-primaryDark py-5 text-center my-5 mx-4 font-bold text-xl md:text-4xl text-white">
            Your Cart
          </h1>
          <hr className="my-5" />
          <div className="container px-2 mx-auto my-8">
            {loading ? (
              <>
                <div className="flex items-center justify-center py-36">
                  <span className="loading loading-bars loading-xl"></span>
                </div>
              </>
            ) : (
              <div className="flex justify-center">
                {products.length > 0 ? (
                  <div className="w-full px-1 md:px-16 grid grid-cols-1 xl:grid-cols-2 gap-5">
                    {products.map((product) => (
                      <CartCard
                        key={product.cart_id}
                        product={product}
                        handleDelete={handleDelete}
                      ></CartCard>
                    ))}
                  </div>
                ) : (
                  <div className="py-36 flex flex-col items-center">
                    <h1 className="text-center font-bold text-xl md:text-3xl text-gray-900 dark:text-white">
                      No items added yet!
                    </h1>
                    <BsFillCartXFill className="text-4xl md:text-5xl mt-4 text-gray-900 dark:text-white"></BsFillCartXFill>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
