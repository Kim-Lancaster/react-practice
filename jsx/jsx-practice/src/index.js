import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const myName = 'Kim Lancaster'
const varToInsert = 'Person'
const varToInsert2 = 'Thing'
const date = new Date().getFullYear();
const greyImage = "https://picsum.photos/200?grayscale"
const customStyle = {
  color: 'green',
  border: '1px solid orange',
  fontStyle: 'italic'
}
const rand = Math.floor(Math.random() * 2);
if(rand === 1){
  customStyle.color = 'blue'
}

const sampleContent = (
  <div>
    <h1 className="heading">
      Hello and Welcome {varToInsert} or {varToInsert2}
    </h1>
    <ul>
      <li>navigation 1</li>
      <li>navigation 2</li>
      <li>navigation 3</li>
    </ul>
    <div className="img-container">
      <img src={greyImage} alt="random image"/>
      <img src={greyImage} alt="random image"/>
      <img src={greyImage} alt="random image"/>
    </div>
    <p>Here goes the rest of the website, YAY!</p>
    <p>Blah blah blah blah</p>
    <p style={customStyle}>created by {myName}</p>
    <p>copyright {date}</p>
  </div>
)

ReactDOM.render(sampleContent, document.getElementById('root'));