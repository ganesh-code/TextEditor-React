import React, { useState } from "react";
import PropTypes from "prop-types";

export default function TextForm(props) {
// -----------------------------------------------------------------------
// handles
// -----------------------------------------------------------------------
  const handleUpClick = () => {
    // console.log('upper case was clicked ');
    let newText = text.toUpperCase();
    setText(newText);
  };
  
  const handleLowClick = () => {
    // console.log('upper case was clicked ');
    let newText = text.toLowerCase();
    setText(newText);
  };

  const handleClearClick = () => {
    setText("");
  };

  const undo = () => {
    const words = text.split(" ");
    console.log(words)
    if (words.length > 0) {
      words.pop(); // Remove the last word from the words array
      const newText = words.join(" "); // Join the words back to form the new text
      setText(newText); // Update the state with the new text
    }
  };

  const handleReverseClick = () => {
    let reversedText = text.split("").reverse().join("");
    setText(reversedText);
    
  };

  const handleCopy = ()=>{
   let copyText = text;
   navigator.clipboard.writeText(copyText)
  }

  const handleRemoveSpace = ()=>{
    let removeSpace = text.split(/[ ]+/);
    setText(removeSpace.join(" "))
    // console.log(removeSpace)
  }

  
  const handleOnChange = (event) => {
    setText(event.target.value);
  };



  // use state hook used
  const [text, setText] = useState("Enter Text Here");
  // text = "Edited Text" //wrong Way to change the state of text
  // setText("Edited Text") //correct Way to change the state of text


// -----------------------------------------------------------------------
// Dark mood / Light Mood 
// -----------------------------------------------------------------------
    const [myStyle, setMyStyle] = useState({
        color : "white",
        backgroundColor : "#00033e",
    })
    const [btnTxt, setBtnText] = useState("Dark")
    const [btnColor , setBtnColor] = useState({
        color : "white",
        backgroundColor : "black"
    })

    let themeChange = ()=>{
        if(myStyle.color === 'black'){
            setMyStyle({
                color : "white",
                backgroundColor : "black"
            })
            setBtnText('Light')
            setBtnColor({
                color :"blue",
                backgroundColor:"white"
            })
        }
        else{
            setMyStyle({
                color: "black",
                backgroundColor: "white"
            })
            setBtnText('Dark')
            setBtnColor({
                color :"white",
                backgroundColor:"#00033e"
            })
        }
    }

   
// --------------------------------------------------------------------------
  return (
    <div style={myStyle}>
      <div className="container my-3">
        <button className="btn btn-primary" style={btnColor} onClick={themeChange}>{btnTxt}</button>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            name="form-control"
            value={text}
            onChange={handleOnChange}
            id="myBox"
            cols="90"
            rows="8"
            style={myStyle}
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2" style={btnColor} onClick={handleUpClick}>
          To upper case
        </button>
        <button className="btn btn-primary mx-2" style={btnColor} onClick={handleLowClick}>
          To Lower case
        </button>
        <button className="btn btn-primary mx-2" style={btnColor} onClick={handleClearClick}>
          clear
        </button>
        <button className="btn btn-primary mx-2" style={btnColor} onClick={undo}>
          undo
        </button>
        <button className="btn btn-primary mx-2" style={btnColor} onClick={handleReverseClick}>
        Reverse Para
        </button>
        <button className="btn btn-primary mx-2" style={btnColor} onClick={handleCopy}>
        copy
        </button>
        <button className="btn btn-primary mx-2" style={btnColor} onClick={handleRemoveSpace}>
        Remove Extra space
        </button>
      </div>
      <div className="container my-3">
        <h1>Text summery</h1>
        <p>
          {text.split(" ").length} words and {text.length} charecters
        </p>
        <p> {0.008 * text.split(" ").length} minutes to read above text</p>
      </div>
      <div className="container my-3">
        <h1>Preview</h1>
        <p>{text}</p>
      </div>
    </div>
  );
}

TextForm.prototype = {
  Heading: PropTypes.string,
}