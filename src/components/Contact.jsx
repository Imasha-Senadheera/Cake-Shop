import React from "react";
import "../styles/Contact.css";

function Contact() {
  return (
    <section id="contact-section" className="contact">
      <h2>Contact Us</h2>
      <div className="contact-details">
        <div className="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63371.10055700817!2d79.80349651167782!3d6.927158326498249!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae25bcfdee7764d%3A0xdf97fbb66912b0c5!2sOne%20Galle%20Face%20Mall!5e0!3m2!1sen!2slk!4v1721207710179!5m2!1sen!2slk"
            width="600"
            height="450"
            style={{ border: "0" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Maps"
          ></iframe>
        </div>
        <div className="message-form">
          <h3>Send Us a Message</h3>
          <form>
            <input type="text" id="name" name="name" placeholder="Name" />
            <input type="email" id="email" name="email" placeholder="Email" />
            <textarea
              id="message"
              name="message"
              placeholder="Message"
            ></textarea>
            <button type="submit">Send</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
