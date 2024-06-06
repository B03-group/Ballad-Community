import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import Layout from '../components/layout/Layout';

const Private = () => {
  const { user } = useSelector((state) => state.auth);

  if (!user) {
    alert('로그인이 필요한 기능입니다.');
  }

  return user ? <Layout /> : <Navigate to="/login" />;
};

export default Private;
