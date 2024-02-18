import React from "react";
import "./UI.css"

export default function Fancy({title,text}) {
  return title ? <h3 className="title">{text}</h3>:<h4 className="text">{text}</h4>
}
