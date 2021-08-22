import React, {useEffect} from 'react';
import ProductComponents from './ProductComponents';
import axios from "axios";
import {useSelector, useDispatch} from 'react-redux';
import {setProducts} from "../redux/actions/productsActions";



const ProductListing = () => {
const products = useSelector((state) => state);
const dispatch = useDispatch();

const fetchProducts =async () => {
    const response = await axios 
    .get("https://fakestoreapi.com/products")
    .catch (err =>{
        console.log("err", err);
    });
    dispatch(setProducts(response.data));
};

useEffect(() => {
  fetchProducts();
}, []);
console.log(products);

    return (
        <div className="ui grid container">
    <ProductComponents/>
        </div>
    );
};

export default ProductListing;