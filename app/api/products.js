"use client";

import { db } from "../lib/firebase";
import { collection, getDocs } from "firebase/firestore";

export const getProducts = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, "products"));
    const products = [];
    querySnapshot.forEach((doc) => {
      products.push({ id: doc.id, ...doc.data() });
    });
    
    if (products.length === 0) {
      console.warn("No products found in Firestore");
    }
    
    return products;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw new Error("Failed to fetch products from Firestore");
  }
};
