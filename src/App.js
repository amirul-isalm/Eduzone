import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Header from "./Component/Header/Header";
import HomeTop from "./Component/HomeCompo/HomeTop";
import CourseList from "./Component/HomeCompo/CourseList";
import Footer from "./Component/HomeCompo/Footer/Footer";
import Home from "./Component/HomeCompo/Home";
import Services from "./Component/HomeCompo/Services/Services";
import About from "./Component/About/About";
import Contact from "./Component/Contacts/Contact";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Notfounderr from "./Notfounderr";

function App() {



  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>

          <Route path="/service">
            <Services></Services>
          </Route>
          <Route path="/contact">
            <Contact></Contact>
          </Route>
          <Route exact path="*">
            <Notfounderr></Notfounderr>
          </Route>
        </Switch>

        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
