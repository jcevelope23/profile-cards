import React from 'react';
import './Contact.css';

const Contact = ({ nimi, puhelin, sposti }) => {
  return (
    <div className="contact-card">
      <h2>{nimi}</h2>
      <p>{puhelin}</p>
      <p>{sposti}</p>
    </div>
  );
};

export default Contact;
