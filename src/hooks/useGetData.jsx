import { useEffect, useState } from 'react';
import supabase from '../../supabase';

const useGetData = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getPosts();
  }, []);

  async function getPosts() {
    const { data } = await supabase.from('posts').select();
    setPosts(data);
  }

  const data = posts;
  return { data };
};

export default useGetData;
