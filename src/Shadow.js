import React, { Component } from 'react'
import { render } from 'react-dom'
import './Petal.css'

class Shadow extends React.Component {

  render() {
    return (
			<g style={{ transform: `translate(${this.props.translate})` }}>
        <radialGradient id="SVGID_1_" cx="246.4245" cy="160.1736" r="172.2004" gradientTransform="matrix(1 0 0 0.0718 0 3.5253)" gradientUnits="userSpaceOnUse">
          <stop  offset="0" style={{ stopColor: '#F7B1AA' }} />
          <stop  offset="0.1871" style={{ stopColor: '#D4EDEC' }} />
          <stop  offset="1" style={{ stopColor: '#F9FBEE', stopOpacity: 0 }}/>
        </radialGradient>
        <ellipse class="shadow" cx="246.42" cy="15.02" rx="241.92" ry="13.35"/>
			</g>
    );
  }
}

export default Shadow
