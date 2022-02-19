
import Navbar from './Components/Navbar';
import AboutUs from './Pages/AboutUs';
import ContactUs from './Pages/ContactUs';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Signup from './Pages/Signup';


import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
        <Route path="/" exact component={Home} /> 
        <Route path="/contact" exact component={ContactUs} />
        <Route path="/about" exact component={AboutUs} />
        <Route path="/login" exact component={Login} />
        <Route path="/signup" exact component={Signup} />

        </Switch>

      </Router>


    </div>


  );
}

export default App;
