import React from 'react';
import './index.css';

const Profile = ({ image, nimi, puhelin, sposti }) => {
  return (
    <div className="profile-card">
      <img src={image} alt={nimi} />
      <h2>{nimi}</h2>
      <p>{puhelin}</p>
      <p>{sposti}</p>
    </div>
  );
};

export default Profile;
