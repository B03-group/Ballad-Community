import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login, signup } from '../../features/auth/authActions';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styled from 'styled-components';

const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70vh;
`;

const LoginForm = styled.form`
  background: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const FormLabel = styled.label`
  display: block;
  margin-bottom: 5px;
`;

const FormInput = styled.input`
  width: 100%;
  padding: 8px;
  box-sizing: border-box;
`;

const FormButton = styled.button`
  width: 100%;
  padding: 10px;
  background: #333;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const LoginRegister = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error } = useSelector((state) => state.auth);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isLogin) {
        await dispatch(login({ email, password })).unwrap();
        toast.success('로그인 되었습니다!', {
          position: 'top-center',
          autoClose: 5000,
          closeOnClick: true,
          onClose: () => navigate('/')
        });
      } else {
        await dispatch(signup({ email, password })).unwrap();
        toast.success('회원가입 되었습니다!', {
          position: 'top-center',
          autoClose: 5000,
          closeOnClick: true,
          onClose: () => navigate('/login')
        });
      }
    } catch (err) {
      toast.error(`에러: ${err.message}`, {
        position: 'top-center',
        autoClose: 5000,
        closeOnClick: true
      });
    }
  };

  const toggleForm = () => {
    setIsLogin((prevIsLogin) => !prevIsLogin);
  };

  return (
    <LoginContainer>
      <LoginForm onSubmit={handleSubmit}>
        <h2>{isLogin ? '로그인' : '회원가입'}</h2>
        <FormLabel>
          {isLogin ? 'ID' : 'Email'}:
          <FormInput
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            autoComplete="email"
          />
        </FormLabel>
        <FormLabel>
          PW:
          <FormInput
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            autoComplete={isLogin ? 'current-password' : 'new-password'}
          />
        </FormLabel>
        <FormButton type="submit" disabled={loading}>
          {isLogin ? '로그인' : '회원가입'}
        </FormButton>
        <div className="extra-links">
          <a href="#" className="link">
            아이디/비밀번호 찾기
          </a>
          <a href="#" onClick={toggleForm} className="link">
            {isLogin ? '회원가입' : '로그인'}
          </a>
        </div>
      </LoginForm>
      <ToastContainer />
    </LoginContainer>
  );
};

export default LoginRegister;
