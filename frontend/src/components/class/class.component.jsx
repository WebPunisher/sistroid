import React from "react";
import './class.styles.scss';


const Class = props => {
  return (
    <div className="class">
        <span className="class_name">{props.class_name}</span> &emsp;
        <span className="crn">{props.crn} </span>&emsp;
        <span className="credits">{props.credits}</span>&emsp;
        <span className="grade">{props.grade ? props.grade : null}</span>
    </div>
  );
};

export default Class;