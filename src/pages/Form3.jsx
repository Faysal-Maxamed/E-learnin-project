import React from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { FaChevronRight, FaChevronLeft } from 'react-icons/fa';

// Placeholder images (replace with actual image paths or URLs)
import TechnologyImage from '../images/ClassImages/tech3.jpg';
import englishImage from '../images/ClassImages/eng3.jpg';
import mathImage from  '../images/ClassImages/math3.jpg';
import physicsImage from  '../images/ClassImages/physics.jpg';
import chemistryImage from '../images/ClassImages/buss3.jpg';
import historyImage from  '../images/ClassImages/his11.jpg';
import biologyImage from '../images/ClassImages/bioform3.jpg';


const form3Data = [
  { id: 1, name: 'Technology', description: 'In this course you will learn all Tecnology lessons of  the secondary school', image: TechnologyImage },
  { id: 2, name: 'Chemistry Course', description: 'In this course you will learn all Chemistry lessons of all classes of the secondary school', image: englishImage },
  { id: 3, name: 'Math Course', description: 'Master Mathematics with lessons covering various topics.', image: mathImage },
  { id: 4, name: 'Physics Course', description: 'Learn the fundamentals of Physics for secondary school.', image: physicsImage },
  { id: 5, name: 'Bussness Course', description: 'Explore the principles of Bussnes through detailed lessons.', image: chemistryImage },
  { id: 6, name: 'History Course', description: 'Dive into the important events and figures in History.', image: historyImage },
  { id: 7, name: 'Biology Course', description: 'Understand the complexities of Biology with our comprehensive course.', image: biologyImage },

];

const NextArrow = ({ className, onClick, currentSlide, slideCount }) => (
  <div
    className={`absolute top-1/2 transform -translate-y-1/2 right-4 z-10 cursor-pointer text-4xl text-gray-800 bg-white rounded-full p-2 shadow-lg hover:text-purple-800 hover:shadow-xl transition duration-300 ${
      currentSlide === slideCount - 1 ? 'opacity-50 cursor-not-allowed' : ''
    }`}
    onClick={currentSlide === slideCount - 1 ? null : onClick}
  >
    <FaChevronRight />
  </div>
);

const PrevArrow = ({ className, onClick, currentSlide }) => (
  <div
    className={`absolute top-1/2 transform -translate-y-1/2 left-4 z-10 cursor-pointer text-4xl text-gray-800 bg-white rounded-full p-2 shadow-lg hover:text-purple-800 hover:shadow-xl transition duration-300 ${
      currentSlide === 0 ? 'opacity-50 cursor-not-allowed' : ''
    }`}
    onClick={currentSlide === 0 ? null : onClick}
  >
    <FaChevronLeft />
  </div>
);

const Form3 = () => {
  const halfIndex = Math.ceil(form3Data.length / 2);
  const firstHalf = form3Data.slice(0, halfIndex);
  const secondHalf = form3Data.slice(halfIndex);

  const sliderSettings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="container mx-auto p-4 bg-gray-200">
      <h2 className="text-3xl font-bold mb-8 mt-4 text-center">Form 3 Courses</h2>

      <div className="mb-8">
        <Slider {...sliderSettings} className="relative">
          {firstHalf.map((course, index) => (
            <div key={course.id} className="px-4">
              <Link
                to={`/form3/${course.id}/lessons`}
                className="block rounded-lg overflow-hidden shadow-lg transition duration-300 transform hover:scale-105"
                style={{ backgroundColor: '#FFFFFF' }}
              >
                <div className="rounded-full h-48 w-48 mx-auto mb-4 overflow-hidden">
                  <img src={course.image} alt={course.name} className="object-cover h-full w-full" />
                </div>
                <div className="bg-gray-300 p-4">
                  <h3 className="text-xl font-bold mb-2">{course.name}</h3>
                  <p className="text-gray-700">{course.description}</p>
                </div>
                <div className="bg-purple-800 text-white py-2 px-4 rounded-b-lg text-center">
                  <span className="text-sm">Start Course</span>
                </div>
              </Link>
            </div>
          ))}
        </Slider>
      </div>

      {secondHalf.length > 0 && (
        <div>
          <Slider {...sliderSettings} className="relative">
            {secondHalf.map((course, index) => (
              <div key={course.id} className="px-4">
                <Link
                  to={`/form3/${course.id}/lessons`}
                  className="block rounded-lg overflow-hidden shadow-lg transition duration-300 transform hover:scale-105"
                  style={{ backgroundColor: '#FFFFFF' }}
                >
                  <div className="rounded-full h-48 w-48 mx-auto mb-4 overflow-hidden">
                    <img src={course.image} alt={course.name} className="object-cover h-full w-full" />
                  </div>
                  <div className="bg-gray-300 p-4">
                    <h3 className="text-xl font-bold mb-2">{course.name}</h3>
                    <p className="text-gray-700">{course.description}</p>
                  </div>
                  <div className="bg-purple-800 text-white py-2 px-4 rounded-b-lg text-center">
                    <span className="text-sm">Start Course</span>
                  </div>
                </Link>
              </div>
            ))}
          </Slider>
        </div>
      )}
    </div>
  );
};

export default Form3;
