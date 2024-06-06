import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateProfile } from '../features/auth/authActions';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);
  const [name, setName] = useState('');
  const [profileImage, setProfileImage] = useState(null);

  useEffect(() => {
    if (user) {
      setName(user.user_metadata.name || '');
    } else {
      navigate('/');
    }
  }, [user, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      name,
      profileImage
    };
    try {
      const updatedUser = await dispatch(updateProfile(formData)).unwrap();
      toast.success('프로필이 업데이트 되었습니다!', {
        position: 'top-center',
        autoClose: 5000,
        closeOnClick: true,
        onClose: () => navigate('/')
      });
      // 로컬 스토리지에 업데이트된 사용자 데이터 저장
      localStorage.setItem('user', JSON.stringify(updatedUser));
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
    <div>
      <h1>Profile</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div>
          <label>Profile Image:</label>
          <input type="file" onChange={(e) => setProfileImage(e.target.files[0])} />
        </div>
        <button type="submit">Update Profile</button>
      </form>
    </div>
  );
};

export default Profile;
