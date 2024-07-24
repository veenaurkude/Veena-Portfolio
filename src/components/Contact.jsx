


import React, { useState } from "react";
import { InboxStackIcon, EnvelopeIcon, PhoneIcon, PencilSquareIcon } from "@heroicons/react/24/solid";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const encodedData = Object.keys(formData)
      .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(formData[key]))
      .join('&');

    try {
      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encodedData
      });
      // Redirect to success page or display success message
      alert('Form submission successful!');
      setFormData({
        name: '',
        email: '',
        message: ''
      });
    } catch (error) {
      console.error('Form submission error:', error);
    }
  };

  return (
    <main id="contact" className="py-10 text-gray-400 bg-black">
      <div className="text-center mb-10">
        <InboxStackIcon className="w-10 inline-block mb-4" />
        <h1 className="text-3xl sm:text-4xl font-medium title-font mb-4">
          Contact Me
        </h1>
      </div>
      <section className="relative">
        <div className="container mx-auto flex flex-col sm:flex-row items-center lg:px-40 md:px-10 sm:px-10">
          <div className="lg:w-1/2 w-full px-6 mt-4 lg:mt-12 text-center sm:text-left">
            <h2 className="title-font font-semibold text-white tracking-widest text-xs mb-4">
              <EnvelopeIcon className="w-6 inline-block mb-1" /> Email
            </h2>
            <a href="mailto:veenaurkude10@gmail.com" className="hover:text-indigo-400 leading-relaxed">
              veenaurkude10@gmail.com
            </a>
            <h2 className="title-font font-semibold text-white tracking-widest text-xs mt-4 mb-4">
              <PhoneIcon className="w-6 inline-block mb-1" /> Phone
            </h2>
            <a href="tel:+91-8793635754" className="hover:text-indigo-400 leading-relaxed">+91-8793635754</a>
            <h2 className="title-font font-semibold text-white tracking-widest text-xs mt-4 mb-4">
              <PencilSquareIcon className="w-6 inline-block mb-1" /> Note
            </h2>
            <p className="leading-relaxed text-justify">
              I'm interested in new opportunities - especially ambitious or large projects. However, if you have any other questions, please connect with me for further discussion.
            </p>
          </div>

          <form
            name="contact"
            method="POST"
            data-netlify="true"
            onSubmit={handleSubmit}
            className="lg:w-1/2 w-full flex flex-col md:ml-auto md:py-8 mt-8 md:mt-0 px-5 md:px-0"
          >
            <input type="hidden" name="form-name" value="contact" />
            <div className="relative mb-4">
              <label htmlFor="name" className="leading-7 text-sm text-gray-400">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label htmlFor="email" className="leading-7 text-sm text-gray-400">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label htmlFor="message" className="leading-7 text-sm text-gray-400">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              />
            </div>
            <button
              type="submit"
              className="text-white bg-sky-500/50 border-0 py-2 px-6 focus:outline-none hover:bg-sky-500/75 rounded text-lg"
            >
              Submit
            </button>
          </form>
        </div>
      </section>
    </main>
  );
};

export default Contact;
