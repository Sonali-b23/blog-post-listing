import React from 'react';
import styles from './Comment.module.css';

function formatDate(date) {
  const d = typeof date === 'string' ? new Date(date) : date;
  return d.toLocaleString(undefined, {
    year: 'numeric', month: 'long', day: 'numeric',
    hour: '2-digit', minute: '2-digit', hour12: false
  });
}

const Comment = ({ name, date, text, avatar }) => (
  <div className={styles.comment} aria-label={`Comment by ${name}`}> 
    {avatar && (
      <img src={avatar} alt={name + "'s avatar"} className={styles.avatar} width={50} height={50} />
    )}
    <div className={styles.content}>
      <div className={styles.header}>
        <span className={styles.name}>{name}</span>
        <span className={styles.date}>{formatDate(date)}</span>
      </div>
      <div className={styles.text}>{text}</div>
    </div>
  </div>
);

export default Comment;
