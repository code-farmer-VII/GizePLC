"use client";
import React, { useState, ChangeEvent, FormEvent } from "react";
import { FaFacebook, FaInstagram, FaEnvelope, FaPhone } from "react-icons/fa";
import emailjs from "@emailjs/browser";

interface FormData {
  from_name: string;
  from_email: string;
  phone: string;
  message: string;
  to_name: string;
}

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    from_name: "",
    from_email: "",
    phone: "",
    message: "",
    to_name: "Temesgen Gonfa",
  });

  const [status, setStatus] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const updatedFormData = {
      ...formData,
      message: `${formData.message}\n\nPhone: ${formData.phone}`,
    };

    emailjs
      .send(
        "service_wm5hqyh",
        "template_iajdwyd",
        updatedFormData,
        "4n7g-rFCCbhZsxsjq"
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setStatus("Message sent successfully!");
          setFormData({
            from_name: "",
            from_email: "",
            phone: "",
            message: "",
            to_name: "Temesgen Gonfa",
          });
        },
        (error) => {
          console.log("FAILED...", error);
          setStatus("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <div className="relative bg-white text-orange-600 pt-12 flex flex-col items-center px-4">
      <h2 className="text-3xl font-bold text-orange-600 text-center">Get in touch</h2>
      <p className="text-orange-600 mt-2 text-center max-w-[600px]">
        We’re here to help. Chat with our friendly team 24/7.
      </p>

      <form onSubmit={handleSubmit} className="mt-10 w-full max-w-[800px]">
        <div className="flex flex-col md:flex-row gap-6">
          <input
            type="text"
            name="from_name"
            placeholder="Full name"
            value={formData.from_name}
            onChange={handleChange}
            className="flex-1 p-4 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-[#91519F] transition duration-300"
            required
          />
          <input
            type="email"
            name="from_email"
            placeholder="YourEmail@gmail.com"
            value={formData.from_email}
            onChange={handleChange}
            className="flex-1 p-4 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-[#91519F] transition duration-300"
            required
          />
        </div>

        <div className="flex flex-col md:flex-row gap-6 mt-6">
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            className="flex-1 p-4 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-[#91519F] transition duration-300"
            required
          />
        </div>

        <div className="flex flex-col md:flex-row gap-6 mt-6">
          <textarea
            name="message"
            placeholder="Your Message here..."
            value={formData.message}
            onChange={handleChange}
            className="flex-1 p-4 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-[#91519F] transition duration-300 min-h-[150px]"
            required
          ></textarea>
        </div>

        <button
          type="submit"
          className="mt-6 px-6 py-3 w-full md:w-auto border-2 border-orange-600 text-orange-600 rounded-full hover:bg-orange-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-[#91519F] transition duration-300"
        >
          Send Message
        </button>
      </form>

      {status && <p className="mt-4 text-center text-lg">{status}</p>}

      <div className="w-full max-w-[800px] mt-8">
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.838330159586!2d38.77278280986616!3d8.9870200896089!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b85a344053831%3A0xb9e2b87a0aac317c!2zR0laRSBQTEMgKOGMiuGLnCDhioMu4YuoLuGLqOGMjeGIjSDhiJvhiIXhiaDhiK0p!5e0!3m2!1sen!2set!4v1762075522552!5m2!1sen!2set"
          className="w-full h-[250px] rounded-lg"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>

      <div className="mt-6 flex items-center gap-6 justify-center text-[#91519F]">
        <a
          href="https://www.instagram.com/squared-tech-solutions"
          target="_blank"
          rel="noopener noreferrer"
        >
        </a>
      </div>
    </div>
  );
};

export default ContactSection;
