import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_g9bph2k', 'template_12v0mll', form.current, 'Xa4kNMtt3hMuWFBzX')
      .then((result) => {
          console.log(result.text);
       alert("Our Team Will Contact You Soon!!")
      }, (error) => {
          console.log(error.text);
      });
    };
  return (
    <React.Fragment>

    <main>
    <section id="contact" class="section-bg">
      <div class="container">

        <div class="section-header">
          <h3>Contact Us</h3>
          
        </div>

        <div class="row contact-info">

          <div class="col-md-4">
            <div class="contact-address">
              <i class="bi bi-geo-alt"></i>
              <h3>Address</h3>
              <address>A108 Adam Street, NY 535022, USA</address>
            </div>
          </div>

          <div class="col-md-4">
            <div class="contact-phone">
              <i class="bi bi-phone"></i>
              <h3>Phone Number</h3>
              <p><a href="tel:+155895548855">+1 5589 55488 55</a></p>
            </div>
          </div>

          <div class="col-md-4">
            <div class="contact-email">
              <i class="bi bi-envelope"></i>
              <h3>Email</h3>
              <p><a href="mailto:afas.webqueries@gmail.com">afas.webqueries@gmail.com</a></p>
            </div>
          </div>

        </div>

        <div class="form">
          <form action="forms/contact.php" method="post" role="form" class="php-email-form" ref={form} onSubmit={sendEmail}>
            <div class="row">
              <div class="form-group col-md-6">
                <input type="text" name="name" class="form-control" id="name" placeholder="Your Name" required />
              </div>
              <div class="form-group col-md-6">
                <input  class="form-control" name="phone" id="phone" placeholder="Your Phone Number" required />
              </div>
            </div>
            <div class="form-group">
              <input type="text" class="form-control" name="service" id="service" placeholder="Services" required />
            </div>
            <div class="form-group">
              <textarea class="form-control" name="requirements" rows="5" placeholder="Your Requirements" required></textarea>
            </div>
            <div class="my-3">
              <div class="loading">Loading</div>
              <div class="error-message"></div>
              <div class="sent-message">Your message has been sent. Thank you!</div>
            </div>
            <div class="text-center"><button type="submit">Send Message</button></div>
          </form>
        </div>

      </div>
    </section>

  </main>
    </React.Fragment>
  )
}

export default Contact;
