import React, { Component, Fragment } from "react";

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
      <Fragment>
        <p onClick={this.props.click}>
          I'm {this.props.name} and I am {this.props.age} years old
        </p>
        <p>{this.props.children}</p>
        <input
          type="text"
          onChange={this.props.changed}
          value={this.props.name}
        />
      </Fragment>
    );
  }
}

export default Person;
