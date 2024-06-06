import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { signup } from '../../features/auth/authActions';
import { toast } from 'react-toastify';
import '../../styles/LoginRegister.css';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [profileImage, setProfileImage] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading } = useSelector((state) => state.auth);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await dispatch(signup({ email, password, name, profileImage })).unwrap();
      toast.success('회원가입 되었습니다!', {
        position: 'top-center', // 문자열로 위치 지정
        autoClose: 5000,
        closeOnClick: true,
        onClose: () => navigate('/')
      });
    } catch (err) {
      toast.error(`에러: ${err.message}`, {
        position: 'top-center', // 문자열로 위치 지정
        autoClose: 5000,
        closeOnClick: true
      });
    }
  };

  return (
    <div className="container">
      <h1 style={{ fontSize: '48px', marginBottom: '20px' }}>회원가입</h1>
      <form className="form-container" onSubmit={handleSubmit}>
        <label className="label">Email:</label>
        <input
          className="input-box"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          autoComplete="email"
        />
        <label className="label">Password:</label>
        <input
          className="input-box"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          autoComplete="new-password"
        />
        <label className="label">Name:</label>
        <input className="input-box" type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        <label className="label">Profile Image:</label>
        <input className="input-box" type="file" onChange={(e) => setProfileImage(e.target.files[0])} />
        <button className="button" type="submit" disabled={loading}>
          <span className="button-text">회원가입</span>
        </button>
        <div className="link-container">
          <a href="/login" className="link">
            로그인으로 돌아가기
          </a>
        </div>
      </form>
    </div>
  );
};

export default Register;
