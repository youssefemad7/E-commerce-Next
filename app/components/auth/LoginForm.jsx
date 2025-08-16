"use client";

import Link from "next/link";
import { Button } from "../ui/button";
import { useState } from "react";
import { auth } from "../../lib/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "next/navigation";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      alert("Please enter both email and password");
      return;
    }
    setLoading(true);
    try {
      await signInWithEmailAndPassword(auth, email.trim(), password);
      router.push("/");
    } catch (err) {
      alert(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleLogin} className="w-[90%] max-w-md mx-auto ">
      <div>
        <div className="text-center mb-32">
          <h2 className="text-3xl font-bold text-foreground mb-2">
            Log in to Exclusive
          </h2>
          <p className="text-foreground mb-6">Enter your details below</p>
        </div>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-0 py-3 border-0 border-b border-gray-300 rounded-none 
          focus:border-gray-900 focus:ring-0 bg-transparent placeholder-foreground mb-6"
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-0 py-3 border-0 border-b border-gray-300 rounded-none 
          focus:border-gray-900 focus:ring-0 bg-transparent placeholder-foreground mb-6"
        />

        <div className="space-y-4 flex justify-between items-center">
          <Button
            type="submit"
            disabled={loading}
            className="w-[30%] bg-red-500 hover:bg-red-800 text-white py-3 rounded font-medium transition-colors"
          >
            {loading ? "Loading..." : "Log In"}
          </Button>
          <Link
            href="#"
            className="text-red-500 hover:text-gray-700 transition-colors mb-6 ms-4 mt-[3%]"
          >
            Forget Password?
          </Link>
        </div>

        <div className="flex justify-center items-center mt-6">
          <Link href="/signup">
            <Button className="px-5 py-8">
              Don't have Account ?<br /> Sign Up Now
            </Button>
          </Link>
        </div>
      </div>
    </form>
  );
}

export default LoginForm;
