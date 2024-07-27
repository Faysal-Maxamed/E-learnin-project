import React, { useState } from 'react';

const ContactUs = () => {
  const [messageSent, setMessageSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to handle the form submission here
    setMessageSent(true);
  };

  return (
    <div className="container mx-auto p-4 my-8 max-w-md">
      <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
      <p className="mb-4">If you have any questions or inquiries, please fill out the form below, and we will get back to you as soon as possible.</p>
      {messageSent ? (
        <p className="text-green-500">Your message was sent successfully.</p>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded shadow-md">
          <div>
            <label className="block mb-2 font-bold" htmlFor="name">Name</label>
            <input className="w-full p-2 border border-gray-300 rounded" type="text" id="name" name="name" required />
          </div>
          <div>
            <label className="block mb-2 font-bold" htmlFor="email">Email</label>
            <input className="w-full p-2 border border-gray-300 rounded" type="email" id="email" name="email" required />
          </div>
          <div>
            <label className="block mb-2 font-bold" htmlFor="message">Message</label>
            <textarea className="w-full p-2 border border-gray-300 rounded" id="message" name="message" required></textarea>
          </div>
          <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700" type="submit">Send</button>
        </form>
      )}
    </div>
  );
};

export default ContactUs;
