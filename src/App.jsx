import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useParams } from 'react-router-dom';
import BlogPostList from './components/BlogPostList/BlogPostList';
import BlogPostDetail from './components/BlogPostDetail/BlogPostDetail';
import BlogPostCreate from './components/BlogPostForm/BlogPostCreate';
import BlogPostEdit from './components/BlogPostForm/BlogPostEdit';
import Layout from './components/Layout/Layout';
import './App.css';

// Sample blog posts data
const initialPosts = [
  {
    id: '1',
    title: 'Getting Started with React',
    summary: 'Learn the basics of React and build your first application.',
    content: `<p>Learn the basics of React and build your first application. This comprehensive guide will walk you through the fundamentals of React, including components, props, state, and more.</p><a href='https://reactjs.org' target='_blank' rel='noopener noreferrer'>Official React Docs</a>` ,
    author: 'John Doe',
    date: '2023-01-01',
    url: '/posts/1',
  },
  {
    id: '2',
    title: 'CSS Grid vs. Flexbox',
    summary: 'A comparison of two powerful layout systems in CSS.',
    content: `<p>A comparison of two powerful layout systems in CSS. Learn when to use Grid and when to use Flexbox for your layouts.</p>`,
    author: 'Jane Smith',
    date: '2023-02-15',
    url: '/posts/2',
  },
  {
    id: '3',
    title: 'Accessibility in Web Development',
    summary: 'Tips for making your web applications more accessible.',
    content: `<p>Tips for making your web applications more accessible. Learn about ARIA roles, keyboard navigation, and more.</p>`,
    author: 'Alex Lee',
    date: '2023-03-10',
    url: '/posts/3',
  },
];

function BlogPostDetailWrapper({ posts }) {
  const { postId } = useParams();
  const post = posts.find((p) => p.id === postId);
  if (!post) return <BlogPostDetail />;
  return (
    <BlogPostDetail
      title={post.title}
      content={post.content}
      author={post.author}
      date={post.date}
    />
  );
}

function App() {
  const [posts, setPosts] = useState(initialPosts);

  const handleCreate = (data) => {
    const newId = (posts.length + 1).toString();
    const newPost = {
      ...data,
      id: newId,
      summary: data.content.replace(/<[^>]+>/g, '').slice(0, 100),
      url: `/posts/${newId}`,
    };
    setPosts([newPost, ...posts]);
  };

  const handleEdit = (postId, data) => {
    setPosts(posts.map((post) =>
      post.id === postId
        ? {
            ...post,
            ...data,
            summary: data.content.replace(/<[^>]+>/g, '').slice(0, 100),
          }
        : post
    ));
  };

  const handleDelete = async (postId) => {
    setPosts(posts.filter((post) => post.id !== postId));
  };

  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<BlogPostList posts={posts} onDelete={handleDelete} />} />
          <Route path="/create" element={<BlogPostCreate onCreate={handleCreate} />} />
          <Route path="/edit/:postId" element={<BlogPostEdit posts={posts} onEdit={handleEdit} />} />
          <Route path="/posts/:postId" element={<BlogPostDetailWrapper posts={posts} />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;

