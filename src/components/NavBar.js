import React from "react";
import PropTypes from 'prop-types';
// import { Link } from "react-router-dom";


export default function NavBar(props) {

  

  return (
    <div>
      <nav className={`navbar navbar-expand-lg bg-${props.mode}`} data-bs-theme={props.mode}>
        <div className="container-fluid d-flex justify-content-around">
          <a className="navbar-brand" href="#">
            {props.title} {/*this is props passing data from defined state*/}
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          

          <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
            <ul className="navbar-nav mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              {/* <li className="nav-item">
                <a className="nav-link" href="/about">
                  About
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="/contact">
                  Contact
                </a>
              </li> */}
            </ul>
            <div className="form-check form-switch px-5">
            <input className="form-check-input" type="checkbox" onClick={props.toogleThemeBtn}  role="switch" id="flexSwitchCheckDefault"/>
            <label className={`form-check-label text-${props.textColor}`} htmlFor="flexSwitchCheckDefault">{props.textColor}</label>
          </div>


          <div className="form-check form-switch px-5">
            <input className="form-check-input" type="checkbox" onClick={props.successBtn}  role="switch" id="flexSwitchCheckDefault"/>
            <label className={`form-check-label text-${props.textColor}`} htmlFor="flexSwitchCheckDefault">{props.success}</label>
          </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

// prop types
// to give prop a type example numbers or strings or boolon  and to verify
NavBar.prototypes = {
  title: PropTypes.string,
  about: PropTypes.string,
};

//default props
// default will we stayed if you dont set any props values like above props
NavBar.defaultProps = {
  title: "Navbar",
  about: "About",
};
