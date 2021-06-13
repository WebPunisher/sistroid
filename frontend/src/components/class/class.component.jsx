import React from "react";
import './class.styles.scss';


const Class = props => {
  return (
    <div className="class">
        <span className="class_name">{props.class_name}</span> &emsp;
        <span className="class_desc"> {props.class_desc}</span> &emsp;
        <span className="crn">CRN : {props.crn} </span>&emsp;
        <span className="credits">Credits : {props.credits}</span>&emsp;
        <span className="grade">{props.grade ? 'grade: '+props.grade : null}</span>&emsp;
        <span className="semester">{props.semester ? 'semester: '+props.semester : null}</span>&emsp;
        <span className="teacher">{props.teacher ? 'teacher: '+props.teacher : null}</span>
    </div>
  );
};

export default Class;