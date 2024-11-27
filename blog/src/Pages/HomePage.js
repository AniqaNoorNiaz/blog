// src/Pages/HomePage.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import posts from '../postsData';
import Sidebar from '../Components/Sidebar';
import Slider from '../Components/Slider';
import Modal from '../Components/Modal';
import Accordion from '../Components/Accordion'; // Import Accordion
import '../Components/Sidebar.css';
import '../Blog.css';

const slides = [
  require('../images/image1.jpeg'),
  require('../images/image2.jpeg'),
  require('../images/image3.jpeg'),
];

function HomePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div>
      <header className="header">
  <h1 className="blog-title">My Blog</h1>
</header>
<br />

      <div className="styled-line"></div>
      <div className="slider-container">
        <Slider slides={slides} />
      </div>
      <div className="blog-container">
        <div className="posts">
        <h2 style={{
  color: '#333',
  fontSize: '2.5rem',
  fontWeight:'bold',
  textAlign: 'center',
  backgroundColor: '#f0f0f0',
  padding: '10px',
}}>
  Blog Posts
</h2>

          <ul>
            {posts.map(post => (
              <li key={post.id}>
                <h3>{post.title}</h3>
                <p>{post.content.substring(0, 100)}...</p>
                <p><strong>By:</strong> {post.author} | <strong>Date:</strong> {post.date}</p>
                <Link to={`/post/${post.id}`}>Read More</Link>  <br />  <br />
                <button onClick={openModal}>Open Modal</button>  <br />  <br />
                <Accordion title="More Info"> 
                  <p>Additional content or details about {post.title} can be displayed here.</p>
                </Accordion>  <br />
              </li>
            ))}
          </ul>
        </div>
        <Sidebar />
      </div>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <h2>Modal Title</h2>
        <p>This is some content inside the modal.</p>
      </Modal>
    </div>
  );
}

export default HomePage;
