import { Button } from "@mui/material";
import { useState, useEffect } from "react";
import { Product } from "../../App/Models/Product"
import ProductList from "./ProductsList";

interface Props{
    products: Product[];
    addProducts: () => void;
}

export default function Catalog() {

    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        fetch('http://localhost:5000/api/products')
        .then(response => response.json())
        .then(data =>setProducts(data))
      }, [] )
    
    return (
        <>
            <ProductList products={products}></ProductList>
        </>
    )
}