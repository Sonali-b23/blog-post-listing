import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './BlogPostForm.module.css';

const BlogPostForm = ({ post, onSubmit }) => {
  const [title, setTitle] = useState(post?.title || '');
  const [content, setContent] = useState(post?.content || '');
  const [author, setAuthor] = useState(post?.author || '');
  const [date, setDate] = useState(post?.date || '');
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    setTitle(post?.title || '');
    setContent(post?.content || '');
    setAuthor(post?.author || '');
    setDate(post?.date || '');
  }, [post]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    if (!title) newErrors.title = 'Required';
    if (!content) newErrors.content = 'Required';
    if (!author) newErrors.author = 'Required';
    if (!date) newErrors.date = 'Required';
    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      setSubmitting(true);
      onSubmit({ title, content, author, date });
      setSubmitting(false);
    }
  };

  return (
    <form className={styles.blogPostForm} onSubmit={handleSubmit} noValidate>
      <div className={styles.formGroup}>
        <label htmlFor="title">Title</label>
        <input
          id="title"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className={errors.title ? styles.inputError : ''}
        />
        {errors.title && <p className={styles.error}>{errors.title}</p>}
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="content">Content</label>
        <textarea
          id="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className={errors.content ? styles.inputError : ''}
          rows={6}
        />
        {errors.content && <p className={styles.error}>{errors.content}</p>}
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="author">Author</label>
        <input
          id="author"
          type="text"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          className={errors.author ? styles.inputError : ''}
        />
        {errors.author && <p className={styles.error}>{errors.author}</p>}
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="date">Publication Date</label>
        <input
          id="date"
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className={errors.date ? styles.inputError : ''}
        />
        {errors.date && <p className={styles.error}>{errors.date}</p>}
      </div>
      <button
        type="submit"
        className={styles.submitButton}
        disabled={submitting}
      >
        {submitting ? 'Submitting...' : post ? 'Update Post' : 'Create Post'}
      </button>
    </form>
  );
};

BlogPostForm.propTypes = {
  post: PropTypes.shape({
    title: PropTypes.string,
    content: PropTypes.string,
    author: PropTypes.string,
    date: PropTypes.string,
  }),
  onSubmit: PropTypes.func.isRequired,
};

export default BlogPostForm;
