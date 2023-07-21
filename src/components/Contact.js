import React from "react";

export default function Contact(props) {
  let height = {
    height: "100vh",
  };
  return (
    <div className="py-5" style={props.style}>
        
      <div className="container" style={height}>
        <form>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label" >
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              style={props.style}
            />
            <div id="emailHelp" className="form-text" style={props.style}>
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              style={props.style}
            />
          </div>
          <div className="mb-3 form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
              style={props.style}
            />
            <label className="form-check-label" htmlFor="exampleCheck1">
              Check me out
            </label>
          </div>
          <button type="button" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
