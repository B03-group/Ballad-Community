import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { supabase } from '../../supabaseClient';
import { logout, setUser } from '../../features/auth/authActions';
import './Header.css';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);

  const getSession = async () => {
    const {
      data: { session }
    } = await supabase.auth.getSession();
    if (session) {
      dispatch(setUser(session.user));
    }
  };

  useEffect(() => {
    getSession();
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    dispatch(logout());
    toast.success('로그아웃 되었습니다!', {
      position: 'top-center',
      autoClose: 5000,
      closeOnClick: true,
      onClose: () => navigate('/')
    });
  };

  return (
    <header>
      <h1>발라드 음악 추천 사이트</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          {user ? (
            <>
              <li>
                <Link to="#" onClick={handleLogout} style={{ color: 'red' }}>
                  Logout
                </Link>
              </li>
              <li>
                <Link to="/profile">
                  <img
                    src={user.user_metadata.avatar_url || '/src/assets/default-avatar.png'}
                    alt="Profile"
                    className="avatar"
                  />
                </Link>
              </li>
            </>
          ) : (
            <li>
              <Link to="/login">Login/Register</Link>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
