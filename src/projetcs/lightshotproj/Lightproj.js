import React, { useState } from 'react';
import './Lightproj.css';

const light_link = 'https://prnt.sc/';

function generateRandomString() {
  const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
  let randomString = '';
  for (let i = 0; i < 6; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    randomString += characters.charAt(randomIndex);
  }
  return randomString;
}

const Lightproj = () => {
  const [imageUrl, setImageUrl] = useState('');

  const random_pic = light_link + generateRandomString();

  function getPicture(targetUrl) {
    fetch(targetUrl) 
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.text();
      })
      .then(html => {
        const parser = new DOMParser();
        const htmlDoc = parser.parseFromString(html, 'text/html');

        const underImageDiv = htmlDoc.querySelector('.under-image');
        if (underImageDiv) {
          const imgElement = underImageDiv.querySelector('img');
          if (imgElement) {
            const imageUrl = imgElement.getAttribute('src');
            setImageUrl(imageUrl);
          } else {
            console.error('No image found in the under-image div');
          }
        } else {
          console.error('No div with class "under-image" found');
        }
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }

  const showScreenshot = () => {
    getPicture(random_pic);
  };



  return (
    <div className='screen-wrap'>
        <h1>Random Print Screen Using LightShot</h1>
        <h4>What is LightShot?</h4>
        <p> LightShot is a screenshot tool that allows users to capture screenshots on their computers. 
          It's known for its user-friendly interface and additional features such as the ability to annotate screenshots 
          with text, lines, arrows, and shapes. LightShot is often used for quickly capturing and sharing screenshots.
        </p>
        <h4>What is the point?</h4>
        <p>The purpose of the program is to generate random links to screenshots on LightShot. This could be for various 
          reasons such as exploring and discovering random content, sharing interesting or funny screenshots with others, 
          or simply for the curiosity of seeing what images others have captured.</p>
        <h4>However...</h4>
        <p>
        It also serves as a demonstration of cybersecurity risk. By randomly accessing screenshots, it highlights the 
        potential exposure of sensitive or private information that individuals may have unintentionally shared.
        </p>
        <button onClick={showScreenshot} data="Show Screenshot"></button>
        
        {imageUrl && (
        <div>
          <img src={imageUrl} alt="Fetched Screenshot" />
        </div>
        )}

    </div>
  )
}

export default Lightproj