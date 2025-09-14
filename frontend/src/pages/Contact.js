import React from "react";
import Footer from "../components/footer"; 
// import Footer correctly

function Contact() {
  return (
    <div className="w-full flex flex-col items-center">
      <section id="contact" className="w-full max-w-6xl mt-20 flex flex-col items-center">
        <h2 className="text-4xl font-bold mb-6">Contact Me</h2>
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
      </section>

      {/* Footer comes after the ContactForm */}
       {/* Add extra spacing before footer */}
      <div className="w-full mt-20"></div>
      <Footer />
    </div>
  );
}

export default Contact;
