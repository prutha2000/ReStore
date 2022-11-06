import { Button } from "@mui/material";
import { useState, useEffect } from "react";
import agent from "../../App/api/agent";
import { Product } from "../../App/Models/Product"
import ProductList from "./ProductsList";

interface Props{
    products: Product[];
    addProducts: () => void;
}

export default function Catalog() {

    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        agent.Catalog.list().then(products => setProducts(products))
      }, [] )
    
    return (
        <>
            <ProductList products={products}></ProductList>
        </>
    )
}