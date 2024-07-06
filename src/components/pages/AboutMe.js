import React from 'react';
import "../../styles/AboutMe.css";
import profileImage from "../../images/profile-image.jpg"

export default function AboutMe() {
  return (
    <div className="aboutme-container">
      <h1 className='aboutme-title'>About Me</h1>
      <figure className='profile-image-container'>
        <img
          className="profile-image"
          src={profileImage}
          alt="Felix Abdullaev Profile image"
        ></img>
      </figure>
      <p className='aboutme-content'>
        My name is Felix, I live in Sydney and working as an Senior Java Engineer for
        10+ years. I have great passion in programming that's why I'm
        currently extending my skill set by coding various things in my free time,
        providing a speech about copilot, visiting Java and JS meetups and knowledge
        sharing through blogs and articles. Outside of coding and developing something,
        I enjoy sport activities, normally spend my evening or early mornings on it everyday.
        And those become a part of my daily routine.
        <br></br>
        <br></br>I am an enthusiastic, self-motivated, reliable, responsible and
        hard working person. I am a mature team worker and adaptable to all
        challenging situations. I am able to work well both in a team
        environment as well as using own initiative. I am able to work well
        under pressure and adhere to strict deadlines.
      </p>
    </div>
  );
}
