import React, { Component } from "react";
import { ProgressSpinner } from "primereact/progressspinner";

export default class ProgressSpinnerDemo extends Component {
  render() {
    return (
      <div>
        <ProgressSpinner
          style={{ width: "50px", height: "50px" }}
          strokeWidth="8"
          fill="#EEEEEE"
          animationDuration="10s"
        />
      </div>
    );
  }
}
