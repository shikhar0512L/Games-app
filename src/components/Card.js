import React from 'react';
  
export default function Card(props) {  
const {title,description,btnTitle,imgSrc,link} = props;  

    return (
        <div className="card" style={{width: "18rem"}}>
        <img src={imgSrc} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <a href={link} className="btn btn-primary">{btnTitle}</a>
        </div>
      </div>
      )
}