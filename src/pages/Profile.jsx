import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateProfile } from '../features/auth/authActions'; // 경로 수정
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../styles/LoginRegister.css'; // 스타일 적용

const Profile = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const [name, setName] = useState('');
  const [profileImage, setProfileImage] = useState(null);

  useEffect(() => {
    if (user) {
      setName(user.user_metadata.name || '');
    }
  }, [user]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = { name, profileImage };
    try {
      const updatedUser = await dispatch(updateProfile(formData)).unwrap();
      toast.success('프로필이 업데이트 되었습니다!', {
        position: 'top-center',
        autoClose: 5000,
        closeOnClick: true
      });
    } catch (err) {
      toast.error(`에러: ${err.message}`, {
        position: 'top-center',
        autoClose: 5000,
        closeOnClick: true
      });
    }
  };

  if (!user) return null;

  return (
    <div className="container">
      <h1 className="title">Profile</h1>
      <form className="form-container" onSubmit={handleSubmit}>
        <label className="label">Name:</label>
        <input className="input-box" type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        <label className="label">Profile Image:</label>
        <input className="input-box" type="file" onChange={(e) => setProfileImage(e.target.files[0])} />
        <button className="button" type="submit">
          <span className="button-text">Update Profile</span>
        </button>
      </form>
    </div>
  );
};

export default Profile;
