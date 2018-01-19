import React from 'react';
import Moment from 'moment';

export default class Time extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: Time.getCurrentTimeString()
    }
  }

  componentDidMount() {
    this.interval = setInterval(
      () => {
        this.setState({...this.state, time: Time.getCurrentTimeString()});
      },
      500)
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div>
        Current time: {this.state.time}
      </div>
    )
  }

  static getCurrentTimeString() {
    return Moment.utc().format("DD-mm-YYYY hh:mm:ss")
  }
  
}
