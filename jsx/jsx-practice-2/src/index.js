import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

let hour = new Date().getHours();
console.log(hour)
let content = '';
let styling = {
  color: ''
}

if(hour < 12){
  content = 'Good Morning';
  styling.color = 'red';
  
} else if (hour >= 12 && hour <= 18){
  content = 'Good Afternoon';
  styling.color = 'green';
  
} else {
  content = 'Good Night';
  styling.color = 'blue';
}



ReactDOM.render(<h1 style={styling}>{content}</h1>,
  document.getElementById('root')
);
