import { Container, createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import Catalog from "../../Features/Catalog/Catalog";
import Header from "./Header";
import { useEffect, useState } from 'react';
import { Route, Switch } from "react-router-dom";
import HomePage from "../../Features/Home/HomePage";
import ContactPage from "../../Features/Contact/ContactPage";
import ProductDetails from "../../Features/Catalog/ProductDetails";
import AboutPage from "../../Features/About/AboutPage";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import ServerError from "../errors/ServerError";
import NotFound from "../errors/NotFound";
import BasketPage from "../../Features/Basket/BasketPage";
import { useStoreContext } from "../context/StoreContext";
import { getCookie } from "../util/util";
import agent from "../api/agent";
import LoadingComponent from "./LoadingCompoent";
import CheckoutPage from "../../Features/Checkout/Checkout";

function App() {
  const {setBasket} = useStoreContext();
  const [loading, setLoading] = useState(true);

  useEffect(()=> {
    const buyerId = getCookie('buyerId');
    if(buyerId){
      agent.Basket.get()
      .then(basket => setBasket(basket))
      .catch(error => console.log(error))
      .finally(() => setLoading(false));
    }else{
      setLoading(false);
    }
  }, [setBasket])

  const [darkMode, setDarkMode] = useState(false);
  const paleteType = darkMode ? 'dark' : 'light';

  const theme  = createTheme({
    palette: {
      mode: paleteType,
      background: {
        default: paleteType === 'light' ?  '#eaeaea' : '#121212'
      }
    }
  })

  function handleThemeChange() {
    setDarkMode(!darkMode);
  }
 
  if(loading) <LoadingComponent message="Inializig app..." />

  return (
    <>
    <ThemeProvider theme={theme}>
      <ToastContainer position='bottom-right' hideProgressBar />
    <CssBaseline />
      <Header darkMode={darkMode} handleThemeChange={handleThemeChange}/>
      <Container>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/catalog' component={Catalog} />
          <Route path='/catalog/:id' component={ProductDetails} />
          <Route path='/about' component={AboutPage} />
          <Route path='/contact' component={ContactPage} />
          <Route path='/server-error' component={ServerError} />
          <Route path='/basket' component={BasketPage} />
          <Route path='/checkout' component={CheckoutPage} />

          <Route component={NotFound} />
        </Switch>
      </Container>
    </ThemeProvider>
     
    </>
  );
}

export default App;
