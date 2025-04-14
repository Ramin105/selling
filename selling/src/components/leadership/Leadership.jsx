import React from 'react';
import styles from './Leadership.module.css';

const Leadership = () => {
  const teamMembers = [
    {
      name: "John Rooster",
      position: "CO-FOUNDER, PRESIDENT",
      bio: "Nisi at consequatur unde molestiae quidem provident voluptatum deleniti quo iste error eos est proesentium distinctio cupiditate tempore suscipit inventore deserunt tenetur.",
      image: "https://preview.colorlib.com/theme/selling/images/person_2.jpg"
    },
    {
      name: "Tom Sharp",
      position: "CO-FOUNDER, COO",
      bio: "Nisi at consequatur unde molestiae quidem provident voluptatum deleniti quo iste error eos est proesentium distinctio cupiditate tempore suscipit inventore deserunt tenetur.",
      image: "https://preview.colorlib.com/theme/selling/images/person_2.jpg"
    },
    {
      name: "Winston Hodson",
      position: "MARKETING",
      bio: "Nisi at consequatur unde molestiae quidem provident voluptatum deleniti quo iste error eos est proesentium distinctio cupiditate tempore suscipit inventore deserunt tenetur.",
      image: "https://preview.colorlib.com/theme/selling/images/person_2.jpg"
    }
  ];

  return (
    <div className={styles.leadershipContainer}>
        <p style={{textAlign:'center',opacity:'0.5'}}>Team</p>
      <h1 className={styles.title}>Leadership</h1>
      <div className={styles.cardsContainer}>
        {teamMembers.map((member, index) => (
          <div key={index} className={styles.card}>
            <img src={member.image} alt={member.name} className={styles.cardImage} />
            <div className={styles.cardContent}>
              <h3 className={styles.cardName}>{member.name}</h3>
              <p className={styles.cardPosition}>{member.position}</p>
              <p className={styles.cardBio}>{member.bio}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Leadership;