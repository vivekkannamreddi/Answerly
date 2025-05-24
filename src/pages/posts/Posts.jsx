import React, { useEffect, useState } from 'react';
import './Post.css';
import API from '../../api.js';
import { useNavigate } from 'react-router-dom'; // <-- Import this
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate(); // <-- Hook to navigate

  useEffect(() => {
    API.get('/auth/posts')
      .then(res => {
        console.log('Fetched data:', res.data);
        setPosts(res.data);
      })
      .catch(err => {
        console.error('API error:', err);
        setPosts([]);
      });
  }, []);

  return (
    <div className='mainclass'>
      <h1>All Posts</h1>

      {/* Create Post Button */}
      <div style={{ textAlign: 'right', marginBottom: '10px' }}>
        <Fab color="primary" aria-label="add" onClick={() => navigate('/create')} className="create-post-btn">
          <AddIcon />
        </Fab>
      </div>

      <div className="posts-wrapper">
        {Array.isArray(posts) && posts.map(post => (
          <div className="post-card" key={post._id}>
            <h2 className="post-title">{post.title}</h2>
            <p className="post-desc">{post.description}</p>
            <div className="post-meta">
              <span>📚 Subject: {post.subject}</span>
              <span>🧠 Topic: {post.topic}</span>
              <span>🔥 Difficulty: {post.difficulty}</span>
              <span>✍️ Posted By: {post.postedBy?.username || "Anonymous"}</span>
              <span>💬 Answers: {post.answers.length}</span>
              <span>🕒 {new Date(post.createdAt).toLocaleString()}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Posts;
