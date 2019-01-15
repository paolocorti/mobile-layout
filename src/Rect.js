import React, { Component } from 'react'
import { render } from 'react-dom'
import './Petal.css'

class Rect extends React.Component {

  render() {
		console.log(this.props);
    return (
			<g className="petal" id={`petal-${this.props.id}`}>
        <rect fill='none' stroke='red' width='166' height='166' />
			</g>
    );
  }
}

export default Rect
