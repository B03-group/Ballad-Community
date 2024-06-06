import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import store from "./redux/config/configStore";
import Router from "./shared/Router";
import GlobalStyle from "./styles/GlobalStyle";

const App = () => {
  return (
    <>
      <Provider store={store}>
        <GlobalStyle />
        <RouterProvider router={Router} />
      </Provider>
    </>
  );
};

export default App;
