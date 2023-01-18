import React, { useState } from 'react';
import { buttonVariants } from '../variants/buttonVariants';
import { motion } from 'framer-motion';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
    setErrors({
      ...errors,
      [event.target.name]: '',
    });
  };

  const validate = () => {
    const errors = {};
    if (!formData.name) {
      errors.name = 'Name is required';
    }
    if (!formData.email) {
      errors.email = 'Email is required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)) {
      errors.email = 'Invalid email address';
    }
    if (!formData.message) {
      errors.message = 'Message is required';
    }
    return errors;
  };

  return (
    <div className='form-div'>
      <form className="form-container" action="https://formspree.io/f/xdovkdoz"
        method="POST">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          onChange={handleChange}
          value={formData.name}
          className={`form-input ${errors.name && 'form-input-error'}`}
        />
        {errors.name && <div className="form-error">{errors.name}</div>}

        <label htmlFor="email" className="form-label">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          onChange={handleChange}
          value={formData.email}
          className={`form-input ${errors.email && 'form-input-error'}`}
        />
        {errors.email && <div className="form-error">{errors.email}</div>}

        <label htmlFor="message" className="form-label">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          onChange={handleChange}
          value={formData.message}
          className={`form-textarea ${errors.message && 'form-input-error'}`}
        />
        {errors.message && <div className="form-error">{errors.message}</div>}
        <motion.button variants={buttonVariants} whileHover='hover' type="submit" className="form-button">
          Submit
        </motion.button>
      </form>
    </div>
  );
};

export default ContactForm;


