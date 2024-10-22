import React from 'react';
import PostList from '../components/PostList';
import './HomePage.css';

const HomePage = ({ posts, deletePost }) => {
  return (
    <div className='home-container'>
      <h1 >Blog Posts</h1>
      <PostList posts={posts} deletePost={deletePost} />
    </div>
  );
};

export default HomePage;
