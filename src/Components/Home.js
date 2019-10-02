import React from "react";
import Axios from "axios";
import TabPanel from "../Screens/TabPanel";
const ip = require("../ipAddress");

export default class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {}

  render() {
    return (
      <div>
        <TabPanel />
      </div>
    );
  }
}
