import React from "react";
import Header from "./Header";
import ProductCatalog from "../components/products/productcatalog";
import FlowerSelection from "../components/products/flowerselection";

const Products = () => {
  return (
    <div>
      <Header />
      <ProductCatalog />
      <FlowerSelection />
    </div>
  );
};

export default Products;
