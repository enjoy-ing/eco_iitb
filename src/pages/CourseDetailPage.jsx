// src/pages/CourseDetailPage.jsx
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, User, Calendar, BookOpen, Target, Lightbulb, FileText, Star, Clock } from 'lucide-react';
import { coursesData } from '../data/coursesData';

const CourseDetailPage = () => {
  const { courseCode } = useParams();
  const navigate = useNavigate();

  const course = coursesData[courseCode?.toLowerCase()];

  if (!course) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-white rounded-lg shadow-lg p-12 text-center">
            <div className="mb-8">
              <BookOpen className="mx-auto text-gray-400 mb-4" size={64} />
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Course Review Not Available</h1>
              <p className="text-xl text-gray-600 mb-8">
                The course review for <span className="font-semibold text-blue-600">{courseCode?.toUpperCase()}</span> is not available yet.
              </p>
            </div>
            <div className="bg-blue-50 rounded-lg p-6 mb-8">
              <h3 className="text-lg font-semibold text-blue-900 mb-2">Want to contribute?</h3>
              <p className="text-blue-700">
                If you've taken this course, consider sharing your review to help fellow students make informed decisions.
              </p>
            </div>
            <button
              onClick={() => navigate('/reviews')}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300 inline-flex items-center shadow-lg"
            >
              <ArrowLeft className="mr-2" size={20} />
              Back to Course Reviews
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4">
        {/* Back Button */}
        <button
          onClick={() => navigate('/reviews')}
          className="mb-8 bg-white hover:bg-gray-50 text-gray-700 px-4 py-2 rounded-lg font-medium transition-colors duration-300 inline-flex items-center shadow-md hover:shadow-lg"
        >
          <ArrowLeft className="mr-2" size={20} />
          Back to Course Reviews
        </button>

        {/* Course Header */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg p-8 mb-8 shadow-xl">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
            <div className="flex-1">
              <h1 className="text-4xl font-bold mb-2">{course.code}</h1>
              <h2 className="text-2xl font-light mb-4">{course.name}</h2>
              <div className="flex flex-wrap items-center gap-4 text-blue-100">
                <span className="flex items-center">
                  <User className="mr-2" size={18} />
                  {course.instructor}
                </span>
                <span className="flex items-center">
                  <Calendar className="mr-2" size={18} />
                  {course.semester}
                </span>
                <span className="flex items-center">
                  <BookOpen className="mr-2" size={18} />
                  {course.credits} Credits
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Review Content */}
        <div className="space-y-8">
          {Array.isArray(course.reviews) && course.reviews.length > 0 ? (
            course.reviews.map((r, idx) => (
              <div
                key={idx}
                className="bg-white rounded-lg shadow-lg p-6 mb-8 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="mb-2 text-blue-900 font-semibold">
                  {r.instructor && <span>Instructor: {r.instructor} | </span>}
                  {r.semester && <span>Semester: {r.semester}</span>}
                </div>
                <div className="bg-blue-50 rounded-lg p-4">
                  <pre
                    className="whitespace-pre-wrap text-gray-700 leading-relaxed font-sans"
                    dangerouslySetInnerHTML={{ __html: r.review }}
                  />
                </div>
              </div>
            ))
          ) : (
            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <Target className="mr-3 text-blue-600" size={24} />
                Review
              </h3>
              <div className="bg-blue-50 rounded-lg p-4">
                <pre
                  className="whitespace-pre-wrap text-gray-700 leading-relaxed font-sans"
                  dangerouslySetInnerHTML={{ __html: course.review }}
                />
              </div>
            </div>
          )}

          {/* Evaluation */}
          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <FileText className="mr-3 text-red-600" size={24} />
              Grading Stats
            </h3>
            <div className="bg-red-50 rounded-lg p-4">
              <p className="text-gray-700 leading-relaxed">
                To check grading stats follow this link (
                <a
                  href="https://docs.google.com/spreadsheets/d/1-sTy5vXnch5o4hWq5nAik9tRUA-p4gbayiHt5Va-tiU/edit?gid=0#gid=0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline hover:text-blue-800"
                >
                  use LDAP
                </a>
                ).
              </p>
            </div>
          </div>


          {/* Reviewer Credit */}
          <div className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300">
            <div className="bg-gradient-to-r from-blue-100 to-green-100 rounded-lg p-4">
              <p className="text-gray-600 italic text-lg">
                We thank <span className="font-semibold text-blue-600">{course.reviewer}</span> for giving his review of this course.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetailPage;