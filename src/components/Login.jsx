import React, { useState, useRef } from "react";
import Headers from "./Header";
import { checkValidateData } from "../utils/validate";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const toggleIsSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  const handleButtonClick = () => {
    const emailValue = email.current.value;
    const passwordValue = password.current.value;
    const nameValue = name.current ? name.current.value : null;
   const message = checkValidateData(emailValue, nameValue, passwordValue);
   setErrorMessage(message);
  };

  return (
    <div className="relative min-h-screen">
      <Headers />
      <div className="absolute inset-0">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/5bd3572a-0d1b-4228-aaa7-5b2dc45952b2/web/IN-en-20260413-TRIFECTA-perspective_4100808f-7dc6-4c78-8677-18db2989f7bc_large.jpg"
          srcSet="https://assets.nflxext.com/ffe/siteui/vlv3/5bd3572a-0d1b-4228-aaa7-5b2dc45952b2/web/IN-en-20260413-TRIFECTA-perspective_4100808f-7dc6-4c78-8677-18db2989f7bc_large.jpg 2000w, https://assets.nflxext.com/ffe/siteui/vlv3/5bd3572a-0d1b-4228-aaa7-5b2dc45952b2/web/IN-en-20260413-TRIFECTA-perspective_4100808f-7dc6-4c78-8677-18db2989f7bc_medium.jpg 1279w, https://assets.nflxext.com/ffe/siteui/vlv3/5bd3572a-0d1b-4228-aaa7-5b2dc45952b2/web/IN-en-20260413-TRIFECTA-perspective_4100808f-7dc6-4c78-8677-18db2989f7bc_small.jpg 959w"
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>
      <div className="relative z-10 flex min-h-screen items-center justify-center px-4">
        <form onSubmit={(e) => e.preventDefault()} className="w-full max-w-md bg-black/80 rounded-md p-8 text-white space-y-6">
          <h1 className="font-bold text-3xl text-center">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h1>
          <div className="space-y-4">
            {!isSignInForm && (
              <input
              ref={name}
                type="text"
                placeholder="Full Name"
                className="w-full rounded-md border border-white/10 bg-gray-800 p-3 text-sm outline-none"
              />
            )}
            <input
            ref={email}
              type="text"
              placeholder="Email Address"
              className="w-full rounded-md border border-white/10 bg-gray-800 p-3 text-sm outline-none"
            />
            <input
              ref={password}
              type="password"
              placeholder="Password"
              className="w-full rounded-md border border-white/10 bg-gray-800 p-3 text-sm outline-none"
            />

            <p className="text-red-500 text-center">{errorMessage}</p>
            <button className="w-full rounded-md bg-red-600 px-4 py-3 text-base font-semibold hover:bg-red-700"
             onClick={handleButtonClick}>
              {isSignInForm ? "Sign In" : "Sign Up"}
            </button>
          </div>
          <p
            className="text-center text-sm text-white/80 cursor-pointer"
            onClick={toggleIsSignInForm}
          >
            {isSignInForm
              ? "Don't have an account? Sign Up Now"
              : "Already have an account? Sign In Now"}
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
