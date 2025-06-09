// src/pages/ResourcesPage.jsx
import React, { useState } from 'react';
import { 
  Download, Calendar, Book, FileText, Users, 
  Search, Filter, Download as DownloadIcon,
  Briefcase, Code, Info, GraduationCap, TrendingUp
} from 'lucide-react';

const semesterCourses = {
  'Semester 2': [
    { name: 'EC101: Introduction to Economics', file: 'resources/intro_economics.pdf' },
    { name: 'MA110: ', file: 'resources/maths1.pdf' },
    { name: 'PH110: ', file: 'resources/statistics.pdf' },
    { name: 'MS101: ', file: 'resources/computers.pdf' }
  ],
  // Repeat for other semesters...
};

const SemesterPage = ({ semester }) => {
  const courses = semesterCourses[semester] || [];

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">{semester} Courses</h2>
      <ul className="space-y-2">
        {courses.map(course => (
          <li key={course.name} className="flex justify-between items-center bg-white p-3 rounded shadow">
            <span>{course.name}</span>
            <a href={course.file} target="_blank" className="text-blue-600 font-semibold">Open</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SemesterPage;
