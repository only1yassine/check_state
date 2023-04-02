import React from "react";
import ActionAreaCard from "./card";
export default class Button extends React.Component {
  state = {
    button: false,
  };

  handleShow() {
    this.setState({ button: !this.state.button });
  }

  render() {
    return (
      <div>
        <button onClick={() => this.handleShow()}>click to show</button>
        <div>
          {this.state.button ? (
            <ActionAreaCard></ActionAreaCard>
          ) : null}
        </div>
      </div>
    );
  }
}
