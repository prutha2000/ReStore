import { Button } from "@mui/material";
import { Product } from "../../App/Models/Product"
import ProductList from "./ProductsList";

interface Props{
    products: Product[];
    addProducts: () => void;
}

export default function Catalog({products, addProducts}: Props){
    return (
        <>
            <ProductList products={products}></ProductList>
            <Button variant="contained" onClick={addProducts}>Add product</Button>
        </>
    )
}