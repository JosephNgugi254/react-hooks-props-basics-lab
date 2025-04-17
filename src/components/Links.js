import React from "react";

function Links(props) {
  return (
    <div>
      <h3>Links</h3>
      {props.bio && <p>{props.bio}</p>}
      <a href={props.github}>{props.github}</a>
      <a href={props.linkedin}>{props.linkedin}</a>
    </div>
  );
}

export default Links;