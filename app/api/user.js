// api/user.js
"use client";

import {
  updatePassword,
  updateProfile,
  EmailAuthProvider,
  reauthenticateWithCredential,
} from "firebase/auth";
import { doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
import { toast } from "react-hot-toast";
import { auth, db } from "../lib/firebase";

export const getUser = async () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      unsubscribe();
      if (user) {
        resolve({
          uid: user.uid,
          email: user.email,
          displayName: user.displayName,
          photoURL: user.photoURL,
        });
      } else {
        reject(new Error("No user logged in"));
      }
    });
  });
};

// إعادة المصادقة قبل تغيير الباسورد
const reauthenticateUser = async (currentPassword) => {
  if (!auth.currentUser) throw new Error("No user logged in");
  if (!currentPassword) throw new Error("Current password required");

  const credential = EmailAuthProvider.credential(
    auth.currentUser.email,
    currentPassword
  );
  await reauthenticateWithCredential(auth.currentUser, credential);
};

// تحديث الاسم والباسورد
export const updateUserData = async ({
  uid,
  firstName,
  lastName,
  newPassword,
  currentPassword,
}) => {
  if (!auth.currentUser) throw new Error("No user logged in");

  // إعادة المصادقة وتغيير الباسورد
  if (newPassword) {
    await reauthenticateUser(currentPassword);
    await updatePassword(auth.currentUser, newPassword);
    toast.success("Password updated successfully!");
  }

  // تحديث الاسم
  const displayName = `${firstName} ${lastName}`;
  await updateProfile(auth.currentUser, { displayName });

  // تحديث بيانات Firestore
  const userRef = doc(db, "Users", uid);
  const userSnap = await getDoc(userRef);
  if (!userSnap.exists()) {
    await setDoc(userRef, { firstName, lastName });
  } else {
    await updateDoc(userRef, { firstName, lastName });
  }

  toast.success("Profile updated successfully!");
};
