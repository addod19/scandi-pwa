import React, { Component } from 'react'

export class Currency extends Component {
  constructor(props) {
    super(props);

    this.state = {
      label: 'USD',
      symbol: '$',
    }
  }
  render() {
    return (
      <div>Currency</div>
    )
  }
}

export default Currency