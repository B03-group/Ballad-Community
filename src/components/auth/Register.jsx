import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { signup } from '../../features/auth/authActions';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error } = useSelector((state) => state.auth);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await dispatch(signup({ email, password })).unwrap();
      toast.success('회원가입 되었습니다!', {
        position: 'top-center',
        autoClose: 5000,
        closeOnClick: true,
        onClose: () => navigate('/login')
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
    <div>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required autoComplete="email" />
        </label>
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            autoComplete="new-password"
          />
        </label>
        <button type="submit" disabled={loading}>
          Register
        </button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Register;
