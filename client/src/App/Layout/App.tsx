import { Container, createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import Catalog from "../../Features/Catalog/Catalog";
import Header from "./Header";
import { useState } from 'react'
import { Route } from "react-router-dom";
import HomePage from "../../Features/Home/HomePage";
import ContactPage from "../../Features/Contact/ContactPage";
import ProductDetails from "../../Features/Catalog/ProductDetails";
import AboutPage from "../../Features/About/AboutPage";

function App() {
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
 
  return (
    <>
    <ThemeProvider theme={theme}>
    <CssBaseline />
      <Header darkMode={darkMode} handleThemeChange={handleThemeChange}/>
      <Container>
      <Route exact path='/' component={HomePage} />
        <Route exact path='/catalog' component={Catalog} />
        <Route path='/catalog/:id' component={ProductDetails} />
        <Route path='/about' component={AboutPage} />
        <Route path='/contact' component={ContactPage} />
      </Container>
    </ThemeProvider>
     
    </>
  );
}

export default App;
