import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from '../components/auth/Login';
import Register from '../components/auth/Register';
import Layout from '../components/layout/Layout';
import Board from '../pages/Board';
import Detail from '../pages/Detail';
import Home from '../pages/Home';
import Profile from '../pages/Profile';
import Update from '../pages/Update';
import Write from '../pages/Write';

const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/board/:category" element={<Board />} />
            <Route path="/board/:category/:postId" element={<Detail />} />
            <Route path="/write" element={<Write />} />
            <Route path="/update/:postId" element={<Update />} />
            <Route path="/profile" element={<Profile />} /> {/* 프로필 페이지 라우트 추가 */}
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} /> {/* 회원가입 페이지 라우트 추가 */}
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Router;
