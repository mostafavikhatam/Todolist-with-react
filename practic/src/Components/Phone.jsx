import React, { useState } from "react";

export default function Phone(props) {

  return (
    <div className="phone-container">
      <input
        type="tel"
        className="phone"
        placeholder="Phone"
        name="phone"
        onChange={props.changeNumber}
        value={props.number}
      />
      
    </div>
  );
}
