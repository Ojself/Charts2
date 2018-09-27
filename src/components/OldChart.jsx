import React, { Component } from "react";
import axios from "axios";
import ReactDOM from "react-dom";
import Rating from "./rating";
import { Row } from "reactstrap";
import NewChart from "./NewChart";

import {
  BarChart,
  XAxis,
  YAxis,
  Tooltip,
  Bar,
  CustomAxisTick,
  CustomBarLabel
} from "recharts";

class LichessButton extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ratings: [],
      data: [],
      loading: true
    };
  }

  componentDidMount() {
    const script = document.createElement("script");

    script.src = "https://use.typekit.net/foobar.js";
    script.async = true;

    document.body.appendChild(script);
  }

  render() {
    if (this.state.loading) {
      return <div>loading.....</div>;
    }
    console.log(this.state.data);
    return (
      <div>
        <NewChart />
        <h1>Chart</h1>
      </div>
    );
  }
}

export default Chart;
