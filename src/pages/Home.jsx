// /src/pages/Home.js
import React, { useState } from 'react';
import BlogPostList from '../components/BlogPostList/BlogPostList';

const Home = () => {
  const [posts] = useState([
    { id: 1, title: 'First Post', content: 'This is the first blog post.', author: 'John', date: '2025-06-01' },
    { id: 2, title: 'Second Post', content: 'This is the second blog post.', author: 'Jane', date: '2025-06-02' },
    { id: 3, title: 'Third Post', content: 'This is the third blog post.', author: 'Alice', date: '2025-06-03' },
  ]);

  return <BlogPostList posts={posts} />;
};

export default Home;
