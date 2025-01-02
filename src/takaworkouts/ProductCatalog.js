import React, { useEffect, useState } from "react";
// import axios from "axios";
import productsLists from "./question.json";

const ProductCatalog = () => {
  const [products, setProducts] = useState(["Sample data"]);

  useEffect(() => {
    // Fetch product data
    // axios.get("/api/products").then((response) => {
    //   setProducts(response.data);
    // });
  }, []);

  return (
    // <div className="min-h-screen bg-gray-100 p-6">
    //   <h3 className="text-3xl font-semibold text-center text-gray-700 mb-6">
    //     Product Catalog
    //   </h3>
    //   <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
    //     {productsLists.map((product) => (
    //       <div
    //         key={product.id}
    //         className="bg-white border border-gray-200 rounded-lg shadow-lg p-4 flex flex-col items-center"
    //       >
    //         <img
    //           src={product.image}
    //           alt={product.name}
    //           className="w-40 h-40 object-cover rounded-md mb-4"
    //         />
    //         <h4 className="text-xl font-semibold text-gray-800 text-center">
    //           {product.name}
    //         </h4>
    //         <p className="text-gray-600 text-center mt-2">{product.description}</p>
    //         <p className="text-lg font-bold text-blue-600 mt-4">
    //           ${product.price}
    //         </p>
    //       </div>
    //     ))}
    //   </div>
    // </div>
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-blue-50 p-6">
  <h3 className="text-4xl font-bold text-center text-gray-800 mb-8 tracking-wide leading-snug drop-shadow-md">
    Product Catalog
  </h3>
  <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
    {productsLists.map((product) => (
      <div
        key={product.id}
        className="bg-white border border-gray-200 rounded-xl shadow-lg p-6 flex flex-col items-center hover:shadow-2xl transform hover:scale-105 transition duration-300"
      >
        <img
          src={product.image}
          alt={product.name}
          className="w-40 h-40 object-cover rounded-lg mb-4"
        />
        <h4 className="text-2xl font-semibold text-gray-800 text-center mb-2">
          {product.name}
        </h4>
        <p className="text-gray-600 text-center mt-2 text-sm">
          {product.description}
        </p>
        <p className="text-lg font-bold text-blue-600 mt-4">
          ${product.price}
        </p>
        {/* <button
          className="mt-6 px-6 py-2 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition duration-300"
        >
          Add to Cart
        </button> */}
      </div>
    ))}
  </div>
</div>

  );
};

export default ProductCatalog;
