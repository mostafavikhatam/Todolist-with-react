import React from "react";

export default function Search(props) {
  return(
    <input
    type="search"
    className="search"
    placeholder="search..."
    name="search"
   value={props.search}
   onChange={props.changeSearchhandler}
  />
  )
 
}
