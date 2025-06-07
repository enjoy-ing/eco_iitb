// src/components/CourseCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, User, BookOpen, ArrowRight } from 'lucide-react';
import StarRating from './StarRating';

const CourseCard = ({ course }) => {
  const getDifficultyColor = (difficulty) => {
    if (difficulty <= 2) return 'text-green-600 bg-green-100';
    if (difficulty <= 3) return 'text-yellow-600 bg-yellow-100';
    return 'text-red-600 bg-red-100';
  };

  const getDifficultyText = (difficulty) => {
    if (difficulty <= 2) return 'Easy';
    if (difficulty <= 3) return 'Moderate';
    return 'Challenging';
  };

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-all duration-300 hover:border-econ-blue-300">
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <Link
            to={`/course/$\{course.id}`}
            className="text-lg font-semibold text-econ-blue-600 hover:text-econ-blue-800 transition-colors"
          >
            {course.code}: {course.name}
          </Link>
          <p className="text-sm text-gray-500 mt-1">{course.credits} Credits</p>
        </div>
        <span className={`px-2 py-1 rounded text-xs font-medium $\{getDifficultyColor(course.difficulty)}`}>
          {getDifficultyText(course.difficulty)}
        </span>
      </div>

      <p className="text-gray-600 text-sm mb-4 line-clamp-2">
        {course.description}
      </p>

      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-4">
          <StarRating rating={course.rating} size={14} />
          <div className="flex items-center text-sm text-gray-500">
            <User size={14} className="mr-1" />
            {course.reviewCount} reviews
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <div className="text-sm text-gray-600">
          <div className="flex items-center">
            <BookOpen size={14} className="mr-1" />
            Prof. {course.professor.name}
          </div>
        </div>
        <Link
          to={`/course/$\{course.id}`}
          className="flex items-center text-econ-blue-600 hover:text-econ-blue-800 text-sm font-medium transition-colors"
        >
          View Details
          <ArrowRight size={14} className="ml-1" />
        </Link>
      </div>
    </div>
  );
};

export default CourseCard;