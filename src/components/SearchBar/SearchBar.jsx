import React, { useState } from 'react';
import styles from './SearchBar.module.css';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');
  const [expanded, setExpanded] = useState(false);

  const handleInput = (e) => {
    setQuery(e.target.value);
    onSearch(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(query);
  };

  const handleExpand = () => setExpanded(true);
  const handleCollapse = () => {
    setExpanded(false);
    setQuery('');
    onSearch('');
  };

  return (
    <form className={styles.searchForm} onSubmit={handleSubmit} role="search" aria-label="Search posts">
      <label htmlFor="search-input" className={styles.srOnly}>Search posts</label>
      <div className={styles.inputWrapper + (expanded ? ' ' + styles.expanded : '')}>
        <button
          type="button"
          className={styles.iconButton}
          aria-label="Open search"
          onClick={handleExpand}
          tabIndex={expanded ? -1 : 0}
        >
          <span className={styles.icon} aria-hidden="true">🔍</span>
        </button>
        <input
          id="search-input"
          className={styles.input}
          type="text"
          placeholder="Search posts..."
          value={query}
          onChange={handleInput}
          onFocus={handleExpand}
          style={{ display: expanded ? 'block' : '', width: expanded ? '200px' : '0' }}
          aria-label="Search posts"
        />
        {expanded && (
          <button
            type="button"
            className={styles.cancelButton}
            onClick={handleCollapse}
            aria-label="Cancel search"
          >
            Cancel
          </button>
        )}
      </div>
    </form>
  );
};

export default SearchBar;
