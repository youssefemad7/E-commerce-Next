// // products.js
// import dotenv from "dotenv";
// dotenv.config();

// import fetch from "node-fetch";
// import { db } from "./app/lib/firebase.js";
// import { collection, addDoc } from "firebase/firestore";

// console.log("API Key is:", process.env.FIREBASE_API_KEY);

// async function products() {
//   const res = await fetch("https://dummyjson.com/products");
//   const data = await res.json();

//   for (const product of data.products) {
//     await addDoc(collection(db, "products"), {
//       title: product.title,
//       price: product.price,
//       description: product.description,
//       image: product.thumbnail,
//       category: product.category,
//       rating: product.rating,
//     });
//     console.log(`✅ Uploaded: ${product.title}`);
//   }

//   console.log("✅ Products added to Firestore");
// }

// products();
