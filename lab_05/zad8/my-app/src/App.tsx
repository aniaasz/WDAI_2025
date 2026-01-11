import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Blog from './pages/Blog';
import Article from './pages/Article';
import Dodaj from './pages/Dodaj';
import "./App.css";
function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/article/:id" element={<Article />} />
          <Route path="/dodaj" element={<Dodaj />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
