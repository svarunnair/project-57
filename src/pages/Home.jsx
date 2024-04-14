import React from 'react';
import "./Home.css"

function Home() {
  return (
    <div>
      <div
        style={{
          width: '200px',
          height: '200px',
          borderRadius:100,
          border: '2px solid red',
          animationName: 'myframes', // Specify the name of the keyframes
          animationDuration: '2s', // Set animation duration
          animationTimingFunction: "ease-out", // Set animation timing function
          animationIterationCount: 'infinite' // Make animation infinite
        }}
      >
        Animated Box
      </div>
    </div>
  );
}

export default Home;
