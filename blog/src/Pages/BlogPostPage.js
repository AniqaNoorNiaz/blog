import React from 'react';
import { useParams } from 'react-router-dom';
import posts from '../postsData';
import '../Blog.css'; // Import the CSS file

function BlogPostPage() {
  const { id } = useParams();
  const post = posts.find(p => p.id === parseInt(id));

  return (
    <div>
      <h2>{post.title}</h2>
      <p><strong>By:</strong> {post.author} | <strong>Date:</strong> {post.date}</p>
      <p>{post.content}</p>
    </div>
  );
}

export default BlogPostPage;
