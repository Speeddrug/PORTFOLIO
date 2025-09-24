import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

function ContactForm() {
  const formRef = useRef();
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("Sending...");

    emailjs
      .send(
        "service_geii2wr",       // Your EmailJS service ID
        "template_j2q3h52",      // Your EmailJS template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        "dqY_dCMs6Autq-f3w"      // Your EmailJS public key
      )
      .then(
        () => {
          setLoading(false);
          setStatus("Thank you! I will get back to you soon.");
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          console.error(error);
          setLoading(false);
          setStatus("Something went wrong. Please try again.");
        }
      );
  };

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="w-full max-w-md flex flex-col gap-4">
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Your Name"
        className="p-3 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:border-purple-500"
        required
      />
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Your Email"
        className="p-3 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:border-purple-500"
        required
      />
      <textarea
        name="message"
        value={formData.message}
        onChange={handleChange}
        placeholder="Your Message"
        rows="5"
        className="p-3 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:border-purple-500"
        required
      />
      <button
        type="submit"
        className="bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-lg font-semibold"
      >
        {loading ? "Sending..." : "Send Message"}
      </button>
      {status && <p className="text-center mt-2">{status}</p>}
    </form>
  );
}

export default ContactForm;