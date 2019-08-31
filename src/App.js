import React from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";

import Main from "./components/MainComponent";

import { Provider } from "react-redux";
import { ConfigureStore } from "./redux/configureStore";

const store = ConfigureStore();

class App extends React.Component {
  render = () => (
    <Provider store={store}>
      <BrowserRouter>
        <div className="App">
          <Main />
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
