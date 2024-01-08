import React from 'react';
import { Link } from 'react-router-dom';

import './Cards.css';

function Cards() {

  return (
    <div id='cards' className='cards'>
      <div className="card-container" id="cardContainer">
        <div className="card-wrapper">
        <Link to="/lightproj" className="card">
            Project 1
            <div className="exp-card">Explanation Card</div>
        </Link>
        </div>
        <div className="card-wrapper">
          <div className="card">Project 2
            <div className="exp-card">Explanation Card</div>
          </div>
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
