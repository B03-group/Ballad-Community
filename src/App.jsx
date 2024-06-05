import React from "react";
import Router from "./shared/Router";
import { Provider } from "react-redux";
import store from "./redux/config/configStore";
import GlobalStyle from "./styles/GlobalStyle";

const App = () => {
  return (
    <>
      <Provider store={store}>
        <GlobalStyle />
        <Router />
      </Provider>
    </>
  );
};

export default App;
