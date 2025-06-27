import React, { useEffect } from 'react';
import styles from './BlogPostDetail.module.css';
import CommentList from '../CommentSystem/CommentList';
import CommentForm from '../CommentSystem/CommentForm';

const BlogPostDetail = ({ title, content, author, date, comments = [], onAddComment }) => {
  useEffect(() => {
    console.log('BlogPostDetail comments prop:', comments);
  }, [comments]);

  if (!title || !content || !author || !date) {
    return <p className={styles.notFound}>Blog post not found.</p>;
  }

  const formattedDate = new Date(date).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });

  return (
    <article className={styles.blogPostDetail}>
      <header>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.author}>By {author}</p>
        <p className={styles.date}>Published on {formattedDate}</p>
      </header>
      <section
        className={styles.content}
        dangerouslySetInnerHTML={{ __html: content }}
      />
      <section className={styles.commentsSection}>
        <h2 className={styles.commentsTitle}>Comments</h2>
        <CommentList comments={comments} />
        <CommentForm onSubmit={onAddComment} />
      </section>
    </article>
  );
};

export default BlogPostDetail;
