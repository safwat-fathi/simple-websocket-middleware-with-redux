import "./App.css";
// react-router
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// app components
import Home from "./Home";
import Room from "./Room";

function App() {
  return (
    <div>
      <Router>
        <h1>Hi to REDUX with WebSockets tutorial</h1>
        <Link to="/">Home</Link>
        <Link to="/room">Room</Link>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/room" component={Room} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
