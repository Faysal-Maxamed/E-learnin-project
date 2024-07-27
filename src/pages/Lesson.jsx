import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { FaPlayCircle, FaHome } from 'react-icons/fa';

const lessonsData = {
  1: [
    { id: 1, title: 'Lesson 1', description: 'Description for Lesson 1 Arabic', videoUrl: 'https://www.youtube.com/watch?list=PLA2sIXNgNKf5o-qzU7yrC7USJhq__1iDj&v=jndoZU9fpPc&feature=youtu.be' },
    { id: 2, title: 'Lesson 2', description: 'Description for Lesson 2 Arabic', videoUrl: 'https://www.youtube.com/watch?list=PLA2sIXNgNKf5o-qzU7yrC7USJhq__1iDj&v=dDYBPCUgOFU&feature=youtu.be' },
    { id: 3, title: 'Lesson 3', description: 'Description for Lesson 3 Arabic', videoUrl: 'https://www.youtube.com/watch?list=PLA2sIXNgNKf5o-qzU7yrC7USJhq__1iDj&v=RSbS8APrfwc&feature=youtu.be' },
  ],
  2: [
    { id: 1, title: 'Lesson 1', description: 'Description for Lesson 1 English', videoUrl: 'https://www.youtube.com/watch?v=VIDEO_ID3' },
    { id: 2, title: 'Lesson 2', description: 'Description for Lesson 2 English', videoUrl: 'https://www.youtube.com/watch?v=VIDEO_ID4' },
    { id: 3, title: 'Lesson 3', description: 'Description for Lesson 3 English', videoUrl: 'https://www.example.com/video3.mp4' },
  ],
  // Add similar structure for other courses if needed
};

const convertToEmbedURL = (url) => {
  const regex = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
  const match = url.match(regex);
  if (match && match[1]) {
    const videoId = match[1];
    const urlObj = new URL(url);
    const playlist = urlObj.searchParams.get('list');
    return playlist ? `https://www.youtube.com/embed/${videoId}?list=${playlist}` : `https://www.youtube.com/embed/${videoId}`;
  }
  return url;
};

const Lesson = () => {
  const { courseId, lessonId } = useParams();
  const [lessons, setLessons] = useState([]);
  const [lesson, setLesson] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isVideoVisible, setIsVideoVisible] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchLessons = async () => {
      try {
        const data = lessonsData[courseId];
        setLessons(data);
        const currentLesson = data.find((lesson) => lesson.id === parseInt(lessonId));
        setLesson(currentLesson);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchLessons();
  }, [courseId, lessonId]);

  const handleVideoClick = () => {
    setIsVideoVisible(true);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

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
          <FaHome />
        </button>
        {isSidebarOpen && (
          <div>
            <h4 className="text-xl font-semibold mb-4">Other Lessons in this Course:</h4>
            <div className="space-y-4">
              {lessons.map((lesson) => (
                <Link
                  key={lesson.id}
                  to={`/courses/${courseId}/lesson/${lesson.id}`}
                  className="flex items-center justify-center p-2 bg-blue-300 rounded-lg hover:bg-blue-500 hover:shadow-lg transition"
                >
                  <FaPlayCircle className="text-gray-800 w-8 mr-4 text-4xl" />
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
          {isVideoVisible ? (
            lesson.videoUrl.includes('youtube.com') ? (
              <iframe
                width="100%"
                height="480"
                src={convertToEmbedURL(lesson.videoUrl)}
                title={lesson.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="rounded-lg mb-4"
              ></iframe>
            ) : (
              <video key={lesson.id} controls className="w-full h-auto">
                <source src={lesson.videoUrl} type="video/mp4" />
              </video>
            )
          ) : (
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={handleVideoClick}
            >
              Watch Lesson
            </button>
          )}
        </div>
        <p className="mb-4">{lesson.description}</p>
      </div>
    </div>
  );
};

export default Lesson;
