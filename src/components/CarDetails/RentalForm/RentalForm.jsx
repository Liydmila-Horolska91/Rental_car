import React, { useState } from 'react';
import styles from './RentalForm.module.css';

const RentalForm = ({ carId, onRentalSuccess }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Тут має бути виклик API для оренди автомобіля
    // ...
    onRentalSuccess();
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Ім'я"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="tel"
        placeholder="Телефон"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button type="submit">Орендувати</button>
    </form>
  );
};

export default RentalForm;