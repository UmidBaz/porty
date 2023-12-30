import React, { useState, useEffect } from 'react';
import './Cards.css';

function Cards() {

  return (
    <div className='cards'>
      <div className="card-container" id="cardContainer">
        <div className="card-wrapper">
          <div className="card">project 1
            <div className="exp-card">Explanation Card</div>
          </div>
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
