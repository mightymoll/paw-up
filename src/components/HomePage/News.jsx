import React from 'react';
import Article from '../Article/Article'

// placeholder
function News() {
  return (
    <div className="news">
      <h2 className="title">Actualités</h2>
      <div className="translucent">
        <Article />
      </div>
    </div>
  );
};

export default News;