import { useRef, useState } from "react";
import signImg from "../assets/login.png";

import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Link } from "react-router-dom";

const SignInComponent = () => {
  const emailInput = useRef(null);
  const passwordInput = useRef(null);
  const [account, setAccounts] = useState({});

  const api = "http://localhost:3000";

  const submitForm = (e) => {
    e.preventDefault();

    const postReq = async () => {
      try {
        const res = await fetch(`${api}/api/accounts/login`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            emailInput: emailInput.current.value,
            passwordInput: passwordInput.current.value,
          }),
        });

        const data = await res.json();

        if (res.status === 200) {
          // Account created successfully
          toast.success(data.msg);
        } else {
          // Handle other status codes if needed
          toast.error(data.msg);
        }

        setAccounts(data.account);
        
      } catch (err) {
        console.log(err);
      }
    };

    postReq();
  };

  return (
    <>
      <div className="2xl:container mx-auto flex gap-8 items-center lg:flex-row flex-col md:py-24 py-16 px-3">
        <img className="lg:w-1/2 md:w-5/12 sm:w-1/2" src={signImg} />
        <form
          className="shadow-2xl rounded p-7 lg:w-1/2 md:w-2/3 w-full flex flex-col gap-5"
          onSubmit={(e) => submitForm(e)}
        >
          <div className="flex flex-col gap-2">
            <label
              className="text-gray-700 font-medium md:text-base text-sm"
              htmlFor="email"
            >
              Email
            </label>
            <input
              ref={emailInput}
              className="w-full p-4 border-2 border-purple-500 focus:outline-none rounded col-span-3"
              type="email"
              placeholder="Enter email"
              required
              name="email"
              id="email"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label
              className="text-gray-700 font-medium md:text-base text-sm"
              htmlFor="password"
            >
              Password
            </label>
            <input
              ref={passwordInput}
              className="w-full p-4 border-2 border-purple-500 focus:outline-none rounded col-span-3"
              type="password"
              placeholder="Enter password"
              required
              name="password"
              id="password"
            />
          </div>
          <button className="col-span-6 bg-purple-500 text-white p-3 py-4 rounded font-semibold md:text-xl border-2 border-purple-500 hover:bg-transparent hover:text-purple-500 duration-300">
            Login
          </button>
          <p className="text-gray-700">
            Don&apos;t have an account?{" "}
            <Link
              className="font-bold text-gray-700 hover:underline"
              to="/signup"
            >
              Signup
            </Link>
          </p>
        </form>
      </div>
      <ToastContainer />
    </>
  );
};

export default SignInComponent;
