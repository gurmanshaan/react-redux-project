/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setProducts } from "../redux/actions/productActions";
import Product from "./Product";
import Pagination from "./Pagination";
import { PRODUCT_PER_PAGE } from "../utils/constants";

const ProductListing = () => {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const fetchProducts = async () => {
    const response = await axios
      .get("https://fakestoreapi.com/products")
      .catch((err) => {
        console.log(err);
      });
    dispatch(setProducts(response.data));
    setTotalPages(Math.ceil(response.data.length / PRODUCT_PER_PAGE));
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleClick = (num) => {
    setPage(num);
  };

  return (
        <>
        <div className="listing">
          <Product page={page} />
          </div>
          <Pagination totalPages={totalPages} handleClick={handleClick} />
      </>
    
  );
};

export default ProductListing;
