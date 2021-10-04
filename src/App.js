import { Container } from "@mui/material";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Details from "./components/pages/Details";
import Home from "./components/pages/Home";
import NotFound from "./components/pages/NotFound";
import Services from "./components/pages/Services";

function App() {
  return (
    <>
      <Router>
        <Header/>
          <Container>
            <Switch>
              <Route exact path="/">
                <Home/>
              </Route>
              <Route exact path="/home">
                <Home/>
              </Route>
              <Route path="/about">
                <About/>
              </Route>
              <Route path="/services">
                <Services/>
              </Route>
              <Route path="/service/details/:detailsID">
                <Details/>
              </Route>
              <Route path="/contact">
                <Contact/>
              </Route>
              <Route path="*">
                <NotFound/>
              </Route>
            </Switch>
          </Container>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
