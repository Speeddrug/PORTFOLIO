import React from "react";

function ContactForm() {
  return (
    <form className="w-full max-w-md flex flex-col gap-4">
      <input
        type="text"
        placeholder="Your Name"
        className="p-3 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:border-purple-500"
      />
      <input
        type="email"
        placeholder="Your Email"
        className="p-3 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:border-purple-500"
      />
      <textarea
        placeholder="Your Message"
        rows="5"
        className="p-3 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:border-purple-500"
      />
      <button
        type="submit"
        className="bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-lg font-semibold btn-animate"
      >
        Send Message
      </button>
    </form>
  );
}

export default ContactForm;
