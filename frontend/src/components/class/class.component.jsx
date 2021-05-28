import React from "react";
import './gpa.styles.scss';


const Class = props => {
  return (
    <div className="class">
        {props.grade}
    </div>
  );
};

export default Class;