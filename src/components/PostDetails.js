import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import PostForm from './PostForm';
import './PostDetails.css';

const PostDetails = ({ posts, updatePost }) => {
  const { id } = useParams();
  const post = posts.find((p) => p.id === parseInt(id));
  const [isEditing, setIsEditing] = useState(false);
  const navigate = useNavigate();

  const handleUpdate = (updatedPost) => {
    updatePost({ ...updatedPost, id: post.id });
    setIsEditing(false);
    navigate('/');
  };

  if (!post) return <p>Post not found!</p>;

  return (
    <div className="post-details">
      {isEditing ? (
        <PostForm onSubmit={handleUpdate} postToEdit={post} className="edit-form" />
      ) : (
        <>
          <h1>{post.title}</h1>
          <p>{post.content}</p>
          <img src={post.image} alt={post.title} />
          <p className="tags">Tags: {post.tags}</p>
          <button onClick={() => setIsEditing(true)}>Edit</button>
        </>
      )}
    </div>
  );
};

export default PostDetails;
