import React, { Component } from "react";
import "./App.css";
import Chart from "./components/Chart";
import axios from "axios";
import Loader from "./components/Loader";
import { Button } from "react-bootstrap";

class App extends Component {
  constructor() {
    super();
    this.state = {
      chartData: {},
      loading: true
    };
  }

  componentWillMount() {
    this.getChartData();
  }

  getChartData() {
    axios.get(`https://lichess.org/api/user/IronBot/following`).then(res => {
      let username = res.data.match(/username":(.*?),/g);
      let userMap = username.map(el => el.substring(11, el.length - 2));

      console.log("The usernames are: " + userMap);

      let blitzRating = res.data.match(/z":{"games":.*?:(\d*)/g);
      let blitzRatingMap = blitzRating.map(
        el => el.substring(el.length - 4, el.length) * 1
      );

      console.log("The ratings for the players are: " + blitzRatingMap);

      this.setState({
        chartData: {
          labels: [
            "SleepyPlayer",
            "penguingim1",
            "Grzegorz1994",
            "Kanibal13",
            "IronBot"
          ],
          datasets: [
            {
              label: "Rating",
              data: blitzRatingMap /* [617594, 181045, 153060, 106519, 105162, 95072], */,
              backgroundColor: [
                "rgba(255, 99, 132, 0.6)",
                "rgba(54, 162, 235, 0.6)",
                "rgba(255, 206, 86, 0.6)",
                "rgba(75, 192, 192, 0.6)",
                "rgba(153, 102, 255, 0.6)",
                "rgba(255, 159, 64, 0.6)",
                "rgba(255, 99, 132, 0.6)"
              ]
            }
          ]
        },
        loading: false
      });
    });
  }

  render() {
    console.log(this.state.chartData);
    if (this.state.loading) {
      return (
        <div>
          <Loader />
        </div>
      );
    }
    return (
      <div className="App">
        <div className="App-header">
          <h1>IRONBOT</h1>
          <Button bsStyle="primary" a href="https://lichess.org/@/IronBot">
            PLAY ME!
          </Button>
        </div>
        <Chart
          chartData={this.state.chartData}
          /* location="Massachusetts" */
          legendPosition="bottom"
        />
      </div>
    );
  }
}

export default App;
