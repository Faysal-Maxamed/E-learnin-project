import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  return (
    <div>
      <div className="min-h-screen bg-blue-100 flex items-center justify-center p-6">
        <div className="w-full max-w-lg bg-gray-600 p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold text-white mb-4 text-center">CONTACT US</h2>
          <p className="text-white text-center mb-8">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.</p>
          <form className="space-y-6">
            <input className="w-full p-3 border border-blue-50 bg-transparent text-white placeholder-blue-50 rounded" type="text" placeholder="Your Name" required />
            <input className="w-full p-3 border border-blue-50 bg-transparent text-white placeholder-blue-50 rounded" type="email" placeholder="Your Mail" required />
            <textarea className="w-full p-3 border border-blue-50 bg-transparent text-white placeholder-blue-50 rounded" placeholder="Your Message" rows="4" required></textarea>
            <button className="w-full p-3 bg-blue-700 text-white font-bold rounded hover:bg-blue-600" type="submit">SUBMIT</button>
          </form>
        </div>
      </div>
      <footer className="bg-gray-600 text-white py-12 mt-0 rounded-tl-lg rounded-br-lg mb-0">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-between">
          <div className="w-full md:w-1/5 mb-4">
            <h2 className="text-xl font-bold mb-2">Shop Matcha</h2>
            <ul>
              <li className="mb-2"><a href="#" className="hover:text-green-500">Just the Matcha</a></li>
              <li className="mb-2"><a href="#" className="hover:text-green-500">The Trial Kit</a></li>
              <li className="mb-2"><a href="#" className="hover:text-green-500">Wholesale & Bulk</a></li>
              <li className="mb-2"><a href="#" className="hover:text-green-500">Teaware</a></li>
            </ul>
          </div>
          <div className="w-full md:w-1/5 mb-4">
            <h2 className="text-xl font-bold mb-2">Learn</h2>
            <ul>
              <li className="mb-2"><a href="#" className="hover:text-green-500">Matcha Recipes</a></li>
              <li className="mb-2"><a href="#" className="hover:text-green-500">Caffeine Content</a></li>
              <li className="mb-2"><a href="#" className="hover:text-green-500">Health Benefits</a></li>
            </ul>
          </div>
          <div className="w-full md:w-1/5 mb-4">
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
          <div className="w-full md:w-1/5 mb-4">
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

export default Footer;
