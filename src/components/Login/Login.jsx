import { useContext } from "react";
import { RiGoogleLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { Toaster, toast } from "sonner";

const Login = () => {
  const { signInUser, signInWithGoogle } = useContext(AuthContext);

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        console.log(result.user);
        // TOAST HERE
      })
      .catch((error) => console.log(error));
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    signInUser(email, password)
      .then(() => {
        toast.success("Successfully logged in");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };
  return (
    <>
      <Toaster position="bottom-right" richColors />
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-lg mx-auto">
          <div className="border-[1px] border-black p-8 bg-white dark:bg-gray-800">
            <form onSubmit={handleLogin} className="text-black dark:text-white">
              <h1 className="text-center font-bold text-4xl text-black dark:text-white">
                Login
              </h1>
              <hr className="my-5" />
              <div className="mb-6">
                <label className="block mb-2 text-sm font-medium text-black dark:text-white">
                  Your email
                </label>
                <input
                  type="email"
                  name="email"
                  className="bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-900 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:text-white"
                  placeholder="Your email"
                  required
                ></input>
              </div>
              <div className="mb-6">
                <label className="block mb-2 text-sm font-medium text-black dark:text-white">
                  Your password
                </label>
                <input
                  type="password"
                  name="password"
                  className="bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-900 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:text-white"
                  required
                  placeholder="Your password"
                ></input>
              </div>

              <div className="flex justify-center">
                <button
                  type="submit"
                  className="btn bg-primaryLight text-white hover:bg-primaryLight font-medium"
                >
                  Login
                </button>
              </div>
              <p className="text-center my-5">
                {`Don't have an account? `}
                <Link className="link" to="/register">
                  Sign Up Here
                </Link>
              </p>
            </form>
            <hr className="my-5" />
            <h1 className="text-center mb-5 text-black dark:text-white">
              Or Login With
            </h1>
            <div className="flex justify-center text-black dark:text-white">
              <button
                className="btn btn-circle bg-primaryLight text-white hover:bg-primaryLight"
                onClick={handleGoogleSignIn}
              >
                <RiGoogleLine className="text-xl"></RiGoogleLine>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
