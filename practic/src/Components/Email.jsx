import React, { useState } from "react";

export default function Email(props) {
  return (
    <div className="email-container">
      <input
        type="email"
        className="email"
        name="email"
        placeholder="Email"
        onChange={props.changeemail}
        value={props.email}
      />
    </div>
  );
}
