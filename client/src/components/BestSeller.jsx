import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";
import ProductItem from "./Productitem";

const BestSeller = () => {
  const { products } = useContext(ShopContext);
  const [bestSeller, setBestSeller] = useState([]);

  useEffect(() => {
    // Ensure the effect runs only when `products` changes
    if (products && Array.isArray(products)) {
      const bestProduct = products.filter((item) => (item.bestseller));
      console.log("Filtered Best Sellers:", bestProduct);
      setBestSeller(bestProduct.slice(0, 5))
    }
  }, [products]); // Add `products` as a dependency

  return (
    <div className="my-10">
      {/* Title Section */}
      <div className="text-center py-8 text-3xl">
        <Title text1={"BEST"} text2={"SELLERS"} />
        <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
          est explicabo consequuntur, quam hic incidunt suscipit cum quasi
          delectus in maiores deleniti veniam.
        </p>
      </div>

      {/* Rendering Products */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
        {bestSeller.map((item) => (
          <ProductItem
          key={item._id}
          id={item._id}
          image={item.image}
          name={item.name}
          price={item.price}
        />
        ))}
      </div>
    
    </div>
  );
};

export default BestSeller;