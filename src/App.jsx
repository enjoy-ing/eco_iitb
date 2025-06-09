// src/App.jsx
import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import ResourcesPage from './pages/ResourcesPage';
import CourseReviewsPage from './pages/CourseReviewsPage';
import CourseDetailPage from './pages/CourseDetailPage';
import BlogPage from './pages/BlogPage';
import CouncilTeamPage from './pages/CouncilTeamPage';
import SemesterPage from './pages/SemesterPage';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/resources" element={<ResourcesPage />} />
            <Route path="/reviews" element={<CourseReviewsPage />} />
            <Route path="/reviews/:courseCode" element={<CourseDetailPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/council" element={<CouncilTeamPage />} />
            <Route path="/resources/sem2" element={<SemesterPage semester="Semester 2" />} />

          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;