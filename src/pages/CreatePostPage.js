// src/pages/CreatePostPage.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './CreatePostPage.css'

const CreatePostPage = ({ addPost }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [tags, setTags] = useState('');
  const [image, setImage] = useState('');
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');
  const navigate = useNavigate();

  const handleChange = (e, setter) => {
    setter(e.target.value);
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: undefined });
    }
  };

  const validateInput = (value) => {
    return value.trim().length > 0; // Check if the input is not just spaces
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    // Validation
    if (!validateInput(title)) newErrors.title = 'This field is required';
    if (!validateInput(content)) newErrors.content = 'This field is required';
    if (!validateInput(tags)) newErrors.tags = 'This field is required';
    if (!validateInput(image)) newErrors.image = 'This field is required';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return; // Stop form submission
    }

    // If validation passes, create post
    addPost({ title, content, tags, image });
    setSuccessMessage('Successfully posted!');

    // Redirect to home after 1 second
    setTimeout(() => {
      navigate('/');
    }, 1000);
  };

  return (
    <div className="create-post-bg">
      <div className="create-post-card">
        <h1>Create a New Post</h1>
        <form onSubmit={handleSubmit}>
          <div className='input-section'>
            <input
              type="text"
              name="title"
              placeholder="Title"
              value={title}
              onChange={(e) => handleChange(e, setTitle)}
              style={{ borderColor: errors.title ? 'red' : '' }}
            />
            {errors.title && <span style={{ color: 'red' }}>*{errors.title}</span>}
          </div>
          <div className='content-section'>
            <textarea
              name="content"
              placeholder="Content"
              value={content}
              onChange={(e) => handleChange(e, setContent)}
              style={{ borderColor: errors.content ? 'red' : '' }}
            />
            {errors.content && <span style={{ color: 'red' }}>*{errors.content}</span>}
          </div>
          <div className='input-section'>
            <input
              type="text"
              name="tags"
              placeholder="Tags"
              value={tags}
              onChange={(e) => handleChange(e, setTags)}
              style={{ borderColor: errors.tags ? 'red' : '' }}
            />
            {errors.tags && <span style={{ color: 'red' }}>*{errors.tags}</span>}
          </div>
          <div className='input-section'>
            <input
              type="text"
              name="image"
              placeholder="Image URL"
              value={image}
              onChange={(e) => handleChange(e, setImage)}
              style={{ borderColor: errors.image ? 'red' : '' }}
            />
            {errors.image && <span style={{ color: 'red' }}>*{errors.image}</span>}
          </div>
          <button className='submit-btn' type="submit">Post</button>
        </form>
        {successMessage && <div style={{ color: 'green' }}>{successMessage}</div>}
      </div>
    </div> 
  );
};

export default CreatePostPage;
