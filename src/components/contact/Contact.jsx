import React, { useRef } from 'react';
import './contact.css';
import { HiOutlineMail } from 'react-icons/hi';
import { RiMessengerLine } from 'react-icons/ri';
import { TbBrandLinkedin } from 'react-icons/tb';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_7hkta68',           // ✅ Replace with your EmailJS service ID
        'template_wfdzpf1',          // ✅ Replace with your EmailJS template ID
        form.current,
        'P1IKNznf6iIZqspzG'          // ✅ Replace with your EmailJS public key
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset(); // Clear the form after success
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        {/* === Contact Options === */}
        <div className="contact__options">
          <article className="contact__option">
            <HiOutlineMail className='contact__option-icon' />
            <h4>Email</h4>
            <h5>arvindsaidooda@gmail.com</h5>
            <a href="mailto:arvindsaidooda@gmail.com" target="_blank" rel="noreferrer">Send a message</a>
          </article>

          <article className="contact__option">
            <RiMessengerLine className='contact__option-icon' />
            <h4>Messenger</h4>
            <h5>Arvind Sai Dooda</h5>
            <a href="https://m.me/arvind-sai-dooda.trying" target="_blank" rel="noreferrer">Send a message</a>
          </article>

          <article className="contact__option">
            <TbBrandLinkedin className='contact__option-icon' />
            <h4>LinkedIn</h4>
            <h5>Arvind Sai Dooda</h5>
            <a href="https://www.linkedin.com/in/arvind-sai-dooda/" target="_blank" rel="noreferrer">Send a message</a>
          </article>
        </div>

        {/* === Contact Form === */}
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Rey Reynolds"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="example@example.com"
            required
          />
          <textarea
            name="message"
            rows="7"
            placeholder="Hi Arvind, I have a question..."
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
