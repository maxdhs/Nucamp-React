import React from "react";
import "./App.css";

import Menu from "./components/MenuComponent";
import { DISHES } from "./shared/dishes";

class App extends React.Component {
  state = {
    dishes: DISHES
  };
  render = () => <Menu dishes={this.state.dishes} />;
}

export default App;
