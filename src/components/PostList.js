import React from 'react';
import { Link } from 'react-router-dom';
import './PostList.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

const PostList = ({ posts, deletePost }) => {
  return (
    <div className="post-list">
      {posts.map((post) => (
        <div key={post.id} className="post">
          <h2 className="post-title">
            <Link to={`/post/${post.id}`}>{post.title}</Link>
          </h2>
          <p className="post-excerpt">{post.content.substring(0, 100)}...</p>
          <p>Tags: {post.tags}</p>
          <div className='buttons'>
            <Link className='edit-btn' to={`/post/${post.id}`}>Edit</Link>
            <button className='delete-btn' onClick={() => deletePost(post.id)}>
              <FontAwesomeIcon icon={faTrashAlt} size='2x' />
            </button>
          </div> 
        </div>
      ))}
    </div>
  );
};

export default PostList;
