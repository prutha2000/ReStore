import { useState, useEffect } from "react";
import agent from "../../App/api/agent";
import LoadingComponent from "../../App/Layout/LoadingCompoent";
import { Product } from "../../App/Models/Product"
import ProductList from "./ProductsList";

export default function Catalog() {

    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        agent.Catalog.list()
        .then(products => setProducts(products))
        .catch(error => console.log(error))
        .finally(() => setLoading(false))
      }, [] )

      if(loading) return <LoadingComponent message='loading Message' />
    
    return (
        <>
            <ProductList products={products}></ProductList>
        </>
    )
}