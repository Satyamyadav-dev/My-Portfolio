import React, { useRef, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import emailjs from '@emailjs/browser';
import { FaEnvelope } from 'react-icons/fa';

export const Contact = () => {

  const formRef = useRef(); // reference for the form
  const [isSent, setisSent] = useState(false); // state to track if message is sent

  // function to handle email send
  const sentEmail = (e) => {
    e.preventDefault(); // prevent reloading of website

    // emailjs API to send the email
    emailjs.sendForm(
      "service_g3mlrzg",       // emailjs service_id created from Emailjs
      "template_6htueqg",      // emailjs template_id created from Emailjs
      formRef.current,         // your form ref 
      "bMic0JYdcXE3PRDxU"      // emailjs public key  from account in Emailjs
    )
      .then(() => {
        setisSent(true);                    // set state true after sending
        formRef.current.reset();            // reset all fields after message sent

        // show success toast
        toast.success("Message Sent Successfully! ✅", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: "dark",                    // theme of the toast
        });
      })
      .catch((error) => {
        console.log("FAILED...", error.text);

        // show error toast
        toast.error("Failed to send message ❌", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: "dark",                    // same theme as success
        });
      });
  }

  // component JSX
  return (
    <section
      id="contact"
      className="py-24 px-[12vw] md:px-[7vw] lg:px-[16vw] font-sans bg-skills-gradient"
    >
      {/* toast container to show toast messages */}
      <ToastContainer />

      {/* heading */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">CONTACT</h2>
        <div className="w-32 h-1 bg-indigo-600 rounded-2xl mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-sm font-semibold">
          Let's connect — I'm always open to new ideas, feedback, or a friendly chat!
        </p>
      </div>

      <div className="w-fit mx-auto mb-8 flex items-center gap-3 rounded-lg border border-gray-700 bg-gray-900 px-5 py-3 text-gray-300">
        <FaEnvelope className="text-indigo-400" aria-hidden="true" />
        <a
          href="mailto:yadavsatyam2031@gmail.com"
          className="text-sm hover:text-indigo-400 transition-colors"
        >
          yadavsatyam2031@gmail.com
        </a>
      </div>

      {/* contact form */}
      <div className="mt-8 w-full max-w-md mx-auto bg-gray-900 p-6 rounded-lg shadow-lg border border-gray-700">
        <h3 className="text-xl text-center text-white">Connect with Me 🚀</h3>

        <form ref={formRef} onSubmit={sentEmail} className="mt-4 flex flex-col space-y-4">
          
          {/* email input */}
          <input
          required
            type="email"
            name="user_email"
            placeholder="Your Email"
            className="text-xs w-full p-2 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500"
          />

          {/* name input */}
          <input
          required
            type="text"
            name="user_name"
            placeholder="Your Name"
            className="text-xs w-full p-2 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500"
          />

          {/* subject input */}
          <input
           required
            type="text"
            name="subject"
            placeholder="Subject"
            className="text-xs w-full p-2 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500"
          />

          {/* message box */}
          <textarea
           required
            name="message"
            rows={4}
            placeholder="Write your message here..."
            className="text-xs w-full p-2 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none"
          />

          {/* send button */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-purple-600 to-pink-500 py-2 text-white font-semibold rounded-md hover:opacity-90 transition hover:cursor-pointer "
          >
            Send
          </button>
        </form>
      </div>
    </section>
  );
};
