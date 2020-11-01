import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { getCities } from "../actions/citiesActions.js";

class CitiesTable extends React.Component {
  componentDidMount() {
    this.props.getCities();
  }

  render() {
    const cities = this.props.cities.map((city, index) => {
      return (
        <tr key={index}>
          <td>{city.rank} </td>
          <td>{city.city} </td>
          <td>{city.state} </td>
          <td>{city.population} </td>
          <td>{city.growth_from_2000_to_2013} </td>
          <td>
            {city.latitude}, {city.longitude}{" "}
          </td>
        </tr>
      );
    });
    return (
      <>
        {" "}
        <table className="city-list">
          <thead>
            <tr>
              <th>Rank</th>
              <th>City</th>
              <th>State</th>
              <th>Population</th>
              <th>Growth</th>
              <th>Coordinates</th>
            </tr>
          </thead>
          <tbody>{cities}</tbody>
        </table>
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

export default connect(mapStateToProps, mapDispatchToProps)(CitiesTable);
