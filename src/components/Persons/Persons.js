import React, { PureComponent } from "react";
import Person from "./Person/Person";

// Pure component is just like Component but it justs implements shouldComponentUpdate under the hood with complete props check
class Persons extends PureComponent {
  // static getDerivedStateFromProps(props, state) {
  //   console.log("[Persons.js] getDerivedStateFromProps");
  //   return state;
  // }

  // componentWillReceiveProps(props) {
  //   console.log("[Persons.js] componentsWillReceiveProps", props);
  // }

  // instead of this we can use PureComponent
  // shouldComponentUpdate(nextProps, nextState) {
  //   //should return true or false
  //   console.log("[persons.js] shouldComponentUpdate");
  //   if (
  //     nextProps.persons !== this.props.persons ||
  //     nextProps.changed !== this.props.changed ||
  //     nextProps.clicked !== this.props.clicked
  //   ) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("[Persons.js] getSnapshotBeforeUpdate");
    return { message: "snapshot" };
  }
  componentDidUpdate(prevState, prevProps, snapshot) {
    console.log("[Persons.js] componentDidUpdate", snapshot);
  }
  componentWillUnmount() {
    console.log("[Persons.js] Component will unmount");
  }
  render() {
    console.log("[Persons.js] rendering...");
    return this.props.persons.map((person, index) => {
      return (
        <Person
          name={person.name}
          age={person.age}
          key={person.id}
          click={() => this.props.clicked(index)}
          changed={(event) => this.props.changed(event, person.id)}
        />
      );
    });
  }
}

export default Persons;
