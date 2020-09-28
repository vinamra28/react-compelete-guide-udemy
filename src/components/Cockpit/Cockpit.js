import React, { useEffect, useRef } from "react";
import classes from "./Cockpit.module.css";
import AuthContext from "../../context/auth-context";

const Cockpit = (props) => {
  // since it's a functional component thus here React.create() will not work
  // and we will be using a hook named `useRef`
  const toggleBtnRef = useRef(null);

  useEffect(() => {
    console.log("[Cockpit.js] useEffect");
    // setTimeout(() => {
    //   alert("Saved Data to cloud");
    // }, 1000);
    toggleBtnRef.current.click();
    return () => {
      console.log("[Cockpit.js] cleanup");
    };
  }, []);
  useEffect(() => {
    console.log("[Cockpit.js] cleanup");
    return () => {
      console.log("[Cockpit.js] cleanup work in 2 useEffect");
    };
  });
  let assignedClasses = [];
  let btnClass = "";
  if (props.showPersons) {
    btnClass = classes.Red;
  }
  if (props.personsLength <= 2) {
    assignedClasses.push("red"); // classes = ['red'];
  }
  if (props.personsLength <= 1) {
    assignedClasses.push("bold"); // classes = ['red', 'bold'];
  }
  return (
    <div className={classes.Cockpit}>
      <h1>{props.title}</h1>
      <p className={assignedClasses.join(" ")}>This is really working</p>
      <button ref={toggleBtnRef} className={btnClass} onClick={props.onClick}>
        Toggle Persons
      </button>
      <AuthContext.Consumer>
        {(context) => <button onClick={context.login}>Log In</button>}
      </AuthContext.Consumer>
    </div>
  );
};

//React.memo stores a snapshot and will change only if the props are changed
export default React.memo(Cockpit);
