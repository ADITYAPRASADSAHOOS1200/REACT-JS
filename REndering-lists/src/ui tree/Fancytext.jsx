import React from "react";
import "./UI.css"
export default function Fancytext({title,text}) {

  return title ? <h1 className="title">{text}</h1>:<h3 className="text">{text}</h3>

}
