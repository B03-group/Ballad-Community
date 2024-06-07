import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { signup } from '../features/auth/authActions';

const SignupForm = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [profileImage, setProfileImage] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signup({ email, password, name, profileImage }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" />
      <input type="file" onChange={(e) => setProfileImage(e.target.files[0])} />
      <button type="submit">회원가입</button>
    </form>
  );
};

export default SignupForm;
