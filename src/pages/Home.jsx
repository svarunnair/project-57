import React from 'react';
import "./Home.css"
import { red } from '@mui/material/colors';

function Home() {
  return (
    <div style={{position:"relative" ,border:"2px solid green",display:"flex",
      }}>
      <div
        style={{
          width: '100px',
          height: '100px',
          position:"absolute",
          borderRadius:100,
        
          // border: '2px solid red',
          animationName: 'myframes', // Specify the name of the keyframes
          animationDuration: '2s', // Set animation duration
          animationTimingFunction: "linear", // Set animation timing function
          animationIterationCount: 'infinite' // Make animation infinite
        }}
      >    
      </div>

      <div style={{width:"500px",height:"500px",background:"yellow"}}></div>
      <div style={{width:"50px",height:"500px",background:"green" ,position:"relative",opacity:.5}}></div>
    </div>
  );
}

export default Home;
