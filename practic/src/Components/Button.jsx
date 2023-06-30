import React from "react";

export default function Button(props) {
  return (
    <div className="btn-container">
      <button className="btn" onClick={props.click} >+Add</button>
    </div>
  );
}
