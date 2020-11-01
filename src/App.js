import React from "react";
import "./App.css";
import CitiesGraph from "./containers/CitiesGraph.js";
import CitiesTable from "./containers/CitiesTable.js";
// import { bindActionCreators } from "redux";
// import { connect } from "react-redux";

function App() {
  return (
    <div className="App">
      <div className="city-table">
        {" "}
        <CitiesGraph />
        <CitiesTable />
      </div>
    </div>
  );
}

export default App;
