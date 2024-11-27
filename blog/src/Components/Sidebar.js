import React from 'react';
import './Sidebar.css'; // Create a CSS file for sidebar

function Sidebar() {
  return (
    <aside className="sidebar">
      <h3>Categories</h3>
      <ul>
        <li>React</li>
        <li>JavaScript</li>
        <li>CSS</li>
        <li>Web Development</li>
      </ul>

      <h3>Recent Posts</h3>
      <ul>
        <li>Getting Started with React</li>
        <li>Understanding JavaScript Closures</li>
        <li>CSS Grid vs Flexbox</li>
      </ul>
    </aside>
  );
}

export default Sidebar;
