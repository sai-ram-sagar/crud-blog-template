import React, { useState } from 'react';
import './PostForm.css';

const PostForm = ({ onSubmit, postToEdit }) => {
  const [post, setPost] = useState(postToEdit || { title: '', content: '', tags: '', image: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPost({ ...post, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (post.title && post.content && post.tags && post.image) {
      onSubmit(post);
    } else {
      alert("All fields must be filled");
    }
  };

  return (
    <div className='post-form-container'>
      <form className='edit-bg-container' onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            className='edit-input'
            type="text"
            name="title"
            id="title"
            placeholder="Title"
            value={post.title}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="content">Content</label>
          <textarea
            className='edit-input'
            name="content"
            id="content"
            placeholder="Content"
            value={post.content}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="tags">Tags</label>
          <input
            className='edit-input'
            type="text"
            name="tags"
            id="tags"
            placeholder="Tags"
            value={post.tags}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="image">Image URL</label>
          <input
            className='edit-input'
            type="text"
            name="image"
            id="image"
            placeholder="Image URL"
            value={post.image}
            onChange={handleChange}
          />
        </div>

        <button type="submit" style={{ width: '100px' }}>Submit</button>
        </form>
    </div>
  );
};

export default PostForm;
