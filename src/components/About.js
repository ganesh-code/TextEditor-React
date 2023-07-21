import React from "react";

export default function About(props) {
  let height = {
    height: "100vh",
  };
  return (
    <div style={props.style}>
      <div style={height}>
        <h1 className="p-4">This is About US</h1>
      </div>
    </div>
  );
}
