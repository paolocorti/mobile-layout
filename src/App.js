import React, { Component } from 'react'
import Konva from 'konva'
import { render } from 'react-dom'
import { Stage, Layer, Rect, Text, Circle, Line } from 'react-konva'
import SwipeableViews from 'react-swipeable-views'
import logo from './logo.svg'
import './App.css'


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
    padding: 15,
    height: '100%',
    color: '#fff',
  },
  slide1: {
    background: '#FEA900',
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

const App = () => (
  <SwipeableViews axis={'y'} containerStyle={{ height: '100%' }} slideStyle={{height: '100%'}}>
    <div style={Object.assign({}, styles.slide, styles.slide1)}>
      <SwipeableViews>
        <div style={Object.assign({}, styles.subslide)}>
          Subslide n°1
        </div>
        <div style={Object.assign({}, styles.subslide)}>
          Subslide n°2
        </div>
        <div style={Object.assign({}, styles.subslide)}>
          Subslide n°3
        </div>
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
