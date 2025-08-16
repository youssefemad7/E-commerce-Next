import Image from "next/image";
import LoginForm from "../components/auth/LoginForm";
export const metadata = {
  title: "Login",
  description: "Login to your account to continue shopping",
};

export default function login() {
  return (
    <div className="grid grid-cols-5 bg-background gap-4 h-[100vh] my-grid signup  justify-center items-center">
      <div className="col-span-3 ">
        <Image
          src="/signup.jpg"
          alt="Signup Image"
          width={850}
          height={950}
          className=" h-auto object-cover"
        />
      </div>
      <div className="col-span-2 center-form">
        <LoginForm />
      </div>
    </div>
  );
}
