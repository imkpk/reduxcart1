import { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Backdrop from "./Components/Backdrop/Backdrop";
import Navbar from "./Components/Navbar/Navbar";
import Cartscreen from "./Components/screens/Cartscreen/Cartscreen";
import Homescreen from "./Components/screens/Homescreen/Homescreen";
import Productscreen from "./Components/screens/Productscreen/Productscreen";
import Sidebar from "./Components/Sidebar/Sidebar";

function App() {

const [sideToggle, setSideToggle] = useState(false)

  return (
    <Router>
      <Navbar click={()=>setSideToggle(true)}/>
      <Sidebar show={sideToggle}/>
      <Backdrop show={sideToggle} click={()=>setSideToggle(false)}/>
      {/* <h1> react redux shopping cart</h1> */}
      <main>
        <Switch>
          <Route exact path="/" component={Homescreen} />
          <Route exact path="/product/:id" component={Productscreen} />
          <Route exact path="/cart" component={Cartscreen} />
        </Switch>
      </main>
    </Router>
  );
}

export default App;
