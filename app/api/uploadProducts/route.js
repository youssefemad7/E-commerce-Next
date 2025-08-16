// this file for uploading data in Firebase

// import { db } from "../../lib/firebase";
// import { collection, doc, setDoc } from "firebase/firestore";

// export async function POST(req) {
//   try {
//     const response = await fetch("https://dummyjson.com/products");
//     const data = await response.json();

//     const productsCollection = collection(db, "products");

//     for (const product of data.products) {
//       const productData = {
//         name: product.title,
//         rating: product.rating,
//         price: product.price,
//         description: product.description,
//         imageUrl: product.thumbnail,
//         category: product.category,
//         availabilityStatus: product.availabilityStatus,
//         discount: product.discountPercentage,
//         rating: product.rating,
//       };

//       await setDoc(doc(productsCollection, product.id.toString()), productData);
//     }

//     return new Response(
//       JSON.stringify({ message: "Products uploaded successfully" }),
//       { status: 200 }
//     );
//   } catch (error) {
//     console.error("Error uploading products:", error);
//     return new Response(
//       JSON.stringify({ message: "Failed to upload products" }),
//       { status: 500 }
//     );
//   }
// }
