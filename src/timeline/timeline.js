import React from 'react';
// import Moment from 'moment';
import { PieChart, Pie } from 'recharts';

export default class Timeline extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          label: "free",
          value: 0.35
        },
        {
          label: "work",
          value: 0.5
        },
        {
          label: "rest",
          value: 0.15
        }
      ]
    };
  }

  render () {
    return (
      <div>
        <h3>Timeline</h3>
        <div>
          <PieChart>
            <Pie data={this.state.data} dataKey="value" nameKey="label" />
            {/* <Pie data={this.state.data[1]} dataKey="value" nameKey="label" />
            <Pie data={this.state.data[2]} dataKey="value" nameKey="label" /> */}
          </PieChart>
        </div>
      </div>
    );
  }
  
}