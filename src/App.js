import React, { Component } from 'react'
import Konva from 'konva'
import { render } from 'react-dom'
import { Stage, Layer, Rect, Text, Circle, Line } from 'react-konva'
import SwipeableViews from 'react-swipeable-views'
import logo from './logo.svg'
import './App.css'
import PetalRow from './PetalRow.js'
import Shadow from './Shadow.js'

class MyCircle extends React.Component {
  zoom = () => {
    // to() is a method of `Konva.Node` instances
    this.circle.to({
      scaleX: 3,
      scaleY: 3,
      duration: 1.2
    });

    setTimeout(() => {
      this.circle.to({
        opacity: 0,
        duration: 0.2
      });
    }, 1500)

  };
  render() {
    return (
      <Circle
        ref={node => {
          this.circle = node;
        }}
        x={100}
        y={100}
        radius={50}
        fill="green"
        opacity={1}
        onClick={this.zoom}
      />
    );
  }
}

// class App extends Component {
//   render() {
//     return (
//       <Stage width={window.innerWidth} height={window.innerHeight}>
//         <Layer>
//           <MyCircle />
//           <MyCircle />
//
//         </Layer>
//       </Stage>
//     )
//   }
// }
//
// export default App

const styles = {
  slide: {
    padding: 0,
    height: '100%',
    color: '#fff',
  },
  slide1: {
    background: '#ffffff',
  },
  slide2: {
    background: '#B3DC4A',
  },
  slide3: {
    background: '#6AC0FF',
  },
  subslide: {
    background: 'blue',
    height: '400px'
  }
};

const svgWidth = 550

const App = () => (
  <SwipeableViews axis={'y'} containerStyle={{ height: '100%' }} slideStyle={{height: '100%'}}>
    <div style={Object.assign({}, styles.slide, styles.slide1)}>
      <SwipeableViews>
        <div className='swipe-container'>
          <svg className='viz' x="0px" y="0px" viewBox="0 0 400 400" width={svgWidth} height={svgWidth}>
            <defs>
              <linearGradient id="petalGradient"
                              x1="0%" y1="100%"
                              x2="0%" y2="0%"
                              spreadMethod="pad"
                              gradientUnits="objectBoundingBox">
                <stop offset="0%"   stop-color="rgb(230,235,237)" stop-opacity="1"/>
                <stop offset="38,98%" stop-color="rgb(237,207,201)" stop-opacity="1"/>
                <stop offset="100%" stop-color="rgb(217,132,132)" stop-opacity="1"/>
              </linearGradient>
            </defs>
            <g transform={`translate(${(svgWidth - 220) / 2}, 0)`}>
              <PetalRow id={3} petals={11} offset={20}/>
              <PetalRow id={2} petals={9} offset={10}/>
              <PetalRow id={1} petals={7} offset={0}/>
            </g>
          </svg>
        </div>

        {/*<div style={Object.assign({}, styles.subslide)}>
          Subslide n°1
        </div>
        <div style={Object.assign({}, styles.subslide)}>
          Subslide n°2
        </div>
        <div style={Object.assign({}, styles.subslide)}>
          Subslide n°3
        </div>*/}
      </SwipeableViews>
    </div>
    <div style={Object.assign({}, styles.slide, styles.slide2)}>
      slide n°2
    </div>
    <div style={Object.assign({}, styles.slide, styles.slide3)}>
      slide n°3
    </div>
  </SwipeableViews>
)

export default App
