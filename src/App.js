import React from 'react'
import AboutUs from './pages/AboutUs';
import Nav from "./components/Nav"
import {Switch,Route} from "react-router-dom"
//global styles
import GlobalStyle from "./components/GlobalStyle";
import ContactUs from "./pages/ContactUs"
import OurWork from "./pages/OurWork"
import MovieDetail from "./pages/MovieDetail"

function App() {
  return (
    <div>
      <GlobalStyle/>
      <Nav/>
      <Route path="/" exact>
      <AboutUs />
      </Route>
      <Route path="/work" exact>
      <OurWork />
      </Route>
      <Route path="/work/:id">
      <MovieDetail />
      </Route>
      <Route path="/contact">
      <ContactUs />
      </Route>
    
    </div>
  );
}

export default App;
