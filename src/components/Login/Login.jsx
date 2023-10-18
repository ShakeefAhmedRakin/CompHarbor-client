import { useContext, useState } from "react";
import { RiGoogleLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const Login = () => {
  const { signInUser, signInWithGoogle } = useContext(AuthContext);
  const [error, setError] = useState("");

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
        setError("");
        // TOAST HERE
      })
      .catch((error) => {
        setError(error.message);
      });
  };
  return (
    <>
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-lg mx-auto">
          <div className="border-[1px] border-black p-8">
            <form onSubmit={handleLogin}>
              <h1 className="text-center font-bold text-4xl">Login</h1>
              <hr className="my-5" />
              <div className="mb-6">
                <label className="block mb-2 text-sm font-medium text-gray-900">
                  Your email
                </label>
                <input
                  type="email"
                  name="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5 "
                  placeholder="Your email"
                  required
                ></input>
              </div>
              <div className="mb-6">
                <label className="block mb-2 text-sm font-medium text-gray-900">
                  Your password
                </label>
                <input
                  type="password"
                  name="password"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5"
                  required
                  placeholder="Your password"
                ></input>
              </div>

              <div className="flex justify-center">
                <button
                  type="submit"
                  className="btn bg-secondary hover:bg-secondary font-medium"
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
              <p className="text-red-500 font-medium w-full text-[10px]">
                {error ? <>{error}</> : ""}
              </p>
            </form>
            <hr className="my-5" />
            <h1 className="text-center mb-5">Or Login With</h1>
            <div className="flex justify-center">
              <button
                className="btn btn-circle bg-secondary hover:bg-secondary"
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
