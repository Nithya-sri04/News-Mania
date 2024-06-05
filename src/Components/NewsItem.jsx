import React from 'react';
import image from '../assets/news.jpeg';

const NewsItem = ({ title, description, src, url }) => {
  return (
    <div className="card bg-dark text-light my-3 mx-3" style={{ maxWidth: '345px' }}>
      <img 
        src={src ? src : image} 
        style={{ height: '200px', width: '100%', objectFit: 'cover' }} 
        className="card-img-top" 
        alt={title} 
      />
      <div className="card-body">
        <h5 className="card-title">{title ? title.slice(0, 50) : "No title available"}</h5>
        <p className="card-text">{description ? description.slice(0, 90) : "News description is not available now"}</p>
        <a href={url} className="btn btn-primary" target="_blank" rel="noopener noreferrer">Read More</a>
      </div>
    </div>
  );
};

export default NewsItem;
