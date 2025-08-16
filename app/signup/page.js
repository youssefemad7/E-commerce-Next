import Image from "next/image";
import SignUpForm from "../components/auth/SignUpForm";

export const metadata = {
  title: "Signup",
  description: "Create a new account to start shopping",
};
export default function Signup() {
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
        <SignUpForm />
      </div>
    </div>
  );
}
