import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <div className='contact-container' id='contact'>
            <h2>Get in touch with Me</h2>

            <div className='form-container'>
                <form action="https://formsubmit.co/armankabir8@gmail.com" method="POST">
                    <div>
                        <p>Name</p>
                        <input type="text" name="name"  />
                    </div>
                    <div>
                        <p>Email</p>
                        <input type="email" name="email"  />
                    </div>
                    <div>
                        <p>Your Message</p>
                        <textarea name="message" id="" cols="30" rows="10"></textarea>
                    </div>
                    <button type="submit">Send</button>
                </form>
            </div>
        </div>
    );
};

export default Contact;