"use client";

import { db } from "../lib/firebase";
import {
  collection,
  getDocs,
  doc,
  setDoc,
  updateDoc,
  deleteDoc,
  query,
  where,
} from "firebase/firestore";

// ✅ Get Cart for specific user
export const getCart = async (userId) => {
  const q = query(collection(db, "Cart"), where("userId", "==", userId));
  const querySnapshot = await getDocs(q);
  const cart = [];
  querySnapshot.forEach((docSnap) => {
    cart.push({ id: docSnap.id, ...docSnap.data() });
  });
  return cart;
};

// ✅ Add to Cart (if exists, increase quantity)
export const addToCart = async (product, userId, quantity = 1) => {
  const docId = `${userId}_${product.id}`;
  const productRef = doc(db, "Cart", docId);

  // نضيف أو نعدل بناءً على وجوده
  await setDoc(
    productRef,
    {
      ...product,
      productId: product.id,
      userId,
      quantity,
    },
    { merge: true } // لو المنتج موجود هيرفع الـ quantity بدل ما يعمل overwrite كامل
  );
};

// ✅ Update Quantity
export const updateCartQuantity = async (productId, userId, newQuantity) => {
  const docId = `${userId}_${productId}`;
  const productRef = doc(db, "Cart", docId);
  await updateDoc(productRef, { quantity: newQuantity });
};

// ✅ Remove from Cart
export const removeFromCart = async (productId, userId) => {
  const docId = `${userId}_${productId}`;
  const productRef = doc(db, "Cart", docId);
  await deleteDoc(productRef);
};
