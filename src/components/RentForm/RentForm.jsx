import React, { useState } from 'react';
import styles from './RentForm.module.css';
import PropTypes from 'prop-types';

const RentForm = ({ carId }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      `Car with ID ${carId} rented successfully!\nName: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}`
    );
    setFormData({ name: '', email: '', phone: '' });
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleChange}
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        required
      />
      <input
        type="tel"
        name="phone"
        placeholder="Phone"
        value={formData.phone}
        onChange={handleChange}
        required
      />
      <button type="submit">Rent</button>
    </form>
  );
};

RentForm.propTypes = {
  carId: PropTypes.number.isRequired,
};

export default RentForm;