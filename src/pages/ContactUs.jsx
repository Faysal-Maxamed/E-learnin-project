import React, { useState } from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { BiMap } from 'react-icons/bi';
import { HiOutlineMail } from 'react-icons/hi';
import { AiOutlinePhone } from 'react-icons/ai';

const Footer = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.phone || !formData.message) {
      setError('Please fill all the fields.');
    } else {
      setError('');
      setSuccess(true);
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: ''
      });
      console.log('Form submitted successfully!');
    }
  };

  return (
    <div>
      <div className="flex flex-col lg:flex-row lg:max-w-5xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden mt-10">
        <div className="w-full lg:w-1/3 bg-green-700 text-white  p-8">
          <h2 className="text-2xl font-bold mt-8 ml-8 mb-4">Contact Info</h2>
          <div className="mb-4 mt-4">
            <p className="flex items-center mb-2">
              <BiMap className="h-6 w-6 mr-2" />
              Mogadishu, Somalia, Hodan
            </p>
          </div>
          <div className="mb-4">
            <p className="flex items-center mb-2">
              <HiOutlineMail className="h-6 w-6 mr-2" />
              SmartCo@gmail.com
            </p>
          </div>
          <div className="mb-4">
            <p className="flex items-center mb-2">
              <AiOutlinePhone className="h-6 w-6 mr-2" />
              252 614388477
            </p>
          </div>
          <p className='mt-4'>Contact us for any questions or feedback, and we’ll get back to you as soon as possible.</p>
          <div className="mt-8 ml-8 flex space-x-4">
            <a href="https://www.pinterest.com" className="text-white hover:text-black"><FaWhatsapp size={24} /></a>
            <a href="https://www.facebook.com" className="text-white hover:text-black"><FaFacebook size={24} /></a>
            <a href="https://www.instagram.com" className="text-white hover:text-black"><FaInstagram size={24} /></a>
            <a href="https://www.twitter.com" className="text-white hover:text-black"><FaTwitter size={24} /></a>
          </div>
        </div>
        <div className="w-full lg:w-2/3 p-8">
          <h2 className="text-2xl font-bold mb-4">Send a Message</h2>
          <form onSubmit={handleSubmit}>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="firstName">
                  First Name
                </label>
                <input
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="firstName"
                  type="text"
                  placeholder="Enter FirstName"
                />
              </div>
              <div className="w-full md:w-1/2 px-3">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="lastName">
                  Last Name
                </label>
                <input
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="lastName"
                  type="text"
                  placeholder="Enter LastName"
                />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="email">
                  Email Address
                </label>
                <input
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                />
              </div>
              <div className="w-full md:w-1/2 px-3">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="phone">
                  Mobile Number
                </label>
                <input
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="phone"
                  type="tel"
                  placeholder="61XXXXXX"
                />
              </div>
            </div>
            <div className="w-full px-3 mb-6">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="message">
                Write your message here...
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-32 resize-none"
                id="message"
              ></textarea>
            </div>
            {error && <p className="text-red-500 mb-4">{error}</p>}
            <div className="w-full px-3">
              <button
                className="w-full bg-green-700 hover:bg-green-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Send
              </button>
            </div>
          </form>
          {success && <p className="text-green-500 mt-4">Form submitted successfully!</p>}
        </div>
      </div>

      <footer className="bg-gray-100 text-black py-12 mt-12 rounded-tl-lg rounded-br-lg mb-0 ">
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
          <p className="mb-2">&copy;  2024 Smart College.co</p>
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

export default Footer;
