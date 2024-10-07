import React from 'react';

const NewsCard = ({ article }) => {
  return (
    <div className="news-card">
      <img src={article.multimedia[0].url} alt={article.title} />
      <h2>{article.title}</h2>
      <p>{article.abstract}</p>
    </div>
  );
};

export default NewsCard;