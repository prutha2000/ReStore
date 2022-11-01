import { Container, CssBaseline } from "@mui/material";
import { useEffect, useState } from "react";
import Catalog from "../../Features/Catalog/Catalog";
import { Product } from "../Models/Product";
import Header from "./Header";

function App() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/products')
    .then(response => response.json())
    .then(data =>setProducts(data))
  }, [] )

  function addProducts(){
    setProducts(previousState => [...previousState, 
      {
        id: previousState.length + 101,
        name: 'Product' + (previousState.length + 1), 
        price: (previousState.length * 100) + 100,
        description: 'some Description',
        brand: 'xyz',
        pictureUrl: 'http://picsum.photos/200',
      }])
  }
 
  return (
    <>
      <CssBaseline />
      <Header />
      <Container>
          <Catalog products={products} addProducts={addProducts}/>
      </Container>
    </>
  );
}

export default App;
