import Image from "next/image";
import React from "react";
import LoginForm from "../components/LoginForm";

export default function LoginPage() {
  return (
    <div className="md:flex md:justify-center md:items-center mt-5 gap-5">
      <div className="md:w-1/2">
        <Image src={"/assets/login.svg"} width={500} height={300} />
      </div>
      <div className="md:w-1/2 space-y-6">
      <LoginForm></LoginForm>
      </div>
    </div>
  );
}
