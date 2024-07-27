import React, { useState } from 'react';
import teamMember1 from '../images/use1.jpg';
import starIcon from '../images/star.png';
import { FaFacebook, FaTwitter, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import p1 from '../images/p1.jpeg';
import p2 from '../images/p2.jpeg';
import p3 from '../images/p3.jpeg';

const AboutUs = () => {
  const [activeSection, setActiveSection] = useState(null);

  const handleSectionClick = (section) => {
    setActiveSection(activeSection === section ? null : section);
  };
  const teamMembers = [
    {
      name: 'NAjiib',
      title: 'Manager',
      image: p1,
      description: 'As the manager, Najiib leads our e-learning platform with a vision to innovate and excel. With years of experience in the industry, he ensures our strategies align with our goals and values.',
      skills: [
        { name: 'Somali', proficiency: '99%' },
        { name: 'English', proficiency: '85%' },
        { name: 'Carabi', proficiency: '64%' },
        { name: 'Technology', proficiency: '100%' },
      ],
    },
    {
      name: 'Feysal',
      title: 'Teacher',
      image: p2,
      description: 'Faysal, our dedicated teacher, imparts knowledge with precision and care. He ensures that every lesson is delivered effectively and meets the highest educational standards.',
      skills: [
        { name: 'Somali', proficiency: '84%' },
        { name: 'English', proficiency: '22%' },
        { name: 'Carabi', proficiency: '84%' },
        { name: 'Technology', proficiency: '45%' },
      ],
    },
    {
      name: 'Zeynab',
      title: 'Teacher',
      image: p3,
      description: 'Zeynab is a skilled teacher who brings our lessons to life with engaging and effective teaching methods. Her expertise in various subjects helps our students stay ahead in their education.',
      skills: [
        { name: 'Somali', proficiency: '87%' },
        { name: 'Carabi', proficiency: '45%' },
        { name: 'English', proficiency: '99%' },
        { name: 'Technology', proficiency: '78%' },
      ],
    },
  ];

  return (
    <div className="container mx-auto  mt-8">
      <div className="flex flex-col md:flex-row items-center p-4">
        <div className="md:w-1/2 mb-4 md:mb-0">
          <img src={teamMember1} alt="About Us" className="rounded-lg border-2 border-gray-300" />
        </div>
        <div className="md:w-1/2 md:pl-8">
          <h2 className="text-3xl font-bold mb-4 text-green-500">About Us</h2>
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

      <div>
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-6 text-black mt-8">Meet Our Team!</h2>
        <p className="text-center mb-8 text-black">We listen, we discuss, we advise and develop. We love to learn and use the latest technologies.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className={`team-member bg-gray-200 rounded-lg shadow-lg p-6 text-center hover:transform hover:scale-105 transition-transform duration-300`}
            >
              <img src={member.image} alt={member.name} className="w-24 h-24 rounded-full mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">{member.name}</h3>
              <p className="text-gray-500 mb-4">{member.title}</p>
              <p className="text-gray-700 mb-4">{member.description}</p>
              <div className="skills">
                {member.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill mb-2">
                    <div className="flex justify-between mb-1">
                      <span>{skill.name}</span>
                      <span>{skill.proficiency}</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div className="bg-blue-500 h-2.5 rounded-full" style={{ width: skill.proficiency }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>


      <div className="flex justify-center mt-8 space-x-4">
        <button
          className={`px-6 py-3 text-lg font-semibold rounded-lg shadow-md transition-transform transform hover:scale-105 ${activeSection === 'mission' ? 'bg-blue-600 text-white' : 'bg-gray-300 text-gray-800'}`}
          onClick={() => handleSectionClick('mission')}
        >
          Mission
        </button>
        <button
          className={`px-6 py-3 text-lg font-semibold rounded-lg shadow-md transition-transform transform hover:scale-105 ${activeSection === 'vision' ? 'bg-blue-600 text-white' : 'bg-gray-300 text-gray-800'}`}
          onClick={() => handleSectionClick('vision')}
        >
          Vision
        </button>
      </div>

      <div className="mt-6">
        {activeSection === 'mission' && (
          <div className="text-center p-6 bg-gray-200 shadow-lg rounded-lg border border-gray-200">
            <h3 className="text-2xl font-bold mb-4 text-blue-600">Mission</h3>
            <p className="text-lg text-gray-700">
              Our mission is to provide quality education and resources to students and educators.
            </p>
          </div>
        )}
        {activeSection === 'vision' && (
          <div className="text-center p-6 bg-gray-200 shadow-lg rounded-lg border border-gray-200">
            <h3 className="text-2xl font-bold mb-4 text-blue-600">Vision</h3>
            <p className="text-lg text-gray-700">
              Our vision is to be a leading educational platform recognized for excellence and innovation.
            </p>
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
      <footer className="bg-gray-100 text-black py-12 mt-8 rounded-tl-lg rounded-br-lg mb-0">
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
                <a href="https://www.pinterest.com" className="text-green-600 hover:text-green-500"><FaWhatsapp size={24} /></a>
                <a href="https://www.facebook.com" className="text-blue-600  hover:text-green-500"><FaFacebook size={24} /></a>
                <a href="https://www.instagram.com" className="text-red-400  hover:text-green-500"><FaInstagram size={24} /></a>
                <a href="https://www.twitter.com" className="text-blue-400
                  hover:text-green-500"><FaTwitter size={24} /></a>
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 mt-8 text-center text-sm">
          <p className="mb-2">&copy; 2024 Smart College.co</p>
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