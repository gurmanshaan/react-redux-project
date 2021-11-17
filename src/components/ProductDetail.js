/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import {
  selectedProduct,
  removeSelectedProduct,
} from "../redux/actions/productActions";

const ProductDetail = () => {
  const product = useSelector((state) => state.product);
  const { image, title, price, category, description } = product;
  const { productId } = useParams();
  const dispatch = useDispatch();

  const fetchProductDetail = async () => {
    const response = await axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .catch((err) => {
        console.log("Err", err);
      });
    dispatch(selectedProduct(response.data));
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    if (productId && productId !== "") {
      fetchProductDetail();
    }
    return () => {
      dispatch(removeSelectedProduct());
    };
  }, [productId]);
  return (
    <div className="container">
      {Object.keys(product).length === 0 ? (
        <div className="loading">Loading...</div>
      ) : (
        <div className="productcontainer">
          <div className="left">
            <img className="image" src={image} alt={title} />
          </div>
          <div className="right">
            <div className="title">
              <h1>{title}</h1>
            </div>
            <div className="price">
              <h2>
                Price:<a className="pr">${price}</a>
              </h2>
            </div>
            <div className="category">
              <h2>
                <span className="cat">Category:</span> {category}
              </h2>
            </div>
            <div className="description">
              <p>{description}</p>
            </div>
            <div className="addtocart">
              <button>Add to Cart</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetail;
