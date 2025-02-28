import React, { useState } from 'react';
import './BookingForm.css';  // Окремий CSS файл для стилізації форми

const BookingForm = ({ carId, onSubmitSuccess }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    rentalDays: 1,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, email, phone, rentalDays } = formData;
    
    // Логіка для відправлення даних на сервер (тут використовується Axios)
    try {
      const response = await fetch('https://car-rental-api.goit.global/api/bookings', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          carId,
          name,
          email,
          phone,
          rentalDays,
        }),
      });

      if (response.ok) {
        onSubmitSuccess(); // Виклик функції після успішного бронювання
        alert('Booking successful!');
      } else {
        alert('Booking failed. Please try again.');
      }
    } catch (error) {
      alert('Error: ' + error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="booking-form">
      <h3>Book this Car</h3>
      
      <div className="form-group">
        <label htmlFor="name">Full Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="phone">Phone Number:</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="rentalDays">Rental Days:</label>
        <input
          type="number"
          id="rentalDays"
          name="rentalDays"
          value={formData.rentalDays}
          onChange={handleChange}
          min="1"
          required
        />
      </div>

      <button type="submit" className="submit-btn">
        Book Now
      </button>
    </form>
  );
};

export default BookingForm;
