// import './App.css';

// import { type } from "@testing-library/user-event/dist/type";
// import About from "./components/About";
import Alert from "./components/Alert";
// import Contact from "./components/Contact";
import NavBar from "./components/NavBar";
import TextForm2 from "./components/TextForm2";
import { useState } from "react";
// import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [textColor, setTextColor] = useState("dark"); //edi button text kosam
  const [style, setStyle] = useState({
    color: "black",
    backgroundColor: "white",
  });
  const toogleThemeBtn = () => {
    if (mode === "light" || mode === "success") {
      setMode("dark");
      setTextColor("light");
      setStyle({
        color: "white",
        backgroundColor: "#010627",
      });
      showAlert("Dark mode has Enabled", "success");
    } else {
      setMode("light");
      setTextColor("dark");
      setStyle({
        color: "black",
        backgroundColor: "white",
      });
      showAlert("Light mode has Enabled", "success");
    }
  };
  //  mode blue

  const [success, setSuccess] = useState("success");
  const successBtn = () => {
    if (mode === "light" || mode === "dark") {
      setSuccess("light");
      setMode("success");
      setStyle({
        color: "white",
        backgroundColor: "#073f09",
      });
      showAlert("Green mode has Enabled", "success");
    } else {
      setSuccess("success");
      setMode("light");
      setStyle({
        color: "black",
        backgroundColor: "white",
      });
      showAlert("Light mode has Enabled", "success");
    }
  };

  // alert
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      typ: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1200);
  };

  return (
    <>
        <NavBar
          title="TextUitles"
          mode={mode}
          textColor={textColor}
          toogleThemeBtn={toogleThemeBtn}
          success={success}
          successBtn={successBtn}
        />
        <Alert alert={alert} />
        <TextForm2
                showAlert={showAlert}
                heading="Enter Any Charecter"
                style={style}
                mode={mode}
              />
      {/* <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <TextForm2
                showAlert={showAlert}
                heading="Enter Any Charecter"
                style={style}
                mode={mode}
              />
            }
          />
          <Route path="/about" element={<About style={style} />} />
          <Route path="/contact" element={<Contact style={style} />} />
        </Routes> 
      </BrowserRouter>*/}
    </>
  );
}

export default App;
