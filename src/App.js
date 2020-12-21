import "./App.css";
// react-router
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// redux
import { connect } from "react-redux";
// app components
import Home from "./Home";
import Room from "./Room";

function App(props) {
  console.log(props);

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

const mapStateToProps = (state) => state;

export default connect(mapStateToProps)(App);
