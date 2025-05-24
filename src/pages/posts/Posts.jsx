// import React, { useEffect, useState } from 'react';
// import './Post.css';
// import axios from 'axios';

// const Posts = () => {
//   const [posts, setPosts] = useState([]);

//   useEffect(() => {
//     axios.get('/api/posts') // replace with your API endpoint
//       .then(res => setPosts(res.data))
//       .catch(err => console.error(err));
//   }, []);

//   return (
//     <div className='mainclass'>
//       <h1>All Posts</h1>
//       <div className="posts-wrapper">
//         {posts.map(post => (
//           <div className="post-card" key={post._id}>
//             <h2 className="post-title">{post.title}</h2>
//             <p className="post-desc">{post.description}</p>
//             <div className="post-meta">
//               <span>📚 Subject: {post.subject}</span>
//               <span>🧠 Topic: {post.topic}</span>
//               <span>🔥 Difficulty: {post.difficulty}</span>
//               <span>✍️ Posted By: {post.postedBy?.name || "Anonymous"}</span>
//               <span>💬 Answers: {post.answers.length}</span>
//               <span>🕒 {new Date(post.createdAt).toLocaleString()}</span>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Posts;
import React from 'react'

const Posts = () => {
  return (
    <div>Posts</div>
  )
}

export default Posts