import React from 'react';
import './Contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane, faSquarePhoneFlip} from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
  return (
    <div id="contact">
      <div className="contact-container">
        <div className="row">
          <div className="contact-left" data-aos="fade-up-right">
            <h1 className="sub-title">Contact Us</h1>
            <h2>
              <FontAwesomeIcon icon={faPaperPlane} className="fa-paper-plane" />
              &nbsp;&nbsp;Demo@gmail.com
            </h2>
            <h2>
              <FontAwesomeIcon icon={faSquarePhoneFlip} className="fa-square-phone-flip" />
              &nbsp;&nbsp;9999-9999-99
            </h2>
          </div>
          <div className="contact-right" data-aos="fade-up-left">
            <form>
              <input type="text" name="Name" placeholder="Your Name" required />
              <input type="Email" name="Email" placeholder="Your Email" required />
              <textarea name="massage" rows="6" placeholder="Your Message"></textarea>
              <button type="submit" className="btn btn2">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
