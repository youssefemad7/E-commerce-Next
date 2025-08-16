"use client";

import { useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { onAuthStateChanged, getAuth } from "firebase/auth";
import { app } from "./lib/firebase";

export default function ProtectedRoute({ children }) {
  const router = useRouter();
  const pathname = usePathname();
  const auth = getAuth(app);

  // الصفحات اللي مش محتاجة تسجيل دخول
  const publicRoutes = ["/login", "/signup"];

  useEffect(() => {
    // لو الصفحة عامة، مفيش داعي للتحقق
    if (publicRoutes.includes(pathname)) return;

    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user) {
        router.replace("/login");
      }
    });

    return () => unsubscribe();
  }, [auth, router, pathname]);

  return <>{children}</>;
}
