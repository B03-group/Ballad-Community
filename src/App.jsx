import React, { useEffect } from 'react';
import { Provider, useDispatch } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import store from './redux/config/configStore';
import Router from './shared/Router';
import GlobalStyle from './styles/GlobalStyle';
import { setUser } from './features/auth/authSlice';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
      dispatch(setUser(user)); // 로컬 스토리지에 있는 사용자 정보를 상태에 반영
    }
  }, [dispatch]);

  return (
    <>
      <GlobalStyle />
      <RouterProvider router={Router} />
    </>
  );
};

const AppWrapper = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

export default AppWrapper;
