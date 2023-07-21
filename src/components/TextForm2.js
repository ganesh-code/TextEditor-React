import React, { useState } from "react";
import PropTypes from "prop-types";

export default function TextForm2(props) {
  // -----------------------------------------------------------------------
  // handles
  // -----------------------------------------------------------------------
  const handleUpClick = () => {
    // console.log('upper case was clicked ');
    let newText = text.toUpperCase();
    setText(newText);
    if(text.length=== 0){
      props.showAlert("Enter Any text","danger")
    }
    else{
      props.showAlert("Converted to Upper Case","success")
    }
  };

  const handleLowClick = () => {
    // console.log('upper case was clicked ')
    let newText = text.toLowerCase();
    setText(newText);
    if(text.length=== 0){
      props.showAlert("Enter Any text","danger")
    }
    else{
      props.showAlert("Converted to Lower Case","success")
    }
  };

  const handleClearClick = () => {
    setText("");
    if(text.length=== 0){
      props.showAlert("Enter Any text","danger")
    }
    else{
      props.showAlert("Text Clear","success")
    }
  };

  const undo = () => {
    const words = text.split(" ");
    // console.log(words);
    if (words.length > 0) {
      words.pop(); // Remove the last word from the words array
      const newText = words.join(" "); // Join the words back to form the new text
      setText(newText); // Update the state with the new text
    }

    if(text.length=== 0){
      props.showAlert("Enter Any text","danger")
    }
    else{
      props.showAlert("Undergo ","success")
    }
  };

  const handleReverseClick = () => {
    let reversedText = text.split("").reverse().join("");
    setText(reversedText);

    if(text.length=== 0){
      props.showAlert("Enter Any text","danger")
    }
    else{
      props.showAlert("Text reverse","success")
    }
  };

  const handleCopy = () => {
    let copyText = text;
    navigator.clipboard.writeText(copyText);

    if(text.length=== 0){
      props.showAlert("Enter Any text","danger")
    }
    else{
      props.showAlert("Text Copied","success")
    }
  };

  const handleRemoveSpace = () => {
    let removeSpace = text.split(/[ ]+/);
    setText(removeSpace.join(" "));
    // console.log(removeSpace)
    if(text.length=== 0){
      props.showAlert("Enter Any text","danger")
    }
    else{
      props.showAlert("Space Removed","success")
    }
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  // use state hook used
  const [text, setText] = useState("");
  
    
  
  
  // text = "Edited Text" //wrong Way to change the state of text
  // setText("Edited Text") //correct Way to change the state of text
  let height = {
    height: "100vh",
  };
  
  return (
    <div style={props.style}>
      <div style={height}>
        <div className="container">
          <h1 className="pt-5">{props.heading}</h1>
          <div className="mb-3 form-floating">
            <textarea
            className="form-control p-2 m-0"
              name="form-control"
              value={text}
              onChange={handleOnChange}
              // id="myBox"
              rows="8"
              style={props.style}
            ></textarea>
          </div>
          <button className={`btn btn-${props.mode} mx-2 my-2`} onClick={handleUpClick}>
            To upper case
          </button>
          <button className={`btn btn-${props.mode} mx-2 my-2`} onClick={handleLowClick}>
            To Lower case
          </button>
          <button className={`btn btn-${props.mode} mx-2 my-2`} onClick={handleClearClick}>
            clear
          </button>
          <button className={`btn btn-${props.mode} mx-2 my-2`} onClick={undo}>
            undo
          </button>
          <button className={`btn btn-${props.mode} mx-2 my-2`} onClick={handleReverseClick}>
            Reverse Para
          </button>
          <button className={`btn btn-${props.mode} mx-2 my-2`} onClick={handleCopy}>
            copy
          </button>
          <button className={`btn btn-${props.mode} mx-2 my-2`} onClick={handleRemoveSpace}>
            Remove Extra space
          </button>
        </div>
        <div className="container my-3">
          <h1>Text summery</h1>
          <p>
            {text.split(/[ ]+/).filter(item => item !== "").join(" ").length} charecters and {text.split(/[ ]+/).filter(item => item !== "").length} Words
          </p>
          <p> {0.008 * text.split(/[ ]+/).filter(item => item !== "").length} minutes to read above text</p>
        </div>
        <div className="container my-3">
          <h1>Preview</h1>
          <p>
            {text.length > 0
              ? text
              : "Enter some thing in above text area to preview it here"}
          </p>
        </div>
      </div>
    </div>
  );
}

TextForm2.prototype = {
  Heading: PropTypes.string,
};
