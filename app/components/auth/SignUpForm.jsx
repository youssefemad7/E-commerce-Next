"use client";
import Link from "next/link";
import { Button } from "../ui/button";
import { useState } from "react";
import { auth } from "../../lib/firebase";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";
import { useRouter } from "next/navigation";

function SignUpForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      // إنشاء الحساب
      const { user } = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      // تحديث الـ displayName
      await updateProfile(user, {
        displayName: name,
      });
      // ممكن هنا تحفظ اسم المستخدم في Firestore لو عايز
      router.push("/");
    } catch (err) {
      alert(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignUp = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      router.push("/");
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-[90%] max-w-md mx-auto ">
      <div>
        <div className="text-center mb-32">
          <h2 className="text-3xl font-bold text-foreground mb-2">
            Create an account
          </h2>
          <p className="text-foreground mb-6">Enter your details below</p>
        </div>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full px-0 py-3 border-0 border-b border-gray-300 rounded-none focus:border-gray-900 focus:ring-0 bg-transparent placeholder-foreground mb-6"
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-0 py-3 border-0 border-b border-gray-300 rounded-none focus:border-gray-900 focus:ring-0 bg-transparent placeholder-foreground mb-6"
        />
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-0 py-3 border-0 border-b border-gray-300 rounded-none focus:border-gray-900 focus:ring-0 bg-transparent placeholder-foreground mb-6"
        />
        <div className="space-y-4">
          <Button
            type="submit"
            disabled={loading}
            className="w-full bg-red-500 hover:bg-red-800 text-white py-3 rounded-md font-medium transition-colors"
          >
            {loading ? "Creating..." : "Create Account"}
          </Button>

          <Button
            type="button"
            onClick={handleGoogleSignUp}
            variant="outline"
            className="w-full py-3 border border-gray-300 rounded-md bg-background text-foreground transition-colors flex items-center justify-center space-x-2 mb-6"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24">
              {/* Google Icon paths */}
            </svg>
            <span>Sign up with Google</span>
          </Button>
        </div>

        <div className="text-center">
          <p className="text-foreground">
            Already have account?
            <Link
              href="/login"
              className="text-foreground underline hover:text-gray-700 transition-colors mb-6 ms-4"
            >
              Log In
            </Link>
          </p>
        </div>
      </div>
    </form>
  );
}

export default SignUpForm;
