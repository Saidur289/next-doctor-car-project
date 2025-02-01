import Image from "next/image";
import React from "react";

export default function LoginPage() {
  return (
    <div className="md:flex md:justify-center md:items-center mt-5 gap-5">
      <div className="md:w-1/2">
        <Image src={"/assets/login.svg"} width={500} height={300} />
      </div>
      <div className="md:w-1/2 space-y-6">
        <form className="space-y-5">
          <div>
            <label className="input input-bordered flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70"
              >
                <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
              </svg>
              <input type="email" className="grow" placeholder="Email" />
            </label>
          </div>
          <div>
            <label className="input input-bordered flex items-center gap-2">
              <input type="password" className="grow" placeholder="Password" />
            </label>
          </div>
          <button
            type="submit"
            className="w-full py-3 px-4 rounded-md bg-orange-400 text-white"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
