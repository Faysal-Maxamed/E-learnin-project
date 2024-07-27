import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom'; // Import useNavigate
import { FaPlayCircle, FaBars } from 'react-icons/fa';

const lessonsData = {
  1: [
    { id: 1, title: 'Lesson 1', description: 'Description for Lesson 1 Technology', videoUrl: 'https://www.youtube.com/watch?v=u6iP_PmcJRg&list=PLb6qPthBWy0cR3ZwG_JHpkd62DHKdn0V-&index=1&pp=iAQB' },
    { id: 2, title: 'Lesson 2', description: 'Description for Lesson 2 Technology', videoUrl: 'https://www.youtube.com/watch?v=mknowLewArk&list=PLb6qPthBWy0cR3ZwG_JHpkd62DHKdn0V-&index=2&pp=iAQB' },
    { id: 3, title: 'Lesson 3', description: 'Description for Lesson 3 Technology', videoUrl: 'https://www.youtube.com/watch?v=Mujac7QX1Yk&list=PLb6qPthBWy0cR3ZwG_JHpkd62DHKdn0V-&index=3&pp=iAQB' },
    { id: 4, title: 'Lesson 4', description: 'Description for Lesson 4 Technology', videoUrl: 'https://www.youtube.com/watch?v=Yrj2lQTulQo&list=PLb6qPthBWy0cR3ZwG_JHpkd62DHKdn0V-&index=4&pp=iAQB' },
    { id: 5, title: 'Lesson 5', description: 'Description for Lesson 5 Technology', videoUrl: 'https://www.youtube.com/watch?v=XmYooyJ2PDU&list=PLb6qPthBWy0cR3ZwG_JHpkd62DHKdn0V-&index=5&pp=iAQB' },
    { id: 6, title: 'Lesson 6', description: 'Description for Lesson 6 Technology', videoUrl: 'https://www.youtube.com/watch?v=DzSKyLZ_WCI&list=PLb6qPthBWy0cR3ZwG_JHpkd62DHKdn0V-&index=6&pp=iAQB' },
  ],
  2: [
    { id: 1, title: 'Lesson 1', description: 'Description for Lesson 1 Chemistry', videoUrl: 'https://www.youtube.com/watch?v=FpabU-S1R-I&list=PLqoLUta03xCKr-xslraKjG6n-Y-VfQWeF&index=1&pp=iAQB' },
    { id: 2, title: 'Lesson 2', description: 'Description for Lesson 2  Chemistry', videoUrl: 'https://www.youtube.com/watch?v=nLa_LX_Pdlo&list=PLqoLUta03xCKr-xslraKjG6n-Y-VfQWeF&index=2&pp=iAQB' },
    { id: 3, title: 'Lesson 3', description: 'Description for Lesson 3  Chemistry', videoUrl: 'https://www.youtube.com/watch?v=ibzDgV4DE5w&list=PLqoLUta03xCKr-xslraKjG6n-Y-VfQWeF&index=3&pp=iAQB' },
    { id: 4, title: 'Lesson 4', description: 'Description for Lesson 4  Chemistry', videoUrl: 'https://www.youtube.com/watch?v=l4DAj4VGe3E&list=PLqoLUta03xCKr-xslraKjG6n-Y-VfQWeF&index=4&pp=iAQB' },
    { id: 5, title: 'Lesson 5', description: 'Description for Lesson 5  Chemistry', videoUrl: 'https://www.youtube.com/watch?v=O1f2pWSx5ZI&list=PLqoLUta03xCKr-xslraKjG6n-Y-VfQWeF&index=5&pp=iAQB' },
    { id: 6, title: 'Lesson 6', description: 'Description for Lesson 6  Chemistry', videoUrl: 'https://www.youtube.com/watch?v=s3WRbQ0IhGg&list=PLqoLUta03xCKr-xslraKjG6n-Y-VfQWeF&index=6&pp=iAQB' },
    
    { id: 7, title: 'Lesson 7', description: 'Description for Lesson 7  Chemistry', videoUrl: 'https://www.youtube.com/watch?v=W1lEC11RP_Y&list=PLqoLUta03xCKr-xslraKjG6n-Y-VfQWeF&index=7&pp=iAQB' },
    { id: 8, title: 'Lesson 8', description: 'Description for Lesson 8  Chemistry', videoUrl: 'https://www.youtube.com/watch?v=MzzqZivUVgA&list=PLqoLUta03xCKr-xslraKjG6n-Y-VfQWeF&index=8&pp=iAQB' },
    { id: 9, title: 'Lesson 9', description: 'Description for Lesson 9  Chemistry', videoUrl: 'https://www.youtube.com/watch?v=C1kg5MoeG5Y&list=PLqoLUta03xCKr-xslraKjG6n-Y-VfQWeF&index=9&pp=iAQB' },
    { id: 10, title: 'Lesson 10', description: 'Description for Lesson 10  Chemistry', videoUrl: 'https://www.youtube.com/watch?v=kPHjaQsRtSs&list=PLqoLUta03xCKr-xslraKjG6n-Y-VfQWeF&index=10&pp=iAQB' },
    { id: 11, title: 'Lesson 11', description: 'Description for Lesson 11  Chemistry', videoUrl: 'https://www.youtube.com/watch?v=gmK3qD523jM&list=PLqoLUta03xCKr-xslraKjG6n-Y-VfQWeF&index=11&pp=iAQB' },
  ],
  3: [
    { id: 1, title: 'Lesson 1', description: 'Description for Lesson 1 Mathmatics', videoUrl: 'https://www.youtube.com/watch?v=4bXGhaI4XO8&list=PLOofE1KOTUELVkBDIgrgXRGZCxGSKMglJ&index=1&pp=iAQB' },
    { id: 2, title: 'Lesson 2', description: 'Description for Lesson 2 Mathmatics', videoUrl: 'https://www.youtube.com/watch?v=3FyCUZpHxS4&list=PLOofE1KOTUELVkBDIgrgXRGZCxGSKMglJ&index=2&pp=iAQB' },
    { id: 3, title: 'Lesson 3', description: 'Description for Lesson 3 Mathmatics', videoUrl: 'https://www.youtube.com/watch?v=mBeamXqwr58&list=PLOofE1KOTUELVkBDIgrgXRGZCxGSKMglJ&index=3&pp=iAQB' },
    { id: 4, title: 'Lesson 4', description: 'Description for Lesson 4 Mathmatics', videoUrl: 'https://www.youtube.com/watch?v=kq_xOCnOZ1Q&list=PLOofE1KOTUELVkBDIgrgXRGZCxGSKMglJ&index=4&pp=iAQB' },
    { id: 5, title: 'Lesson 5', description: 'Description for Lesson 5 Mathmatics', videoUrl: 'https://www.youtube.com/watch?v=kWFcOgB5JjM&list=PLOofE1KOTUELVkBDIgrgXRGZCxGSKMglJ&index=5&pp=iAQB' },
    { id: 6, title: 'Lesson 6', description: 'Description for Lesson 6 Mathmatics', videoUrl: 'https://www.youtube.com/watch?v=8AkwKbX_Nag&list=PLOofE1KOTUELVkBDIgrgXRGZCxGSKMglJ&index=6&pp=iAQB' },
    
    { id: 7, title: 'Lesson 7', description: 'Description for Lesson 7 Mathmatics', videoUrl: 'https://www.youtube.com/watch?v=960TKxhYpSQ&list=PLOofE1KOTUELVkBDIgrgXRGZCxGSKMglJ&index=7&pp=iAQB' },
    { id: 8, title: 'Lesson 8', description: 'Description for Lesson 8 Mathmatics', videoUrl: 'https://www.youtube.com/watch?v=uxjklmyBmt0&list=PLOofE1KOTUELVkBDIgrgXRGZCxGSKMglJ&index=8&pp=iAQB' },
    { id: 9, title: 'Lesson 9', description: 'Description for Lesson 9 Mathmatics', videoUrl: 'https://www.youtube.com/watch?v=-TkrlW-ftgc&list=PLOofE1KOTUELVkBDIgrgXRGZCxGSKMglJ&index=9&pp=iAQB' },
    { id: 10, title: 'Lesson 10', description: 'Description for Lesson 10 Mathmatics', videoUrl: 'https://www.youtube.com/watch?v=lQmLLxtbDIg&list=PLOofE1KOTUELVkBDIgrgXRGZCxGSKMglJ&index=10&pp=iAQB' },
  ],
  4: [
    { id: 1, title: 'Lesson 1', description: 'Description for Lesson 1 Physics', videoUrl: 'https://www.youtube.com/watch?v=4GXjVOq66d4&list=PLG4SdbUov5hQ_Ob5HgS2DmQVaHY8Bh0q5&index=1&pp=iAQB' },
    { id: 2, title: 'Lesson 2', description: 'Description for Lesson 2 Physics', videoUrl: 'https://www.youtube.com/watch?v=7v7O9HGHMJY&list=PLG4SdbUov5hQ_Ob5HgS2DmQVaHY8Bh0q5&index=2&pp=iAQB' },
    { id: 3, title: 'Lesson 3', description: 'Description for Lesson 3 Physics', videoUrl: 'https://www.youtube.com/watch?v=JDlUy1iG4mc&list=PLG4SdbUov5hQ_Ob5HgS2DmQVaHY8Bh0q5&index=3&pp=iAQB' },
    { id: 4, title: 'Lesson 4', description: 'Description for Lesson 4 Physics', videoUrl: 'https://www.youtube.com/watch?v=nyDaJhuB9oc&list=PLG4SdbUov5hQ_Ob5HgS2DmQVaHY8Bh0q5&index=4&pp=iAQB' },
    { id: 5, title: 'Lesson 5', description: 'Description for Lesson 5 Physics', videoUrl: 'https://www.youtube.com/watch?v=zucfhIj3y7U&list=PLG4SdbUov5hQ_Ob5HgS2DmQVaHY8Bh0q5&index=5&pp=iAQB' },
    { id: 6, title: 'Lesson 6', description: 'Description for Lesson 6 Physics', videoUrl: 'https://www.youtube.com/watch?v=zmoO66QAQxs&list=PLG4SdbUov5hThSGAA52GVuL4XndFlHywd&index=6&pp=iAQB' },
    
    { id: 7, title: 'Lesson 7', description: 'Description for Lesson 7 Physics', videoUrl: 'https://www.youtube.com/watch?v=ntP4ghYSX0c&list=PLG4SdbUov5hQUCMvyyLGN0CSJdH1cRfd9&index=1&pp=iAQB' },
    { id: 8, title: 'Lesson 8', description: 'Description for Lesson 8 Physics', videoUrl: 'https://www.youtube.com/watch?v=sefqqxw3Du8&list=PLG4SdbUov5hQUCMvyyLGN0CSJdH1cRfd9&index=2&pp=iAQB' },
    { id: 9, title: 'Lesson 9', description: 'Description for Lesson 9 Physics', videoUrl: 'https://www.youtube.com/watch?v=Rcwr9GO9_Dw&list=PLG4SdbUov5hQUCMvyyLGN0CSJdH1cRfd9&index=3&pp=iAQB' },
    { id: 10, title: 'Lesson 10', description: 'Description for Lesson 10 Physics', videoUrl: 'https://www.youtube.com/watch?v=0-VJ99p9BFo&list=PLG4SdbUov5hR6Zw_1hi7j24-4XbZBUl8q&index=1&pp=iAQB' },
    { id: 11, title: 'Lesson 11', description: 'Description for Lesson 11 Physics', videoUrl: 'https://www.youtube.com/watch?v=-dNeS1FWvHo&list=PLG4SdbUov5hR6Zw_1hi7j24-4XbZBUl8q&index=2&pp=iAQB' },

  ],
  5: [
    { id: 1, title: 'Lesson 1', description: 'Description for Lesson 1 Bussness', videoUrl: 'https://www.youtube.com/watch?v=HzDQzFiqYBI&list=PLA2sIXNgNKf5KloaVYw72eLLBhmUUT6oN&index=1&pp=iAQB' },
    { id: 2, title: 'Lesson 2', description: 'Description for Lesson 2 Bussness', videoUrl: 'https://www.youtube.com/watch?v=P7K4bgwGleA&list=PLA2sIXNgNKf5KloaVYw72eLLBhmUUT6oN&index=2&pp=iAQB' },
    { id: 3, title: 'Lesson 3', description: 'Description for Lesson 3 Bussness', videoUrl: 'https://www.youtube.com/watch?v=S6m-xoSGybs&list=PLA2sIXNgNKf5KloaVYw72eLLBhmUUT6oN&index=3&pp=iAQB' },
    { id: 4, title: 'Lesson 4', description: 'Description for Lesson 4 Bussness', videoUrl: 'https://www.youtube.com/watch?v=b3sfq-FCEWk&list=PLA2sIXNgNKf7zFI67_PvOsej2JQDAjrCX&index=4&pp=iAQB' },
    { id: 5, title: 'Lesson 5', description: 'Description for Lesson 5 Bussness', videoUrl: 'https://www.youtube.com/watch?v=mM6LMo641e4&list=PLA2sIXNgNKf5KloaVYw72eLLBhmUUT6oN&index=5&pp=iAQB' },
    { id: 6, title: 'Lesson 6', description: 'Description for Lesson 6 Bussness', videoUrl: 'https://www.youtube.com/watch?v=9S6afgQkfo8&list=PLA2sIXNgNKf5KloaVYw72eLLBhmUUT6oN&index=6&pp=iAQB' },
    { id: 7, title: 'Lesson 7', description: 'Description for Lesson 7 Bussness', videoUrl: 'https://www.youtube.com/watch?v=Q5hCzvV4uRg&list=PLA2sIXNgNKf5KloaVYw72eLLBhmUUT6oN&index=7&pp=iAQB' },
    { id: 8, title: 'Lesson 8', description: 'Description for Lesson 8 Bussness', videoUrl: 'https://www.youtube.com/watch?v=NNglnPPdcNs&list=PLA2sIXNgNKf5KloaVYw72eLLBhmUUT6oN&index=8&pp=iAQB' },
  ],
  6: [
    { id: 1, title: 'Lesson 1', description: 'Description for Lesson 1 History', videoUrl: 'https://www.youtube.com/watch?v=N3HohpZa8C8&list=PLOofE1KOTUEL25ld2lKIBXeTD4foJvQTt&index=1&pp=iAQB' },
    { id: 2, title: 'Lesson 2', description: 'Description for Lesson 2 History', videoUrl: 'https://www.youtube.com/watch?v=STbKd_zxAKQ&list=PLOofE1KOTUEL25ld2lKIBXeTD4foJvQTt&index=2&pp=iAQB' },
    { id: 3, title: 'Lesson 3', description: 'Description for Lesson 3 History', videoUrl: 'https://www.youtube.com/watch?v=GcUf6osRZeE&list=PLOofE1KOTUEL25ld2lKIBXeTD4foJvQTt&index=3&pp=iAQB' },
    { id: 4, title: 'Lesson 4', description: 'Description for Lesson 4 History', videoUrl: 'https://www.youtube.com/watch?v=avfzD3rYN6Q&list=PLOofE1KOTUEL25ld2lKIBXeTD4foJvQTt&index=4&pp=iAQB' },
    { id: 5, title: 'Lesson 5', description: 'Description for Lesson 5 History', videoUrl: 'https://www.youtube.com/watch?v=iWAl-GmGFQM&list=PLOofE1KOTUEL25ld2lKIBXeTD4foJvQTt&index=5&pp=iAQB' },
    { id: 6, title: 'Lesson 6', description: 'Description for Lesson 6 History', videoUrl: 'https://www.youtube.com/watch?v=JhHT6RxDxaI&list=PLOofE1KOTUEL25ld2lKIBXeTD4foJvQTt&index=6&pp=iAQB' },
    { id: 7, title: 'Lesson 7', description: 'Description for Lesson 7 History', videoUrl: 'https://www.youtube.com/watch?v=dD5WnUrGv5U&list=PLOofE1KOTUEL25ld2lKIBXeTD4foJvQTt&index=7&pp=iAQB' },
    { id: 8, title: 'Lesson 8', description: 'Description for Lesson 8 History', videoUrl: 'https://www.youtube.com/watch?v=RCzNH9Ew1jw&list=PLOofE1KOTUEL25ld2lKIBXeTD4foJvQTt&index=8&pp=iAQB' },
  ],
  7: [
    { id: 1, title: 'Lesson 1', description: 'Description for Lesson 1  Biology', videoUrl: 'https://www.youtube.com/watch?v=Dk1yru2Vx0k&list=PLqoLUta03xCLEL-F56UApUl7L7GNU1Uxj&index=1&pp=iAQB' },
    { id: 2, title: 'Lesson 2', description: 'Description for Lesson 2  Biology', videoUrl: 'https://www.youtube.com/watch?v=FxN8Y1W66Ig&list=PLqoLUta03xCLEL-F56UApUl7L7GNU1Uxj&index=2&pp=iAQB' },
    { id: 3, title: 'Lesson 3', description: 'Description for Lesson 3  Biology', videoUrl: 'https://www.youtube.com/watch?v=orzEODiC2Dg&list=PLqoLUta03xCLEL-F56UApUl7L7GNU1Uxj&index=3&pp=iAQB' },
    { id: 4, title: 'Lesson 4', description: 'Description for Lesson 4  Biology', videoUrl: 'https://www.youtube.com/watch?v=gzHtxCWd2X0&list=PLqoLUta03xCLEL-F56UApUl7L7GNU1Uxj&index=4&pp=iAQB' },
    { id: 5, title: 'Lesson 5', description: 'Description for Lesson 5  Biology', videoUrl: 'https://www.youtube.com/watch?v=iFclR6hHbN8&list=PLqoLUta03xCLEL-F56UApUl7L7GNU1Uxj&index=5&pp=iAQB' },
    { id: 6, title: 'Lesson 6', description: 'Description for Lesson 6  Biology', videoUrl: 'https://www.youtube.com/watch?v=WnPdov_ZnKQ&list=PLqoLUta03xCLEL-F56UApUl7L7GNU1Uxj&index=6&pp=iAQB' },
    
    { id: 7, title: 'Lesson 7', description: 'Description for Lesson 7  Biology', videoUrl: 'https://www.youtube.com/watch?v=5pV9vEak_V8&list=PLqoLUta03xCLEL-F56UApUl7L7GNU1Uxj&index=7&pp=iAQB' },
    { id: 8, title: 'Lesson 8', description: 'Description for Lesson 8  Biology', videoUrl: 'https://www.youtube.com/watch?v=v5p721jyZzE&list=PLqoLUta03xCLEL-F56UApUl7L7GNU1Uxj&index=8&pp=iAQB' },
    { id: 9, title: 'Lesson 9', description: 'Description for Lesson 9  Biology', videoUrl: 'https://www.youtube.com/watch?v=dF9XBdILv1M&list=PLqoLUta03xCLEL-F56UApUl7L7GNU1Uxj&index=9&pp=iAQB' },
    { id: 10, title: 'Lesson 10', description: 'Description for Lesson 10  Biology', videoUrl: 'https://www.youtube.com/watch?v=yH-faci-qJM&list=PLqoLUta03xCLEL-F56UApUl7L7GNU1Uxj&index=10&pp=iAQB' },
    { id: 11, title: 'Lesson 11', description: 'Description for Lesson 11  Biology', videoUrl: 'https://www.youtube.com/watch?v=MR7nF3HS0_I&list=PLqoLUta03xCLEL-F56UApUl7L7GNU1Uxj&index=11&pp=iAQB' },
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

const F3Lessons = () => {
  const { courseId } = useParams();
  const lessons = lessonsData[courseId] || [];
  const [selectedLesson, setSelectedLesson] = useState(null);
  const [mobileSidebarVisible, setMobileSidebarVisible] = useState(false);
  const navigate = useNavigate(); // Create navigate function

  const handleLessonClick = (lesson) => {
    setSelectedLesson(lesson);
  };

  const handleGoBack = () => {
    navigate('/form3'); // Navigate to Form2 page
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
                Form 3 Lesson {selectedLesson.id}
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

export default F3Lessons;
