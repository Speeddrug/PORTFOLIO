import React from "react";

import Footer from "../components/footer"; 

import ContactForm from "../components/ContactForm"; // make sure the path is correct

function Contact() {
  return (
    <div className="w-full flex flex-col items-center">
      <section
        id="contact"
        className="w-full max-w-6xl mt-20 flex flex-col items-center"
      >
        <h2 className="text-4xl font-bold mb-6">Contact Me</h2>

        {/* Use the functional ContactForm component */}
        <ContactForm />
      </section>

      <div className="w-full mt-20"></div>
      <Footer />
    </div>
  );
}

export default Contact;
