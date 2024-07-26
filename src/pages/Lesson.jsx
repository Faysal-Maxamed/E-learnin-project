import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import defaultVideo from '../video/this.mp4'; // Ensure the correct path to your default video

const lessonsData = {
  1: [
    { id: 1, title: 'Arabic Lesson 1', videoUrl: '', description: 'Description for Arabic Lesson 1' },
    { id: 2, title: 'Arabic Lesson 2', videoUrl: '', description: 'Description for Arabic Lesson 2' },
    { id: 3, title: 'Arabic Lesson 3', videoUrl: '', description: 'Description for Arabic Lesson 3' }
  ],
  2: [
    { id: 1, title: 'English Lesson 1', videoUrl: '', description: 'Description for English Lesson 1' },
    { id: 2, title: 'English Lesson 2', videoUrl: '', description: 'Description for English Lesson 2' },
    { id: 3, title: 'English Lesson 3', videoUrl: '', description: 'Description for English Lesson 3' }
  ],
  3: [
    { id: 1, title: 'Physics Lesson 1', videoUrl: '', description: 'Description for Physics Lesson 1' },
    { id: 2, title: 'Physics Lesson 2', videoUrl: '', description: 'Description for Physics Lesson 2' },
    { id: 3, title: 'Physics Lesson 3', videoUrl: '', description: 'Description for Physics Lesson 3' }
  ],
  4: [
    { id: 1, title: 'Chemistry Lesson 1', videoUrl: '', description: 'Description for Chemistry Lesson 1' },
    { id: 2, title: 'Chemistry Lesson 2', videoUrl: '', description: 'Description for Chemistry Lesson 2' },
    { id: 3, title: 'Chemistry Lesson 3', videoUrl: '', description: 'Description for Chemistry Lesson 3' }
  ],
  5: [
    { id: 1, title: 'History Lesson 1', videoUrl: '', description: 'Description for History Lesson 1' },
    { id: 2, title: 'History Lesson 2', videoUrl: '', description: 'Description for History Lesson 2' },
    { id: 3, title: 'History Lesson 3', videoUrl: '', description: 'Description for History Lesson 3' }
  ],
  6: [
    { id: 1, title: 'Biology Lesson 1', videoUrl: '', description: 'Description for Biology Lesson 1' },
    { id: 2, title: 'Biology Lesson 2', videoUrl: '', description: 'Description for Biology Lesson 2' },
    { id: 3, title: 'Biology Lesson 3', videoUrl: '', description: 'Description for Biology Lesson 3' }
  ],
  7: [
    { id: 1, title: 'Math Lesson 1', videoUrl: '', description: 'Description for Math Lesson 1' },
    { id: 2, title: 'Math Lesson 2', videoUrl: '', description: 'Description for Math Lesson 2' },
    { id: 3, title: 'Math Lesson 3', videoUrl: '', description: 'Description for Math Lesson 3' }
  ],
  
};

const Lesson = () => {
  const { courseId, lessonId } = useParams();
  const lessons = lessonsData[courseId];
  const lesson = lessons.find(lesson => lesson.id === parseInt(lessonId));

  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  if (!lesson) {
    return <div>Lesson not found</div>;
  }

  return (
    <div className="container mx-auto p-4 my-8 flex">
      {/* Sidebar */}
      <div className={`${isSidebarOpen ? 'w-1/3' : 'w-12'} transition-width duration-300 bg-gray-100 p-4`}>
        <button
          className="text-gray-600 hover:text-gray-900 mb-4"
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        >
          <i className={`fas fa-${isSidebarOpen ? 'chevron-left' : 'chevron-right'}`}></i>
        </button>
        {isSidebarOpen && (
          <div>
            <h4 className="text-xl font-semibold mb-4">Other Lessons in this Course:</h4>
            <div className="space-y-4">
              {lessons.map((lesson) => (
                <Link
                  key={lesson.id}
                  to={`/courses/${courseId}/lesson/${lesson.id}`}
                  className="block text-center p-2 bg-blue-200 rounded-lg hover:bg-blue-300 hover:shadow-lg transition"
                >
                  {lesson.title}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
      {/* Main content */}
      <div className={`${isSidebarOpen ? 'w-2/3' : 'w-full'} transition-width duration-300 pl-4`}>
        <h2 className="text-3xl font-bold mb-2">{`Course ${courseId}`}</h2>
        <h3 className="text-2xl font-semibold mb-4">{lesson.title}</h3>
        <div className="bg-gray-200 rounded-lg overflow-hidden mb-4">
          <video key={lesson.id} controls className="w-full h-auto">
            <source src={lesson.videoUrl || defaultVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <p className="mb-4">{lesson.description}</p>
      </div>
    </div>
  );
};

export default Lesson;
