import { useEffect, useState } from 'react';
import { supabase } from '../api/api';

const useGetData = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getPosts();
  }, []);

  async function getPosts() {
    const { data } = await supabase.from('posts').select().order(`date`, { ascending: false });
    setPosts(data);
  }

  const data = posts;
  return { data };
};

export default useGetData;
