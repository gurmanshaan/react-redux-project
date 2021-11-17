import React from "react";
import { useSelector } from "react-redux";
import {Link } from "react-router-dom";

const Product = () => {
  const products = useSelector((state) => state.allProducts.products);
  const renderList = products.map((product) => {
    const { id, title, image, price, category } = product;
    return (
      <div className="product" key={id}>
        <Link to={`/product/${id}`}>
        <div className="productcards">
          <div className="productcard ">
            <div className="productimage">
              <img src={image} alt={title} />
            </div>
            <div className="productcontent">
              <div className="producttitle">{title}</div>
              <div className="productprice">$ {price}</div>
              <div className="productcategory">{category}</div>
            </div>
          </div>
        </div>
        </Link>
      </div>
    );
  });

  return <>{renderList}</>;
};

export default Product;
