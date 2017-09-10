import React from 'react';
import {Link} from 'react-router';

import columns from "./module/columns";
import broadwayData from "../broadway.json";
console.log(broadwayData);
export default React.createClass({
  render() {
    return (
    	<div className="container content">
        <table className="table table-striped">
          <thead>
            <tr>
              {columns.shown.map((el) => <th key={el.name}>{el.name}</th>)}
            </tr>
          </thead>
          <tbody>
            {broadwayData.map((show, i) => {
              return (
                <tr key = {i}>
                  {columns.shown.map((el, i) => <td key = {i}>{el.value(show)}</td>)}
                </tr>
                );
              })
            }
          </tbody>
        </table>
    	</div>
	);
  }
})