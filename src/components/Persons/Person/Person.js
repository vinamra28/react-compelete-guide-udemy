import React, { Component } from "react";

import Aux from "../../../hoc/Aux";
import withClass from "../../../hoc/withClass";
import classes from "./Person.module.css";
import AuthContext from "../../../context/auth-context";

class Person extends Component {
  constructor(props) {
    super(props);
    this.inputElementRef = React.createRef();
  }

  // this is available in Class based components only
  // and can be accessed outside the class with creating the instance of the class
  // for functional components we have useContext React hook
  static contextType = AuthContext;

  componentDidMount() {
    console.log("[Person.js] componentDidMount");
    // this.inputElement.focus();
    this.inputElementRef.current.focus();
    console.log(this.context.authenticated);
  }
  render() {
    return (
      // React has a built in Auxilary component support named Fragment
      <Aux>
        {this.context.authenticated ? (
          <p>Authenticated!</p>
        ) : (
          <p>Please login in</p>
        )}
        <p key="i1" onClick={this.props.click}>
          I'm {this.props.name} and I am {this.props.age} years old
        </p>
        <p key="i2">{this.props.children}</p>
        <input
          key="i3"
          type="text"
          // ref={(inputEl) => {
          //   this.inputElement = inputEl;
          // }}
          ref={this.inputElementRef}
          onChange={this.props.changed}
          value={this.props.name}
        />
      </Aux>
    );
  }
}

export default withClass(Person, classes.Person);
