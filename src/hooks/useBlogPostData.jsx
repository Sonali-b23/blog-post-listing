import { useState, useEffect } from 'react';
import { fetchPosts } from '../services/blogService';

export const useBlogPostData = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchPosts().then((data) => setPosts(data));
  }, []);

  return posts;
};
