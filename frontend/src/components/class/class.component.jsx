import React from "react";
import './class.styles.scss';


const Class = props => {
  return (
    <div className="class">
        <span className="class_name">Class Name: {props.class_name}</span> &emsp;
        <span className="crn">CRN : {props.crn} </span>&emsp;
        <span className="credits">Credits : {props.credits}</span>&emsp;
        <span className="grade">{props.grade}</span>&emsp;
        <span className="semester">{props.semester}</span>
    </div>
  );
};

export default Class;