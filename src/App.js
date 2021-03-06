import React from 'react'
import AboutUs from './pages/AboutUs';
import Nav from "./components/Nav"
import {Switch,Route,useLocation} from "react-router-dom"
//global styles
import GlobalStyle from "./components/GlobalStyle";
import ContactUs from "./pages/ContactUs"
import OurWork from "./pages/OurWork"
import MovieDetail from "./pages/MovieDetail"
import { AnimatePresence} from 'framer-motion'
import ScrollTop from "./components/ScrollTop";

function App() {
  const location = useLocation();

  return (
    <div>
      <GlobalStyle/>
      <ScrollTop/>
      <Nav/>
      <AnimatePresence exitBeforeEnter>
      <Switch location={location} key={location.pathname}>
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
      </Switch>
      </AnimatePresence>
    </div>
  );
}

export default App;
