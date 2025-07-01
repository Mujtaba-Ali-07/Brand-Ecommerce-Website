// src/components/Subscribe.jsx
import React, { useState } from "react";
import { FiMail, FiShield } from "react-icons/fi";

const Subscribe = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubscribed(true);
      setIsLoading(false);
      setEmail("");
    }, 1500);
  };

  const handleReset = () => {
    setIsSubscribed(false);
  };

  return (
    <div id="subscription" className="bg-[#eff2f4] py-6 w-full lg:mt-6 mt-3">
      <div className="max-w-4xl mx-auto px-4">
        {!isSubscribed ? (
          <div className="flex flex-col items-center w-full">
            <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mb-6">
              <FiMail className="text-blue-600 text-2xl" />
            </div>

            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 text-center">
              Subscribe on our newsletter
            </h1>

            <p className="text-lg text-gray-600 mb-8 text-center max-w-2xl">
              Get daily news on upcoming offers from many suppliers all over the
              world
            </p>

            <form
              onSubmit={handleSubmit}
              className="w-full flex flex-col md:flex-row gap-4 max-w-xl"
            >
              <div className="flex-1">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="w-full px-5 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-transparent transition-all"
                  required
                />
              </div>
              <button
                type="submit"
                disabled={isLoading}
                className={`bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold px-6 py-3 rounded-xl hover:shadow-lg transition-all transform hover:-translate-y-1 ${
                  isLoading ? "opacity-75 cursor-not-allowed" : ""
                }`}
              >
                {isLoading ? (
                  <span className="flex items-center justify-center">
                    <svg
                      className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Processing...
                  </span>
                ) : (
                  "Subscribe Now"
                )}
              </button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-gray-500 text-sm flex items-center justify-center">
                <FiShield className="mr-2 text-green-500" />
                We care about your data. Read our{" "}
                <a href="#" className="text-blue-500 hover:underline ml-1">
                  Privacy Policy
                </a>
              </p>
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center w-full">
            <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mb-6">
              <FiMail className="text-green-600 text-2xl" />
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 text-center">
              Thank You for Subscribing!
            </h2>

            <p className="text-lg text-gray-600 mb-8 text-center max-w-2xl">
              You'll start receiving our daily updates with the best offers from
              global suppliers.
            </p>

            <button
              onClick={handleReset}
              className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold px-6 py-3 rounded-xl hover:shadow-lg transition-all"
            >
              Subscribe Another Email
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Subscribe;
