import React, { useState } from "react";
import axios from "axios";

function ContactForm() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      // Directly call backend URL
      const response = await axios.post("http://localhost:5000/api/contact", formData);

      console.log("Backend response:", response); // debug
      if (response.data?.message) {
        setStatus(response.data.message); // success
      } else if (response.data?.error) {
        setStatus("Error: " + response.data.error);
      } else {
        setStatus("Unexpected response from server");
      }

      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      console.error("Error sending message:", err);

      if (err.response) {
        setStatus("Error: " + err.response.data.error);
      } else if (err.request) {
        setStatus("Cannot reach backend. Is server running?");
      } else {
        setStatus("Error: " + err.message);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md flex flex-col gap-4">
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
        className="bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-lg font-semibold btn-animate"
      >
        Send Message
      </button>
      {status && <p className="text-center mt-2">{status}</p>}
    </form>
  );
}

export default ContactForm;
