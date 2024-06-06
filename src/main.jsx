import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './app/store';
import AppWrapper from './App'; // 수정된 AppWrapper를 import
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './styles.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <AppWrapper /> {/* App 대신 AppWrapper를 사용 */}
    <ToastContainer position="top-center" autoClose={5000} hideProgressBar closeOnClick pauseOnHover draggable />
  </Provider>
);
