import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { getCities } from "../actions/citiesActions.js";
import ReactHighCharts from "react-highcharts";

class CitiesGraph extends React.Component {
  componentDidMount() {
    this.props.getCities();
  }

  render() {
    let resultObject = {};
    this.props.cities.forEach((city) => {
      if (resultObject[city.state]) {
        resultObject[city.state]++;
      } else {
        resultObject[city.state] = 1;
      }
    });
    let sorted = [];
    for (let state in resultObject) {
      sorted.push([state, resultObject[state]]);
    }
    sorted.sort(function (a, b) {
      return a[1] - b[1];
    });
    let states = [];
    let numCities = [];
    sorted.forEach((item) => {
      states.push(item[0]);
      numCities.push(item[1]);
    });
    const config = {
      title: {
        text: "Amount of Top 1000 Cities By State",
      },
      xAxis: {
        type: "datetime",
        title: {
          text: "State",
        },
        categories: states,
      },
      yAxis: {
        title: {
          text: "Number of Cities",
        },
      },
      series: [
        {
          type: "area",
          data: numCities,
        },
      ],
    };
    return (
      <>
        <ReactHighCharts config={config} />
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  cities: state.cities.citiesData,
});

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      getCities,
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(CitiesGraph);
