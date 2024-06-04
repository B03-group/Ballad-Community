import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login } from '../../features/auth/authActions';
import { toast } from 'react-toastify';
import '../../styles/LoginRegister.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading } = useSelector((state) => state.auth);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await dispatch(login({ email, password })).unwrap();
      toast.success('로그인 되었습니다!', {
        position: 'top-center',
        autoClose: 5000,
        closeOnClick: true,
        onClose: () => navigate('/')
      });
    } catch (err) {
      toast.error(`에러: ${err.message}`, {
        position: 'top-center',
        autoClose: 5000,
        closeOnClick: true
      });
    }
  };

  return (
    <div className="container">
      <h1 style={{ fontSize: '48px', marginBottom: '20px' }}>로그인</h1>
      <form className="form-container" onSubmit={handleSubmit}>
        <label className="label">ID:</label>
        <input className="input-box" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <label className="label">PW:</label>
        <input
          className="input-box"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button className="button" type="submit" disabled={loading}>
          <span className="button-text">로그인</span>
        </button>
        <div className="link-container">
          <a href="#" className="link">
            아이디/비밀번호 찾기
          </a>
          <a href="/register" className="link">
            회원가입
          </a>
        </div>
      </form>
    </div>
  );
};

export default Login;
