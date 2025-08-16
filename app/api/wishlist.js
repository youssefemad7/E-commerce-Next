"use client";

import { db } from "../lib/firebase";
import {
  collection,
  getDocs,
  doc,
  setDoc,
  deleteDoc,
  query,
  where,
} from "firebase/firestore";

// ✅ Get Wishlist for specific user
export const getWishlist = async (userId) => {
  const q = query(collection(db, "Wishlist"), where("userId", "==", userId));
  const querySnapshot = await getDocs(q);
  const wishlist = [];
  querySnapshot.forEach((docSnap) => {
    wishlist.push({ id: docSnap.id, ...docSnap.data() });
  });
  return wishlist;
};

// ✅ Add to Wishlist
export const addToWishlist = async (product, userId) => {
  const docId = `${userId}_${product.id}`;
  const productRef = doc(db, "Wishlist", docId);
  await setDoc(productRef, {
    ...product,
    productId: product.id,
    userId,
  });
};

// ✅ Remove from Wishlist
export const removeFromWishlist = async (productId, userId) => {
  const docId = `${userId}_${productId}`;
  const productRef = doc(db, "Wishlist", docId);
  await deleteDoc(productRef);
};
