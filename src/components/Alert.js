import React from "react";
import "./Alert.css"

export default function Alert(props) {
    // this function help to capitalize first letter of any word 
    const capitalize = (word)=>{
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1)
    }
  return (
    props.alert && <div className={`alert alert-${props.alert.typ} m-0`} role="alert">
      <strong>{capitalize(props.alert.typ)}</strong> : {props.alert.msg}
    </div>
  );
}
