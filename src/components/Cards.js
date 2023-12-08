import React, { useState, useEffect } from 'react';
import './Cards.css';

function Cards() {

  return (
    <div className='cards'>
      <div class="card-container" id="cardContainer">
        <div className="card-wrapper">
          <div class="card">project 1
            <div class="exp-card">Explanation Card</div>
          </div>
        </div>
        <div className="card-wrapper">
          <div class="card">Project 2
            <div class="exp-card">Explanation Card</div>
          </div>
        </div>
        <div className="card-wrapper">
          <div class="card">Project 3
            <div class="exp-card">Explanation Card</div>
          </div>
        </div>
        <div className="card-wrapper">
          <div class="card">Project 4
            <div class="exp-card">Explanation Card</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards
