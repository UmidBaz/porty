import React, { useEffect } from 'react';
import './About.css';

const About = () => {


  useEffect(() => {
    const aboutSection = document.querySelector('.about');
  
    const observer = new IntersectionObserver(
      (entries) => {
        // entries is an array of observed elements
        const isVisible = entries[0]?.isIntersecting;
        
        if (isVisible) {
          aboutSection.classList.add('visible');
        } else {
          aboutSection.classList.remove('visible');
        }
      },
      {
        threshold: 0.2, 
      }
      );
  
      if (aboutSection) {
        observer.observe(aboutSection);
      }
  
      return () => {
        if (aboutSection) {
        observer.unobserve(aboutSection);
      }
    };
  }, []);



  return (
    <>
      <div id='about' className='about'>
        <h1>Developer's Journey</h1>
        <div className='para-wrapper'>
          <h2>Crafting Innovative Solutions in Code</h2>
          <p>
          In the realm of coding and cybersecurity, I embark on 
          a relentless journey to create impactful and 
          innovative solutions. My mission is to blend 
          creativity with technical expertise, sculpting 
          projects that not only function seamlessly but also 
          challenge the status quo. As a passionate developer, 
          I seek to contribute to the ever-evolving landscape 
          of technology by delivering projects that resonate 
          with both form and function.
          </p>
        </div>
        <div className='para-wrapper'>
          <h2>A Commitment to Cybersecurity Excellence</h2>
          <p>
          In the expansive realm of cybersecurity, I stand as a 
          guardian of digital frontiers. My goals extend beyond 
          the mere execution of code; I am committed to 
          fortifying the digital world against threats. With a 
          focus on security-conscious coding practices, I 
          strive to create projects that not only showcase 
          technical prowess but also prioritize user safety. 
          Join me on this journey as we navigate the intricate 
          pathways of the digital landscape, ensuring a secure 
          online experience for all.
          </p>
        </div>
        <h1>The Digital Frontier</h1>
        <h1>Pioneering Possibilities</h1>
        <div className='para-wrapper'>
          <h2>Enabling Interactivity Through Code</h2>
          <p>
          Welcome to a space where lines of code transform into 
          interactive experiences. My goal is to pioneer 
          possibilities in coding, crafting projects that 
          invite users to engage, explore, and learn. Whether 
          it's a cybersecurity endeavor or a coding masterpiece, 
          each project is a testament to the limitless potential 
          of technology. Join me on this exploration of code, 
          where innovation meets interaction, and possibilities 
          are limitless.
          </p>
        </div>
      </div>
    </>
  )
}

export default About