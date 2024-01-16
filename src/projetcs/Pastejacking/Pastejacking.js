import React, { useEffect } from 'react';
import './Pastejacking.css';

let copyEventListener; 

function customizeCopyEvent() {
  copyEventListener = function(e) {
    e.clipboardData.setData('text/plain', 'That\'s not what you copied!\r\n');
    e.preventDefault();
  };
  document.addEventListener('copy', copyEventListener);
}

function removeCopyEventListener() {
  if (copyEventListener) {
    document.removeEventListener('copy', copyEventListener);
    copyEventListener = null; 
  }
}

const Pastejacking = () => {

  useEffect(() => {
    return () => {
      removeCopyEventListener();
    };
  }, []);

  return (
    <div className='screen-wrap'>
      <h1>Unveiling Pastejacking</h1>
      <h4>What is Pastejacking?</h4>
      <p>
        In the realm of web development, browsers have bestowed developers with the power to automatically 
        manipulate a user's clipboard under certain conditions, specifically triggered by browser events. This 
        feature, while seemingly innocent, opens the door to a deceptive technique known as "Pastejacking."
      </p>
      <h4>Check it out!</h4>
      <p>
        If you're interested in delving deeper into the intricacies of Pastejacking and exploring practical 
        examples, check out the GitHub repository at <a href="https://github.com/dxa4481/Pastejacking"><nobr>https://github.com/dxa4481/Pastejacking</nobr></a>. The repository 
        provides comprehensive insights into the concept, implementation, and potential risks associated with 
        Pastejacking. The README file offers detailed explanations, code samples, and demonstrations, making it 
        an invaluable resource for anyone seeking to understand and guard against this clipboard manipulation 
        technique. Dive into the repository to enhance your understanding of Pastejacking and bolster your 
        knowledge in the realm of web security.
      </p>
      <h4>Try it yourself</h4>
      <textarea name="the-textarea" placeholder="Start Typin..." autofocus></textarea>
      <div className='button-wrapper'>
          <button onClick={customizeCopyEvent} data="Turn ON"></button>
          <button onClick={removeCopyEventListener} data="Turn OFF"></button>
      </div>
    </div>
  )
}

export default Pastejacking




