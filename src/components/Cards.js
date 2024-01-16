import React from 'react';
import { Link } from 'react-router-dom';
import './Cards.css';
import lightshotimage from '../assets/lightshotimage.png'
import pastejackingimage from '../assets/pastejacking-attack.png'

function Cards() {

  return (
    <div id='cards' className='cards'>
      <div className="card-container" id="cardContainer">
        <div className="card-wrapper">
          <Link to="/lightproj" className="card" 
          style={{ backgroundImage: `url(${lightshotimage})`, 
          backgroundSize: 'cover',
          backgroundPosition: 'center'}}
          >
              <div className="exp-card">
                <p>Get a random persons screen shot from LightShot</p>
              </div>
          </Link>
          </div>
        <div className="card-wrapper">
          <Link to="/pasteJack" className="card"
          style={{ backgroundImage: `url(${pastejackingimage})`, 
          backgroundSize: 'cover',
          backgroundPosition: 'center'}}
          >
            <div className="exp-card">
              <p>Manipulate a user's clipboard under certain conditions</p>
              </div>
          </Link>
        </div>
        <div className="card-wrapper">
          <div className="card">Project 3
            <div className="exp-card">Explanation Card</div>
          </div>
        </div>
        <div className="card-wrapper">
          <div className="card">Project 4
            <div className="exp-card">Explanation Card</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards
