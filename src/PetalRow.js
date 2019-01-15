import React, { Component } from 'react'
import Petal from './Petal.js'
import Rect from './Rect.js'
import PetalStroke from './PetalStroke.js'

import './Petal.css'

class PetalRow extends React.Component {

  render() {
		const petals = [...Array(this.props.petals).keys()]
    return (
			<g className={`petal-row-${this.props.id}`} style={{ transform: `translate(${this.props.translate})` }}>
				{
					petals.map((n, i) => {
						console.log(n);
						return (
							<PetalStroke key={i} id={this.props.offset + (i + 1)} />
						)
					})
				}
			</g>
    );
  }
}

export default PetalRow
