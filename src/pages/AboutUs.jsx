import React, { useState } from 'react';
import teamMember1 from '../images/use1.jpg';
import teamMember2 from '../images/use2.jpg';
import teamMember3 from '../images/use3.jpg';
import starIcon from '../images/star.png'; 
import { FaFacebook, FaTwitter, FaInstagram, FaWhatsapp } from 'react-icons/fa';

const AboutUs = () => {
  const [activeSection, setActiveSection] = useState(null);

  const handleSectionClick = (section) => {
    setActiveSection(activeSection === section ? null : section);
  };

  return (
    <div className="container mx-auto  mt-8">
      <div className="flex flex-col md:flex-row items-center p-4">
        <div className="md:w-1/2 mb-4 md:mb-0">
          <img src={teamMember1} alt="About Us" className="rounded-lg border-2 border-gray-300" />
        </div>
        <div className="md:w-1/2 md:pl-8">
          <h2 className="text-3xl font-bold mb-4">About Us</h2>
          <p className="mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam viverra tellus nec eleifend tempor. 
            Vestibulum id magna vel urna posuere semper a vel augue. Nulla facilisi. Vestibulum dapibus sapien 
            non ex fermentum, ut congue lorem dapibus.
          </p>
          <p>
            Duis interdum, orci eget varius efficitur, ipsum purus vestibulum nisi, nec maximus ipsum lorem ut 
            lacus. Morbi a velit sed erat faucibus vehicula. Sed feugiat orci sit amet felis consequat, at 
            eleifend ex faucibus.
          </p>
        </div>
      </div>
      <div className="mt-8 p-4">
        <h3 className="text-xl font-bold mb-4 p-4">Our Team</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <img src={teamMember1} alt="John Doe" className="rounded-lg border-2 border-gray-300 mb-4 hover:ml-5" />
            <h3 className="text-lg font-bold">Maryama Mohamed</h3>
            <p>Course Instructor</p>
          </div>
          <div className="text-center">
            <img src={teamMember2} alt="Jane Smith" className="rounded-lg border-2 border-gray-300 mb-4 hover:ml-5" />
            <h3 className="text-lg font-bold">Maandeq Hassan</h3>
            <p>Course Instructor</p>
          </div>
          <div className="text-center">
            <img src={teamMember3} alt="Sam Brown" className="rounded-lg border-2 border-gray-300 mb-4 hover:ml-5" />
            <h3 className="text-lg font-bold">ZamZam A/lahi</h3>
            <p>Course Instructor</p>
          </div>
        </div>
      </div>
      <div className="mt-8 text-center">
        <button
          className={`px-4 py-2 mx-2 ${activeSection === 'mission' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'} rounded-lg`}
          onClick={() => handleSectionClick('mission')}
        >
          Mission
        </button>
        <button
          className={`px-4 py-2 mx-2 ${activeSection === 'vision' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'} rounded-lg`}
          onClick={() => handleSectionClick('vision')}
        >
          Vision
        </button>
      </div>
      <div className="mt-4">
        {activeSection === 'mission' && (
          <div className="text-center p-4 bg-gray-100 rounded-lg ">
            <h3 className="text-xl font-bold mb-4 ">Mission</h3>
            <p >Our mission is to provide quality education and resources to students and educators.</p>
          </div>
        )}
        {activeSection === 'vision' && (
          <div className="text-center p-4 bg-gray-100 rounded-lg">
            <h3 className="text-xl font-bold mb-4">Vision</h3>
            <p>Our vision is to be a leading educational platform recognized for excellence and innovation.</p>
          </div>
        )}
      </div>
      <div className="mt-8 text-center">
        <img src={starIcon} alt="Star Icon" className="inline-block w-6 h-6 mx-2" />
        <img src={starIcon} alt="Star Icon" className="inline-block w-6 h-6 mx-2" />
        <img src={starIcon} alt="Star Icon" className="inline-block w-6 h-6 mx-2" />
        <img src={starIcon} alt="Star Icon" className="inline-block w-6 h-6 mx-2" />
        <img src={starIcon} alt="Star Icon" className="inline-block w-6 h-6 mx-2" />
      </div>

      {/* start footer */}
      <footer className="bg-gray-600 text-white py-12 mt-8 rounded-tl-lg rounded-br-lg mb-0">
      <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-between">
        <div className="w-1/5 mb-4">
          <h2 className="text-xl font-bold mb-2">Shop Matcha</h2>
          <ul>
            <li className="mb-2"><a href="#" className="hover:text-green-500">Just the Matcha</a></li>
            <li className="mb-2"><a href="#" className="hover:text-green-500">The Trial Kit</a></li>
            <li className="mb-2"><a href="#" className="hover:text-green-500">Wholesale & Bulk</a></li>
            <li className="mb-2"><a href="#" className="hover:text-green-500">Teaware</a></li>
          </ul>
        </div>
        <div className="w-1/5 mb-4">
          <h2 className="text-xl font-bold mb-2">Learn</h2>
          <ul>
            <li className="mb-2"><a href="#" className="hover:text-green-500">Matcha Recipes</a></li>
            <li className="mb-2"><a href="#" className="hover:text-green-500">Caffeine Content</a></li>
            <li className="mb-2"><a href="#" className="hover:text-green-500">Health Benefits</a></li>
          </ul>
        </div>
        <div className="w-1/5 mb-4">
          <h2 className="text-xl font-bold mb-2">More from Tenzo</h2>
          <ul>
            <li className="mb-2"><a href="#" className="hover:text-green-500">Our Story</a></li>
            <li className="mb-2"><a href="#" className="hover:text-green-500">Blog</a></li>
            <li className="mb-2"><a href="#" className="hover:text-green-500">Affiliate</a></li>
            <li className="mb-2"><a href="#" className="hover:text-green-500">Contact Us</a></li>
            <li className="mb-2"><a href="#" className="hover:text-green-500">FAQ's</a></li>
            <li className="mb-2"><a href="#" className="hover:text-green-500">Sign In</a></li>
          </ul>
        </div>
        <div className="w-1/5 mb-4">
          <h2 className="text-xl font-bold mb-2">Let's Stay Connected</h2>
          <p className="mb-4">Enter your email to unlock 10% OFF.</p>
          <form className="flex flex-col space-y-2">
            <input className="p-2 rounded border border-gray-300" type="email" placeholder="Your Email" required />
            <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded" type="submit">Submit</button>
          </form>
          <div className="mt-4">
            <h2 className="text-xl font-bold mb-2">Follow us</h2>
            <div className="flex space-x-4">
              <a href="https://www.pinterest.com" className="text-white hover:text-green-500"><FaWhatsapp size={24} /></a>
              <a href="https://www.facebook.com" className="text-white hover:text-green-500"><FaFacebook size={24} /></a>
              <a href="https://www.instagram.com" className="text-white hover:text-green-500"><FaInstagram size={24} /></a>
              <a href="https://www.twitter.com" className="text-white hover:text-green-500"><FaTwitter size={24} /></a>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 mt-8 text-center text-sm">
        <p className="mb-2">&copy; 2024 Edu Platform.co</p>
        <p>
          <a href="#" className="hover:text-green-500">Terms of Service</a> | 
          <a href="#" className="hover:text-green-500"> Privacy Policy</a> | 
          <a href="#" className="hover:text-green-500"> Refund Policy</a> | 
          <a href="#" className="hover:text-green-500"> Accessibility Policy</a>
        </p>
      </div>
    </footer>
    </div>
  );
};

export default AboutUs;