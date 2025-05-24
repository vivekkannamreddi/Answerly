import React, { useEffect, useState } from 'react';
import API from '../../api.js';
import { useNavigate } from 'react-router-dom';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    API.get('/auth/posts')
      .then(res => {
        setPosts(res.data);
      })
      .catch(err => {
        console.error('API error:', err);
        setPosts([]);
      });
  }, []);

  return (
    <div className="container mt-4">
      <h1 className="mb-4">All Posts</h1>

      <div className="text-end mb-3">
        <Fab color="primary" aria-label="add" onClick={() => navigate('/create')}>
          <AddIcon />
        </Fab>
      </div>

      <div className="row">
        {Array.isArray(posts) && posts.map(post => (
          <div className="col-12 mb-4" key={post._id}>
            <div className="card w-100" style={{ height: '200px', overflow: 'hidden' }}>
              <div className="card-body d-flex flex-column px-3 py-2">
                <h5 className="card-title mb-2" style={{ fontSize: '1.1rem' }}>{post.title}</h5>

                <p
                  className="card-text mb-2"
                  style={{
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    display: '-webkit-box',
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: 'vertical',
                    fontSize: '0.9rem'
                  }}
                >
                  {post.description}
                </p>

                <div className="row flex-grow-1" style={{ fontSize: '0.85rem' }}>
                  {/* Left Column */}
                  <div className="col-4 d-flex flex-column justify-content-between">
                    <p className="mb-1"><strong>📚 Subject:</strong> {post.subject}</p>
                    <p className="mb-1"><strong>🧠 Topic:</strong> {post.topic}</p>
                    <p className="mb-1"><strong>🔥 Difficulty:</strong> {post.difficulty}</p>
                  </div>

                  {/* Middle Column */}
                  <div className="col-4 d-flex flex-column justify-content-between">
                    <p className="mb-1"><strong>✍️ Posted By:</strong> {post.postedBy?.username || "Anonymous"}</p>
                    <p className="mb-1"><strong>💬 Answers:</strong> {post.answers.length}</p>
                    <p className="mb-1"><strong>🕒 Posted On:</strong> {new Date(post.createdAt).toLocaleString()}</p>
                  </div>

                  {/* Right Column */}
                  <div className="col-4 d-flex align-items-end justify-content-end">
                    <button
                      type="button"
                      className="btn btn-outline-primary btn-sm"
                      onClick={() => navigate(`/showPost/${post._id}`)}
                    >
                      View Post
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Posts;
