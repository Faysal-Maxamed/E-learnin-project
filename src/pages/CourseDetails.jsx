// src/pages/CourseDetails.jsx
import React from 'react';
import { useParams, Link } from 'react-router-dom';

const lessonsData = {
  1: [
    { id: 1, title: 'Lesson 1', videoUrl: 'https://www.example.com/lesson1.mp4', description: 'Description for Lesson 1' },
    { id: 2, title: 'Lesson 2', videoUrl: 'https://www.example.com/lesson2.mp4', description: 'Description for Lesson 2' },
    { id: 3, title: 'Lesson 3', videoUrl: 'https://www.example.com/lesson3.mp4', description: 'Description for Lesson 3' }
  ],
  2: [
    { id: 1, title: 'Lesson A', videoUrl: 'https://www.example.com/lessonA.mp4', description: 'Description for Lesson A' },
    { id: 2, title: 'Lesson B', videoUrl: 'https://www.example.com/lessonB.mp4', description: 'Description for Lesson B' },
    { id: 3, title: 'Lesson C', videoUrl: 'https://www.example.com/lessonC.mp4', description: 'Description for Lesson C' }
  ]
  // Add more lessons as needed
};

const CourseDetails = () => {
  const { courseId } = useParams();
  const lessons = lessonsData[courseId];

  return (
    <div className="container mx-auto p-4 my-8">
      <h2 className="text-3xl font-bold mb-8">Course {courseId} Lessons</h2>
      <div className="space-y-4">
        {lessons.map((lesson, index) => (
          <Link
            key={index}
            to={`/courses/${courseId}/lesson/${lesson.id}`}
            className="block p-4 bg-yellow-200 rounded-lg hover:bg-yellow-300 hover:shadow-lg transition"
          >
            {lesson.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CourseDetails;
