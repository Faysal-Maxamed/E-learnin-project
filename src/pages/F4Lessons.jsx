import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom'; // Import useNavigate
import { FaPlayCircle, FaBars } from 'react-icons/fa';

const lessonsData = {
  1: [
    { id: 1, title: 'Lesson 1', description: 'Description for Lesson 1 Arabic', videoUrl: 'https://www.youtube.com/watch?v=MFCwJB3eW6o&list=PLkl5177d3TqNQUcGDGkbugJpYJ7EENNSA&index=1&pp=iAQB' },
    { id: 2, title: 'Lesson 2', description: 'Description for Lesson 2 Arabic', videoUrl: 'https://www.youtube.com/watch?v=DoPx7A4DDC4&list=PLkl5177d3TqNQUcGDGkbugJpYJ7EENNSA&index=2&pp=iAQB' },
    { id: 3, title: 'Lesson 3', description: 'Description for Lesson 3 Arabic', videoUrl: 'https://www.youtube.com/watch?v=I7yyQKLEjqI&list=PLkl5177d3TqNQUcGDGkbugJpYJ7EENNSA&index=3&pp=iAQB' },
    { id: 4, title: 'Lesson 4', description: 'Description for Lesson 4 Arabic', videoUrl: 'https://www.youtube.com/watch?v=mklb3PkaLp4&list=PLkl5177d3TqNQUcGDGkbugJpYJ7EENNSA&index=4&pp=iAQB' },
    { id: 5, title: 'Lesson 5', description: 'Description for Lesson 5 Arabic', videoUrl: 'https://www.youtube.com/watch?v=AmsECoGq8kQ&list=PLkl5177d3TqNQUcGDGkbugJpYJ7EENNSA&index=5&pp=iAQB' },
    { id: 6, title: 'Lesson 6', description: 'Description for Lesson 6 Arabic', videoUrl: 'https://www.youtube.com/watch?v=s8GdWfK2MdY&list=PLkl5177d3TqNQUcGDGkbugJpYJ7EENNSA&index=6&pp=iAQB' },
  ],
  2: [
    { id: 1, title: 'Lesson 1', description: 'Description for Lesson 1 English', videoUrl: 'https://www.youtube.com/watch?v=9qrXT0faoOk&list=PLJMSYg_Bu6JeYfJa5z3BBztC_9Pr8Njns&index=3&pp=iAQB' },
    { id: 2, title: 'Lesson 2', description: 'Description for Lesson 2 English', videoUrl: 'https://www.youtube.com/watch?v=xQxF278dhYc&list=PLJMSYg_Bu6JeYfJa5z3BBztC_9Pr8Njns&index=1&pp=iAQB' },
    { id: 3, title: 'Lesson 3', description: 'Description for Lesson 3 English', videoUrl: 'https://www.youtube.com/watch?v=XFT9mBWSBxY&list=PLJMSYg_Bu6JeYfJa5z3BBztC_9Pr8Njns&index=2&pp=iAQB' },
    { id: 4, title: 'Lesson 4', description: 'Description for Lesson 4 English', videoUrl: 'https://www.youtube.com/watch?v=26uT3fWGQoA&list=PLJMSYg_Bu6JeYfJa5z3BBztC_9Pr8Njns&index=4&pp=iAQB' },
    { id: 5, title: 'Lesson 5', description: 'Description for Lesson 5 English', videoUrl: 'https://www.youtube.com/watch?v=-j3fc1rSiWU&list=PLJMSYg_Bu6JeYfJa5z3BBztC_9Pr8Njns&index=5&pp=iAQB' },
    { id: 6, title: 'Lesson 6', description: 'Description for Lesson 6 English', videoUrl: 'https://www.youtube.com/watch?v=AjIZTrEZCSo&list=PLJMSYg_Bu6JeYfJa5z3BBztC_9Pr8Njns&index=6&pp=iAQB' },
    { id: 7, title: 'Lesson 7', description: 'Description for Lesson 7 English', videoUrl: 'https://www.youtube.com/watch?v=DIsE1bv4rH4&list=PLJMSYg_Bu6JeYfJa5z3BBztC_9Pr8Njns&index=7&pp=iAQB' },
    { id: 8, title: 'Lesson 8', description: 'Description for Lesson 8 English', videoUrl: 'https://www.youtube.com/watch?v=-g4BnuEt5sQ&list=PLMgOoQLOzMtRW6_KJPEG7877EkIyVHyNJ&index=1&pp=iAQB' },
    { id: 9, title: 'Lesson 9', description: 'Description for Lesson 9 English', videoUrl: 'https://www.youtube.com/watch?v=osHtfN_brmg&list=PLMgOoQLOzMtRW6_KJPEG7877EkIyVHyNJ&index=2&pp=iAQB' },
  ],
  3: [
    { id: 1, title: 'Lesson 1', description: 'Description for Lesson 1 Mathmatics', videoUrl: 'https://www.youtube.com/watch?v=wK9zwIE4njI&list=PLG4SdbUov5hSBaV6gI0QVp_Qg9uA3QCWK&index=1&pp=iAQB' },
    { id: 2, title: 'Lesson 2', description: 'Description for Lesson 2 Mathmatics', videoUrl: 'https://www.youtube.com/watch?v=aowzGpPGbBk&list=PLG4SdbUov5hSBaV6gI0QVp_Qg9uA3QCWK&index=2&pp=iAQB' },
    { id: 3, title: 'Lesson 3', description: 'Description for Lesson 3 Mathmatics', videoUrl: 'https://www.youtube.com/watch?v=yNz3r9Dcevg&list=PLG4SdbUov5hSBaV6gI0QVp_Qg9uA3QCWK&index=3&pp=iAQB' },
    { id: 4, title: 'Lesson 4', description: 'Description for Lesson 4 Mathmatics', videoUrl: 'https://www.youtube.com/watch?v=7FoSqr2GUXM&list=PLG4SdbUov5hSBaV6gI0QVp_Qg9uA3QCWK&index=4&pp=iAQB' },
    { id: 5, title: 'Lesson 5', description: 'Description for Lesson 5 Mathmatics', videoUrl: 'https://www.youtube.com/watch?v=wcCHhAJdYPA&list=PLG4SdbUov5hSBaV6gI0QVp_Qg9uA3QCWK&index=5&pp=iAQB' },
    { id: 6, title: 'Lesson 6', description: 'Description for Lesson 6 Mathmatics', videoUrl: 'https://www.youtube.com/watch?v=oV9SPuRYIJY&list=PLG4SdbUov5hSBaV6gI0QVp_Qg9uA3QCWK&index=6&pp=iAQB' },
    
    { id: 7, title: 'Lesson 7', description: 'Description for Lesson 7 Mathmatics', videoUrl: 'https://www.youtube.com/watch?v=zpuetkOg0P4&list=PLG4SdbUov5hSBaV6gI0QVp_Qg9uA3QCWK&index=7&pp=iAQB' },
    { id: 8, title: 'Lesson 8', description: 'Description for Lesson 8 Mathmatics', videoUrl: 'https://www.youtube.com/watch?v=sf9L07ioZk0&list=PLG4SdbUov5hSBaV6gI0QVp_Qg9uA3QCWK&index=8&pp=iAQB' },
    { id: 9, title: 'Lesson 9', description: 'Description for Lesson 9 Mathmatics', videoUrl: 'https://www.youtube.com/watch?v=HnIr_8b4lGg&list=PLG4SdbUov5hSBaV6gI0QVp_Qg9uA3QCWK&index=9&pp=iAQB' },
    { id: 10, title: 'Lesson 10', description: 'Description for Lesson 10 Mathmatics', videoUrl: 'https://www.youtube.com/watch?v=7VRu5YSSOxM&list=PLG4SdbUov5hSBaV6gI0QVp_Qg9uA3QCWK&index=10&pp=iAQB' },
  ],
  4: [
    { id: 1, title: 'Lesson 1', description: 'Description for Lesson 1 Physics', videoUrl: 'https://www.youtube.com/watch?v=Ge6UJKZzqNs&list=PLAeLcv9KV7-b9p9UOr1qWrXD5ets69LGe&index=2&pp=iAQB' },
    { id: 2, title: 'Lesson 2', description: 'Description for Lesson 2 Physics', videoUrl: 'https://www.youtube.com/watch?v=2jWYP9QcO7Y&list=PLAeLcv9KV7-b9p9UOr1qWrXD5ets69LGe&index=3&pp=iAQB' },
    { id: 3, title: 'Lesson 3', description: 'Description for Lesson 3 Physics', videoUrl: 'https://www.youtube.com/watch?v=u9d5NnhHn2Q&list=PLAeLcv9KV7-b9p9UOr1qWrXD5ets69LGe&index=4&pp=iAQB' },
    { id: 4, title: 'Lesson 4', description: 'Description for Lesson 4 Physics', videoUrl: 'https://www.youtube.com/watch?v=PVYo1AYOH3I&list=PLAeLcv9KV7-b9p9UOr1qWrXD5ets69LGe&index=1&pp=iAQB' },
    { id: 5, title: 'Lesson 5', description: 'Description for Lesson 5 Physics', videoUrl: 'https://www.youtube.com/watch?v=nbQDfabku-w&list=PLAeLcv9KV7-b9p9UOr1qWrXD5ets69LGe&index=5&pp=iAQB' },
    { id: 6, title: 'Lesson 6', description: 'Description for Lesson 6 Physics', videoUrl: 'https://www.youtube.com/watch?v=4MRrUg3N074&list=PLAeLcv9KV7-b9p9UOr1qWrXD5ets69LGe&index=6&pp=iAQB' },
    
    { id: 7, title: 'Lesson 7', description: 'Description for Lesson 7 Physics', videoUrl: 'https://www.youtube.com/watch?v=1_5Hs9d2jNw&list=PLAeLcv9KV7-b9p9UOr1qWrXD5ets69LGe&index=7&pp=iAQB' },
    { id: 8, title: 'Lesson 8', description: 'Description for Lesson 8 Physics', videoUrl: 'https://www.youtube.com/watch?v=V6i97NBYk6w&list=PLAeLcv9KV7-b9p9UOr1qWrXD5ets69LGe&index=8&pp=iAQB' },
    { id: 9, title: 'Lesson 9', description: 'Description for Lesson 9 Physics', videoUrl: 'https://www.youtube.com/watch?v=7m9cU7Y4l2E&list=PLAeLcv9KV7-b9p9UOr1qWrXD5ets69LGe&index=9&pp=iAQB' },
    { id: 10, title: 'Lesson 10', description: 'Description for Lesson 10 Physics', videoUrl: 'https://www.youtube.com/watch?v=IBKI5fmoacg&list=PLAeLcv9KV7-b9p9UOr1qWrXD5ets69LGe&index=10&pp=iAQB' },
    { id: 11, title: 'Lesson 11', description: 'Description for Lesson 11 Physics', videoUrl: 'https://www.youtube.com/watch?v=zYY3FMgUtp8&list=PLAeLcv9KV7-b9p9UOr1qWrXD5ets69LGe&index=11&pp=iAQB' },

  ],
  5: [
    { id: 1, title: 'Lesson 1', description: 'Description for Lesson 1 Chemistry', videoUrl: 'https://www.youtube.com/watch?v=VSZ0UWpySHw&list=PLNAs62j0YnXA9kp1dpdQe7ufhKTLsZU6P&index=1&pp=iAQB' },
    { id: 2, title: 'Lesson 2', description: 'Description for Lesson 2  Chemistry', videoUrl: 'https://www.youtube.com/watch?v=h11qmRg2cdE&list=PLNAs62j0YnXA9kp1dpdQe7ufhKTLsZU6P&index=2&pp=iAQB' },
    { id: 3, title: 'Lesson 3', description: 'Description for Lesson 3  Chemistry', videoUrl: 'https://www.youtube.com/watch?v=wkJV7gWAr_I&list=PLNAs62j0YnXA9kp1dpdQe7ufhKTLsZU6P&index=3&pp=iAQB' },
    { id: 4, title: 'Lesson 4', description: 'Description for Lesson 4  Chemistry', videoUrl: 'https://www.youtube.com/watch?v=mxa0JB17fhs&list=PLNAs62j0YnXA9kp1dpdQe7ufhKTLsZU6P&index=4&pp=iAQB' },
    { id: 5, title: 'Lesson 5', description: 'Description for Lesson 5  Chemistry', videoUrl: 'https://www.youtube.com/watch?v=P1OJT9WpNvY&list=PLNAs62j0YnXA9kp1dpdQe7ufhKTLsZU6P&index=5&pp=iAQB' },
    { id: 6, title: 'Lesson 6', description: 'Description for Lesson 6  Chemistry', videoUrl: 'https://www.youtube.com/watch?v=VA7c2Jw3Dag&list=PLNAs62j0YnXA9kp1dpdQe7ufhKTLsZU6P&index=6&pp=iAQB' },
    
    { id: 7, title: 'Lesson 7', description: 'Description for Lesson 7  Chemistry', videoUrl: 'https://www.youtube.com/watch?v=mxa0JB17fhs&list=PLNAs62j0YnXA9kp1dpdQe7ufhKTLsZU6P&index=4&pp=iAQB' },
    { id: 8, title: 'Lesson 8', description: 'Description for Lesson 8  Chemistry', videoUrl: 'https://www.youtube.com/watch?v=q1QfT7OwMTE&list=PLNAs62j0YnXA9kp1dpdQe7ufhKTLsZU6P&index=7&pp=iAQB' },
    { id: 9, title: 'Lesson 9', description: 'Description for Lesson 9  Chemistry', videoUrl: 'https://www.youtube.com/watch?v=C_eBCQ289gA&list=PLNAs62j0YnXA9kp1dpdQe7ufhKTLsZU6P&index=8&pp=iAQB' },
    { id: 10, title: 'Lesson 10', description: 'Description for Lesson 10  Chemistry', videoUrl: 'https://www.youtube.com/watch?v=0z7edLdMQGU&list=PLNAs62j0YnXA9kp1dpdQe7ufhKTLsZU6P&index=9&pp=iAQB' },
    { id: 11, title: 'Lesson 11', description: 'Description for Lesson 11  Chemistry', videoUrl: 'https://www.youtube.com/watch?v=J4tCIGHmaZ0&list=PLNAs62j0YnXA9kp1dpdQe7ufhKTLsZU6P&index=10&pp=iAQB' },
  ],
  6: [
    { id: 1, title: 'Lesson 1', description: 'Description for Lesson 1 History', videoUrl: 'https://www.youtube.com/watch?v=NutXpgl5IIs&list=PLOofE1KOTUEIpQ7gNA_wvCFttrBzBmuXl&index=1&pp=iAQB' },
    { id: 2, title: 'Lesson 2', description: 'Description for Lesson 2 History', videoUrl: 'https://www.youtube.com/watch?v=aqyl_sTZgls&list=PLOofE1KOTUEIpQ7gNA_wvCFttrBzBmuXl&index=2&pp=iAQB' },
    { id: 3, title: 'Lesson 3', description: 'Description for Lesson 3 History', videoUrl: 'https://www.youtube.com/watch?v=oXX-4djwBbI&list=PLOofE1KOTUEIpQ7gNA_wvCFttrBzBmuXl&index=3&pp=iAQB' },
    { id: 4, title: 'Lesson 4', description: 'Description for Lesson 4 History', videoUrl: 'https://www.youtube.com/watch?v=xzaciIEOunk&list=PLOofE1KOTUEIpQ7gNA_wvCFttrBzBmuXl&index=4&pp=iAQB' },
    { id: 5, title: 'Lesson 5', description: 'Description for Lesson 5 History', videoUrl: 'https://www.youtube.com/watch?v=kEd1Z-ZmWl8&list=PLOofE1KOTUEIpQ7gNA_wvCFttrBzBmuXl&index=5&pp=iAQB' },
    { id: 6, title: 'Lesson 6', description: 'Description for Lesson 6 History', videoUrl: 'https://www.youtube.com/watch?v=s8RsgrO3oG0&list=PLOofE1KOTUEIpQ7gNA_wvCFttrBzBmuXl&index=6&pp=iAQB' },
    { id: 7, title: 'Lesson 7', description: 'Description for Lesson 7 History', videoUrl: 'https://www.youtube.com/watch?v=cp5Q-VXZWZI&list=PLOofE1KOTUEIpQ7gNA_wvCFttrBzBmuXl&index=7&pp=iAQB' },
    { id: 8, title: 'Lesson 8', description: 'Description for Lesson 8 History', videoUrl: 'https://www.youtube.com/watch?v=HkqRY9y_UUs&list=PLOofE1KOTUEIpQ7gNA_wvCFttrBzBmuXl&index=8&pp=iAQB' },
  ],
  7: [
    { id: 1, title: 'Lesson 1', description: 'Description for Lesson 1  Biology', videoUrl: 'https://www.youtube.com/watch?v=c-kBPtkp5_Q&list=PLHtijejfff9dWSWpd1wRiCUZvA97vq14I&index=1&pp=iAQB' },
    { id: 2, title: 'Lesson 2', description: 'Description for Lesson 2  Biology', videoUrl: 'https://www.youtube.com/watch?v=JofjeV6P8LE&list=PLHtijejfff9dWSWpd1wRiCUZvA97vq14I&index=2&pp=iAQB' },
    { id: 3, title: 'Lesson 3', description: 'Description for Lesson 3  Biology', videoUrl: 'https://www.youtube.com/watch?v=BxegIpmIKc4&list=PLHtijejfff9dWSWpd1wRiCUZvA97vq14I&index=3&pp=iAQB' },
    { id: 4, title: 'Lesson 4', description: 'Description for Lesson 4  Biology', videoUrl: 'https://www.youtube.com/watch?v=d1lF0jDOB_o&list=PLHtijejfff9dWSWpd1wRiCUZvA97vq14I&index=4&pp=iAQB' },
    { id: 5, title: 'Lesson 5', description: 'Description for Lesson 5  Biology', videoUrl: 'https://www.youtube.com/watch?v=g9PjYl696Zc&list=PLHtijejfff9dWSWpd1wRiCUZvA97vq14I&index=5&pp=iAQB' },
    { id: 6, title: 'Lesson 6', description: 'Description for Lesson 6  Biology', videoUrl: 'https://www.youtube.com/watch?v=DkMYNuY2nyg&list=PLHtijejfff9dWSWpd1wRiCUZvA97vq14I&index=6&pp=iAQB' },
    
    { id: 7, title: 'Lesson 7', description: 'Description for Lesson 7  Biology', videoUrl: 'https://www.youtube.com/watch?v=Hxd8MqqPip8&list=PLHtijejfff9dWSWpd1wRiCUZvA97vq14I&index=7&pp=iAQB' },
    { id: 8, title: 'Lesson 8', description: 'Description for Lesson 8  Biology', videoUrl: 'https://www.youtube.com/watch?v=ugl35BfFdTE&list=PLHtijejfff9dWSWpd1wRiCUZvA97vq14I&index=8&pp=iAQB' },
    { id: 9, title: 'Lesson 9', description: 'Description for Lesson 9  Biology', videoUrl: 'https://www.youtube.com/watch?v=8QpFpOaMFdg&list=PLHtijejfff9dWSWpd1wRiCUZvA97vq14I&index=9&pp=iAQB' },
    { id: 10, title: 'Lesson 10', description: 'Description for Lesson 10  Biology', videoUrl: 'https://www.youtube.com/watch?v=0fYZH-9sQwY&list=PLHtijejfff9dWSWpd1wRiCUZvA97vq14I&index=10&pp=iAQB' },
    { id: 11, title: 'Lesson 11', description: 'Description for Lesson 11  Biology', videoUrl: 'https://www.youtube.com/watch?v=l5y3j7Y-mZM&list=PLHtijejfff9dWSWpd1wRiCUZvA97vq14I&index=11&pp=iAQB' },
  ],
  8: [
    { id: 1, title: 'Lesson 1', description: 'Description for Lesson 1 Technology', videoUrl: 'https://www.youtube.com/watch?v=E5e3JJJpEJ4&list=PLb6qPthBWy0cyfyyBI_0oqES15lE4RaCA&index=1&pp=iAQB' },
    { id: 2, title: 'Lesson 2', description: 'Description for Lesson 2 Technology', videoUrl: 'https://www.youtube.com/watch?v=JOeBkGMjTVs&list=PLb6qPthBWy0cyfyyBI_0oqES15lE4RaCA&index=2&pp=iAQB' },
    { id: 3, title: 'Lesson 3', description: 'Description for Lesson 3 Technology', videoUrl: 'https://www.youtube.com/watch?v=6tL72HE7czo&list=PLb6qPthBWy0cyfyyBI_0oqES15lE4RaCA&index=3&pp=iAQB' },
    { id: 4, title: 'Lesson 4', description: 'Description for Lesson 4 Technology', videoUrl: 'https://www.youtube.com/watch?v=FnC1ARFzuRo&list=PLb6qPthBWy0cyfyyBI_0oqES15lE4RaCA&index=4&pp=iAQB' },
    { id: 5, title: 'Lesson 5', description: 'Description for Lesson 5 Technology', videoUrl: 'https://www.youtube.com/watch?v=rEIn7X96SUM&list=PLb6qPthBWy0cyfyyBI_0oqES15lE4RaCA&index=5&pp=iAQB' },
    { id: 6, title: 'Lesson 6', description: 'Description for Lesson 6 Technology', videoUrl: 'https://www.youtube.com/watch?v=OOpyO7xglX8&list=PLb6qPthBWy0cyfyyBI_0oqES15lE4RaCA&index=6&pp=iAQB' },
    { id: 7, title: 'Lesson 7', description: 'Description for Lesson 7 Technology', videoUrl: 'https://www.youtube.com/watch?v=9w8COQgztVI&list=PLb6qPthBWy0cyfyyBI_0oqES15lE4RaCA&index=7&pp=iAQB' },
    { id: 8, title: 'Lesson 8', description: 'Description for Lesson 8 Technology', videoUrl: 'https://www.youtube.com/watch?v=xT1j7-bLWsU&list=PLb6qPthBWy0cyfyyBI_0oqES15lE4RaCA&index=8&pp=iAQB' },
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

const F4Lessons = () => {
  const { courseId } = useParams();
  const lessons = lessonsData[courseId] || [];
  const [selectedLesson, setSelectedLesson] = useState(null);
  const [mobileSidebarVisible, setMobileSidebarVisible] = useState(false);
  const navigate = useNavigate(); // Create navigate function

  const handleLessonClick = (lesson) => {
    setSelectedLesson(lesson);
  };
  const handleGoBack = () => {
    navigate('/form4'); // Navigate to Form2 page
  };

  const toggleMobileSidebar = () => {
    setMobileSidebarVisible(!mobileSidebarVisible);
  };

  return (
    <div className="container mx-auto p-4 my-8">
      {/* Mobile Menu Bar Icon */}
      <div className="md:hidden flex justify-end mb-4">
        <button onClick={toggleMobileSidebar} className="text-gray-600 focus:outline-none">
          <FaBars size={24} />
        </button>
      </div>

      <div className="flex flex-col md:flex-row">
        {/* Sidebar for Desktop */}
        <div className={`md:w-1/4 bg-gray-200 p-4 rounded-lg ${mobileSidebarVisible ? 'block md:hidden' : 'hidden md:block'}`}>
        <button onClick={handleGoBack} className="flex items-center ml-16 justify-center px-4 py-2 bg-green-500 text-white font-bold rounded-lg shadow-md transition-transform duration-300 hover:scale-105">
            <span className="ml-2">Go Back</span>
          </button>
          <h4 className="text-xl font-semibold mb-4">Other Lessons in this Course:</h4>
          <div className="space-y-2">
            {lessons.map((lesson) => (
              <button
                key={lesson.id}
                onClick={() => handleLessonClick(lesson)}
                className="flex items-center w-full text-left p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-800 transition duration-300"
              >
                <FaPlayCircle className="mr-2 text-blue ml-16" />
                {lesson.title}
              </button>
            ))}
          </div>
        </div>

        {/* Main Content Area */}
        <div className="md:w-3/4 mt-4 md:mt-0 md:ml-4">
          <h2 className="text-3xl font-bold mb-8">
            {selectedLesson ? (
              <div className="flex items-center justify-center">
                Form 4 Lesson {selectedLesson.id}
              </div>
            ) : (
              'Lessons'
            )}
          </h2>

          {selectedLesson ? (
            <div className="bg-white rounded-lg shadow-lg p-6">
              {selectedLesson.videoUrl.includes('youtube.com') ? (
                <iframe
                  width="100%"
                  height="480"
                  src={convertToEmbedURL(selectedLesson.videoUrl)}
                  title={selectedLesson.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="rounded-lg mb-4"
                ></iframe>
              ) : (
                <video controls src={selectedLesson.videoUrl} className={`w-full rounded-lg mb-4 ${mobileSidebarVisible ? 'md:hidden' : ''}`}></video>
              )}
              <p className="text-gray-700">{selectedLesson.description}</p>
            </div>
          ) : (
            <p className="text-center text-gray-700">Please select a lesson to view its content.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default F4Lessons;
