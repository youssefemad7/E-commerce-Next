// For Uploading data in Products
// "use client";

// import React, { useState } from "react";

// export default function UploadPage() {
//   const [loading, setLoading] = useState(false);
//   const [message, setMessage] = useState("");

//   const uploadProducts = async () => {
//     setLoading(true);
//     setMessage("");
//     try {
//       const res = await fetch("/api/uploadProducts", { method: "POST" });
//       const data = await res.json();
//       setMessage(data.message);
//     } catch (err) {
//       setMessage("Error: " + err.message);
//     }
//     setLoading(false);
//   };

//   return (
//     <div style={{ padding: 20 }}>
//       <button onClick={uploadProducts} disabled={loading}>
//         {loading ? "Uploading..." : "Upload Products"}
//       </button>
//       {message && <p>{message}</p>}
//     </div>
//   );
// }
