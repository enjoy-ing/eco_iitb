// src/pages/CourseReviewsPage.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Book, Users, Clock, Star, ChevronDown, ChevronUp } from 'lucide-react';

const CourseReviewsPage = () => {
  const navigate = useNavigate();
  const [expandedSemester, setExpandedSemester] = useState('SEM 3');

  const coursesData = {
    'SEM 3': [
      { code: 'EC221', name: 'Intermediate Microeconomics I', credits: 6, hasReview: true },
      { code: 'EC223', name: 'Intermediate Macroeconomics I', credits: 6, hasReview: true },
      { code: 'EC225', name: 'Mathematics for Economics I', credits: 6, hasReview: true },
      { code: 'MM225', name: 'AI and Data Science', credits: 6, hasReview: true },
      { code: 'EC227', name: 'Statistics I', credits: 6, hasReview: true }
    ],
    'SEM 4': [
      { code: 'EC210', name: 'Intermediate Microeconomics II', credits: 6, hasReview: true },
      { code: 'EC212', name: 'Intermediate Macroeconomics II', credits: 6, hasReview: true },
      { code: 'EC214', name: 'Statistics II', credits: 6, hasReview: true },
      { code: 'DE250', name: 'Design Thinking for Innovation', credits: 6, hasReview: true }
    ],
    'SEM 5': [
      { code: 'EC301', name: 'Industrial Organization', credits: 6, hasReview: false },
      { code: 'EC303', name: 'Money and Banking', credits: 6, hasReview: false },
      { code: 'EC305', name: 'Public Economics', credits: 6, hasReview: false },
      { code: 'EC307', name: 'International Trade', credits: 6, hasReview: false }
    ],
    'SEM 6': [
      { code: 'EC302', name: 'Labor Economics', credits: 6, hasReview: false },
      { code: 'EC304', name: 'Development Economics', credits: 6, hasReview: false },
      { code: 'EC306', name: 'Environmental Economics', credits: 6, hasReview: false },
      { code: 'EC308', name: 'Econometrics', credits: 6, hasReview: false }
    ],
    'SEM 7': [
      { code: 'EC401', name: 'Advanced Microeconomics', credits: 6, hasReview: false },
      { code: 'EC403', name: 'Advanced Macroeconomics', credits: 6, hasReview: false },
      { code: 'EC405', name: 'Game Theory', credits: 6, hasReview: false }
    ],
    'ELECTIVES': [
      { code: 'EC501', name: 'Behavioral Economics', credits: 6, hasReview: false },
      { code: 'EC503', name: 'Financial Economics', credits: 6, hasReview: false },
      { code: 'EC505', name: 'Economic History', credits: 6, hasReview: false }
    ]
  };

  const handleCourseClick = (courseCode) => {
    navigate(`/reviews/${courseCode.toLowerCase()}`);
  };

  const toggleSemester = (semester) => {
    setExpandedSemester(expandedSemester === semester ? '' : semester);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Course Reviews</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Browse student reviews and detailed insights for Economics courses. 
            Click on any course to read comprehensive reviews from your peers.
          </p>
        </div>

        {/* Course Grid by Semester */}
        <div className="space-y-8">
          {Object.entries(coursesData).map(([semester, courses]) => (
            <div key={semester} className="bg-white rounded-lg shadow-lg overflow-hidden">
              {/* Semester Header */}
              <button
                onClick={() => toggleSemester(semester)}
                className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-6 py-4 text-left transition-all duration-300"
              >
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-bold flex items-center">
                    <Book className="mr-3" size={28} />
                    {semester === 'ELECTIVES' ? 'Department Electives' : `Semester ${semester.split(' ')[1]}`}
                  </h2>
                  {expandedSemester === semester ? 
                    <ChevronUp size={24} /> : 
                    <ChevronDown size={24} />
                  }
                </div>
              </button>

              {/* Course Grid */}
              {expandedSemester === semester && (
                <div className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {courses.map((course) => (
                      <div
                        key={course.code}
                        onClick={() => handleCourseClick(course.code)}
                        className="group cursor-pointer transform transition-all duration-300 hover:scale-105"
                      >
                        <div className={`${
                          course.hasReview 
                            ? 'bg-green-600 hover:bg-green-700' 
                            : 'bg-gray-500 hover:bg-gray-600'
                        } text-white rounded-lg p-6 shadow-lg transition-colors duration-300 min-h-[160px] flex flex-col justify-between`}>
                          <div>
                            <div className="flex items-center justify-between mb-3">
                              <span className="text-sm font-medium bg-white bg-opacity-20 px-2 py-1 rounded">
                                {course.credits} Credits
                              </span>
                              {course.hasReview ? (
                                <Star className="text-yellow-300" size={20} fill="currentColor" />
                              ) : (
                                <Clock className="text-gray-300" size={20} />
                              )}
                            </div>
                            <h3 className="font-bold text-lg mb-2">
                              {course.code}
                            </h3>
                            <p className="text-sm leading-tight opacity-90">
                              {course.name}
                            </p>
                          </div>
                          <div className="mt-4">
                            <span className="text-xs opacity-75">
                              {course.hasReview ? 'Review Available' : 'No Review Yet'}
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-16 bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Course Statistics</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <div className="text-3xl font-bold text-blue-600 mb-2">27</div>
              <div className="text-gray-600">Total Courses</div>
            </div>
            <div className="text-center p-4 bg-green-50 rounded-lg">
              <div className="text-3xl font-bold text-green-600 mb-2">2</div>
              <div className="text-gray-600">Reviews Available</div>
            </div>
            <div className="text-center p-4 bg-purple-50 rounded-lg">
              <div className="text-3xl font-bold text-purple-600 mb-2">5</div>
              <div className="text-gray-600">Semesters</div>
            </div>
            <div className="text-center p-4 bg-orange-50 rounded-lg">
              <div className="text-3xl font-bold text-orange-600 mb-2">6</div>
              <div className="text-gray-600">Electives</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseReviewsPage;