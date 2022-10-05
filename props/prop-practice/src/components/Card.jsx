import React from "react";
import Avatar from "./Avatar";
import Paragraph from "./Paragraph";

function Card(props) {
    return(
    <div className='contact-card'>
      <h2>{props.name}</h2>
        <Avatar src={props.src} alt={props.alt}/>
        <Paragraph paragraphInfo={props.phone} />
        <Paragraph paragraphInfo={props.email} />
        
    </div>
    );
  }

  export default Card;