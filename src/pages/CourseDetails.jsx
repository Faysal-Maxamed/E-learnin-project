import React from 'react';
import { useParams, Link } from 'react-router-dom';

const lessonsData = {
  1: [
    { id: 1, title: 'Lesson 1', videoUrl: 'https://youtu.be/jndoZU9fpPc?list=PLA2sIXNgNKf5o-qzU7yrC7USJhq__1iDj', description: 'Description for Lesson 1' },
    { id: 2, title: 'Lesson 2', videoUrl: 'https://www.youtube.com/watch?list=PLA2sIXNgNKf5o-qzU7yrC7USJhq__1iDj&v=jndoZU9fpPc&feature=youtu.be', description: 'Description for Lesson 2' },
    { id: 3, title: 'Lesson 3', videoUrl: 'https://www.youtube.com/watch?list=PLA2sIXNgNKf5o-qzU7yrC7USJhq__1iDj&v=jndoZU9fpPc&feature=youtu.be', description: 'Description for Lesson 3' },
  ],
  2: [
    { id: 1, title: 'Lesson A', videoUrl: 'https://www.youtube.com/watch?list=PLA2sIXNgNKf5o-qzU7yrC7USJhq__1iDj&v=jndoZU9fpPc&feature=youtu.be', description: 'Description for Lesson A' },
    { id: 2, title: 'Lesson B', videoUrl: 'https://www.youtube.com/watch?list=PLA2sIXNgNKf5o-qzU7yrC7USJhq__1iDj&v=jndoZU9fpPc&feature=youtu.be', description: 'Description for Lesson B' },
    { id: 3, title: 'Lesson C', videoUrl: 'https://www.youtube.com/watch?list=PLA2sIXNgNKf5o-qzU7yrC7USJhq__1iDj&v=jndoZU9fpPc&feature=youtu.be', description: 'Description for Lesson C' },
  ]
  // Add more lessons as needed
};

const CourseDetails = () => {
  const { courseId } = useParams();
  const lessons = lessonsData[courseId];

  return (
    <div className="container mx-auto p-4 my-8">
      <h2 className="text-3xl font-bold mb-8">Course {courseId}</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {lessons.map((lesson) => (
          <Link key={lesson.id} to={`/courses/${courseId}/lesson/${lesson.id}`} className="bg-white p-4 rounded-lg shadow hover:bg-gray-100">
            <h3 className="text-xl font-semibold mb-2">{lesson.title}</h3>
            <p className="text-gray-600">{lesson.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CourseDetails;
