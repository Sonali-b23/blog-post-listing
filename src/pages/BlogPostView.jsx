// // src/pages/BlogPostView.jsx
// import React from 'react';
// import DeleteButton from '../components/DeleteButton/DeleteButton';

// function BlogPostView({ post, onPostDeleted }) {
//   const handleDelete = async (postId) => {
//     try {
//       const response = await fetch(`/api/posts/${postId}`, {
//         method: 'DELETE',
//       });

//       if (!response.ok) {
//         throw new Error('Failed to delete post');
//       }

//       alert('Post deleted successfully!');
//       onPostDeleted(postId); // Refresh UI or navigate
//     } catch (error) {
//       alert('An error occurred while deleting the post.');
//     }
//   };

//   return (
//     <div className="blog-post">
//       <h2>{post.title}</h2>
//       <p>{post.content}</p>
//       <DeleteButton postId={post.id} onDelete={handleDelete} />
//     </div>
//   );
// }

// export default BlogPostView;
import React from 'react';
import DeleteButton from '../components/DeleteButton/DeleteButton';

function BlogPostView({ post, onPostDeleted }) {
  // Replace your current handleDelete with this:
  const handleDelete = async (postId) => {
    try {
      console.log('Simulating delete...');
      await new Promise((resolve) => setTimeout(resolve, 500)); // simulate network delay

      alert('Post deleted successfully!');
      onPostDeleted(postId);
    } catch (error) {
      alert('An error occurred while deleting the post.');
    }
  };

  return (
    <div className="blog-post">
      <h2>{post.title}</h2>
      <p>{post.content}</p>
      <DeleteButton postId={post.id} onDelete={handleDelete} />
    </div>
  );
}

export default BlogPostView;
