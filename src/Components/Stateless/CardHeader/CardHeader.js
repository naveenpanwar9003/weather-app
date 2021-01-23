import React from "react";
import "./card-header.css";

const CardHeader = ({ title }) => {
  return (
    <div className='card-header-wrapper'>
      <h2 className='card-header'>{title}</h2>
    </div>
  );
};

export default CardHeader;
