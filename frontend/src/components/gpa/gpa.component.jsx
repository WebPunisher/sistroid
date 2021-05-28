import React from "react";
import './gpa.styles.scss';


const Gpa = props => {
  return (
    <div className="gpa">
        {props.gpa}
    </div>
  );
};

export default Gpa;