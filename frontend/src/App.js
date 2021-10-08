import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Cartscreen from "./Components/screens/Cartscreen/Cartscreen";
import Homescreen from "./Components/screens/Homescreen/Homescreen";
import Productscreen from "./Components/screens/Productscreen/Productscreen";

function App() {
  return (
    <Router>
      <Navbar />
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
