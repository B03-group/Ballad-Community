import { useEffect, useState } from 'react';
import { supabase } from '../api/api';

const useGetPostsByDate = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getPosts();
  }, []);

  async function getPosts() {
    const { data } = await supabase.from('posts').select().order(`date`, { ascending: false });
    setPosts(data);
  }
  return { posts, setPosts };
};

const useGetPostsByLike = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getPosts();
  }, []);

  async function getPosts() {
    const { data } = await supabase.from('posts').select().order(`like`, { ascending: false });
    setPosts(data);
  }

  return { posts, setPosts };
};

export { useGetPostsByDate, useGetPostsByLike };
