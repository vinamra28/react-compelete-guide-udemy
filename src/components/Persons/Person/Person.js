import React, { Component } from "react";

import Aux from "../../../hoc/Aux";
import withClass from "../../../hoc/withClass";
import classes from "./Person.module.css";

class Person extends Component {
  //   constructor(props) {
  //     super(props);
  //   }

  componentDidMount() {
    console.log("[Person.js] componentDidMount");
  }
  render() {
    return (
      // React has a built in Auxilary component support named Fragment
      <Aux>
        <p key="i1" onClick={this.props.click}>
          I'm {this.props.name} and I am {this.props.age} years old
        </p>
        <p key="i2">{this.props.children}</p>
        <input
          key="i3"
          type="text"
          onChange={this.props.changed}
          value={this.props.name}
        />
      </Aux>
    );
  }
}

export default withClass(Person, classes.Person);
