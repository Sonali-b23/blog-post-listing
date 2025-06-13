// src/App.jsx
import React, { useState } from 'react';
import BlogPostView from './pages/BlogPostView';

function App() {
  const [post, setPost] = useState({
    id: 1,
    title: 'Sample Blog Post',
    content: 'This is a test blog post that can be deleted.'
  });

  const handlePostDeleted = (deletedPostId) => {
    console.log(`Post with ID ${deletedPostId} deleted.`);
    // Remove the post from the UI
    setPost(null);
  };

  return (
    <div className="App" style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>My Blog</h1>
      {post ? (
        <BlogPostView post={post} onPostDeleted={handlePostDeleted} />
      ) : (
        <p>The post has been deleted.</p>
      )}
    </div>
  );
}

export default App;




// import React from 'react';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import Header from './components/Header/Header';
// import Home from './pages/Home';
// import CreatePost from './pages/CreatePost';
// import EditPost from './pages/EditPost';
// import NotFound from './pages/NotFound';

// const App = () => {
//   return (
//     <Router>
//       <Header />
//       <div className="container">
//         <Switch>
//           <Route exact path="/" component={Home} />
//           <Route path="/create" component={CreatePost} />
//           <Route path="/edit/:id" component={EditPost} />
//           <Route compo
//           nent={NotFound} />
//         </Switch>
//       </div>
//     </Router>
//   );
// };

// export default App;


// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import BlogPostListPage from './pages/BlogPostListPage/BlogPostListPage';
// import CreatePostPage from './pages/CreatePostPage/CreatePostPage';
// import EditPostPage from './pages/EditPostPage/EditPostPage';
// import BlogPostPage from './pages/BlogPostPage/BlogPostPage';

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<BlogPostListPage />} />
//         <Route path="/create" element={<CreatePostPage />} />
//         <Route path="/edit/:id" element={<EditPostPage />} />
//         <Route path="/post/:id" element={<BlogPostPage />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;

// src/App.jsx
// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import BlogPostListPage from './pages/BlogPostListPage/BlogPostListPage'; // Correct path
// import CreatePostPage from './pages/CreatePostPage/CreatePostPage'; // Correct path
// import EditPostPage from './pages/EditPostPage/EditPostPage'; // Correct path

// const App = () => {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<BlogPostListPage />} />
//         <Route path="/create" element={<CreatePostPage />} />
//         <Route path="/edit/:id" element={<EditPostPage />} />
//       </Routes>
//     </Router>
//   );
// };

// export default App;


// src/App.jsx
// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import BlogPostListPage from './pages/BlogPostListPage/BlogPostListPage';
// import BlogPostForm from './components/BlogPostForm/BlogPostForm';

// const App = () => {
//   const handleSubmit = (postData) => {
//     console.log('Form submitted with data:', postData);
//     // Handle saving new post or updating an existing one here
//   };

//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<BlogPostListPage />} />
//         <Route path="/create" element={<BlogPostForm onSubmit={handleSubmit} />} />
//         <Route path="/edit/:id" element={<BlogPostForm onSubmit={handleSubmit} />} />
//       </Routes>
//     </Router>
//   );
// };

// export default App;

// /src/App.js
// import React from 'react';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import Header from './components/Header/Header';
// import Home from './pages/Home';
// import CreatePost from './pages/CreatePost';
// import EditPost from './pages/EditPost';
// import NotFound from './pages/NotFound';

// const App = () => {
//   return (
//     <Router>
//       <Header />
//       <div className="container">
//         <Switch>
//           <Route exact path="/" component={Home} />
//           <Route path="/create" component={CreatePost} />
//           <Route path="/edit/:id" component={EditPost} />
//           <Route component={NotFound} />
//         </Switch>
//       </div>
//     </Router>
//   );
// };

// export default App;



// import React from 'react';
// import BlogPostForm from './components/BlogPostForm';

// const handleSubmit = (formData) => {
//   console.log('Form submitted:', formData);
//   // Here you would save the data or update your state/database
// };

// const existingPost = {
//   title: 'Sample Title',
//   content: 'Sample content...',
//   author: 'Jane Doe',
//   date: '2023-06-05',
// };

// function App() {
//   return (
//     <div>
//       <h1>Create New Post</h1>
//       <BlogPostForm onSubmit={handleSubmit} />
      
//       <h1>Edit Post</h1>
//       <BlogPostForm post={existingPost} onSubmit={handleSubmit} />
//     </div>
//   );
// }

// export default App;


// import React from 'react';
// import BlogPostDetail from './components/BlogPostDetail';

// const samplePost = {
//   title: 'Understanding React Hooks',
//   content: `<p>React hooks provide a powerful way to use state and lifecycle features in function components.</p>
//   <p>Learn more about <a href="https://reactjs.org/docs/hooks-intro.html" target="_blank" rel="noopener noreferrer">React Hooks here</a>.</p>`,
//   author: 'Jane Doe',
//   date: '2023-04-20',
// };

// const App = () => (
//   <div>
//     <BlogPostDetail 
//       title={samplePost.title}
//       content={samplePost.content}
//       author={samplePost.author}
//       date={samplePost.date}
//     />
//   </div>
// );

// export default App;


// import React from 'react';
// import { BrowserRouter as Router } from 'react-router-dom';
// // import BlogPostList from './components/BlogPostList/BlogPostList';
// import BlogPostDetail from './components/BlogPostDetail/BlogPostDetail';
// import './App.css';

// // Sample blog posts data
// const samplePosts = [
//   {
//     id: '1',
//     title: 'Getting Started with React',
//     summary: 'Learn the basics of React and build your first application. This comprehensive guide will walk you through the fundamentals of React, including components, props, state, and more.',
//     date: '2023-01-01',
//     url: '/posts/1',
//   },
//   {
//     id: '2',
//     title: 'CSS Grid vs. Flexbox',
//     summary: 'A comparison of two powerful layout systems in CSS. Understand when to use Grid vs Flexbox, and how they can work together to create complex layouts with ease.',
//     date: '2023-02-15',
//     url: '/posts/2',
//   },
//   {
//     id: '3',
//     title: 'Accessibility in Web Development',
//     summary: 'Tips for making your web applications more accessible. Learn about ARIA attributes, semantic HTML, keyboard navigation, and other essential practices for inclusive web design.',
//     date: '2023-03-10',
//     url: '/posts/3',
//   },
//   {
//     id: '4',
//     title: 'Modern JavaScript Features',
//     summary: 'Explore the latest features in JavaScript and how they can improve your code. From async/await to optional chaining, discover how modern JavaScript can make your code more elegant.',
//     date: '2023-04-20',
//     url: '/posts/4',
//   },
// ];

// function App() {
//   return (
//     <Router>
//       <div className="app">
//         <header className="app-header">
//           <h1>My Blog</h1>
//         </header>
//         <main className="app-main">
//           <BlogPostList posts={samplePosts} />
//         </main>
//       </div>
//     </Router>
//   );
// }

// export default App;

