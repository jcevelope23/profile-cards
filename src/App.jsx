import React from 'react';
import Profile from './Profile';
import Contact from './Contact';

const userData = [
    {
      image: "/src/assets/girl1.jpg", 
      nimi: "Oma nimi 1",
      puhelin: "123-456-7890",
      sposti: "etunimi.sukunimi@esim.com"
    },
    {
      image: "/src/assets/girl2.jpg",
      nimi: "Oma nimi 2",
      puhelin: "123-456-7891",
      sposti: "etunimi.sukunimi@esim.com"
    },
    {
      image: "/src/assets/girl3.jpg",
      nimi: "Oma nimi 3",
      puhelin: "123-456-7892",
      sposti: "etunimi.sukunimi@esim.com"
    },
    {
      image: "/src/assets/girl4.jpg",
      nimi: "Oma nimi 4",
      puhelin: "123-456-7893",
      sposti: "etunimi.sukunimi@esim.com"
    }
  ];
  

const App = () => {
  return (
    <div className="App">
      {userData.map((user, index) => (
        <Profile
          key={index}
          image={user.image}
          nimi={user.nimi}
          puhelin={user.puhelin}
          sposti={user.sposti}
        />
      ))}
    </div>
  );
};

export default App;
