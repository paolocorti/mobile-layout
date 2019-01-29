import React, { Component } from 'react';
import Konva from 'konva';
import { render } from 'react-dom';
import { Stage, Layer, Rect, Text, Circle, Line } from 'react-konva';
import SwipeableViews from 'react-swipeable-views';
import { virtualize } from 'react-swipeable-views-utils';
import logo from './logo.svg';
import './App.css';
import PetalRow from './PetalRow.js';
import Shadow from './Shadow.js';

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
    }, 1500);
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
        fill='green'
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
    color: '#fff'
  },
  slide1: {
    background: '#ffffff'
  },
  slide2: {
    background: '#B3DC4A'
  },
  slide3: {
    background: '#6AC0FF'
  },
  subslide: {
    background: 'blue',
    height: '400px'
  }
};

const svgWidth = 550;

class App extends React.Component {
  state = {
    index: 0
  };

  handleChangeIndex = index => () => {
    console.log(index);
    this.setState({
      index
    });
  };

  render() {
    const { index } = this.state;

    return (
      <div>
        <div
          className='chapter-subsection swipe-container'
          style={{ height: '100vh' }}
        >
          LANDING
        </div>

        <SwipeableViews
          axis={'x'}
          containerStyle={{ height: '100%' }}
          slideStyle={{ height: '100%' }}
          index={index}
        >
          <div style={Object.assign({}, styles.slide, styles.slide1)}>
            {/*
          <div className='swipe-container'>
            <svg
              className='viz'
              x='0px'
              y='0px'
              viewBox='0 0 400 400'
              width={svgWidth}
              height={svgWidth}
            >
              <defs>
                <linearGradient
                  id='petalGradient'
                  x1='0%'
                  y1='0%'
                  x2='0%'
                  y2='100%'
                  gradientUnits='objectBoundingBox'
                >
                  <stop
                    offset='0%'
                    stop-color='rgb(217,132,132)'
                    stop-opacity='1'
                  />
                  <stop
                    offset='61%'
                    stop-color='rgb(237,207,201)'
                    stop-opacity='1'
                  />
                  <stop
                    offset='100%'
                    stop-color='rgb(230,235,237)'
                    stop-opacity='1'
                  />
                </linearGradient>
              </defs>
              <g transform={`translate(${(svgWidth - 220) / 2}, 0)`}>
                <PetalRow id={3} petals={11} offset={20} />
                <PetalRow id={2} petals={9} offset={10} />
                <PetalRow id={1} petals={7} offset={0} />
              </g>
            </svg>
          </div>*/}

            <div
              className='chapter-subsection'
              style={{
                height: '100vh',
                backgroundImage: 'linear-gradient(#ffeed1, #ffba44)'
              }}
            >
              CHAPTER 1
            </div>
            <div
              className='chapter-subsection'
              style={{
                height: '100vh',
                backgroundImage: 'linear-gradient(#ffba44, #db9a69)'
              }}
            >
              OVERVIEW TRENDS
            </div>
            <div
              className='chapter-subsection'
              style={{
                height: '100vh',
                backgroundImage: 'linear-gradient(#db9a69, #9b5d47)'
              }}
            >
              OVERVIEW REGIONS
              <button
                className='next-button'
                onClick={this.handleChangeIndex(1)}
              >
                NEXT
              </button>
            </div>
          </div>
          <div className='chapter-2'>
            <div
              className='chapter-subsection'
              style={{
                height: '100vh',
                backgroundImage: 'linear-gradient(#e1eaef, #e4f3ec)'
              }}
            >
              CHAPTER 2
            </div>
            <div
              className='chapter-subsection'
              style={{
                height: '100vh',
                backgroundImage: 'linear-gradient(#e4f3ec, #ffd3f8)'
              }}
            >
              RELATED QUERIES
            </div>
            <div
              className='chapter-subsection'
              style={{
                height: '100vh',
                backgroundImage: 'linear-gradient(#ffd3f8, #b7a2c1)'
              }}
            >
              COUNTRY FOCUS
              <button
                className='next-button'
                onClick={this.handleChangeIndex(2)}
              >
                NEXT
              </button>
            </div>
          </div>
          <div className='chapter-2'>
            <div
              className='chapter-subsection'
              style={{
                height: '100vh',
                backgroundImage: 'linear-gradient(#b8e5ed, #639da8)'
              }}
            >
              CHAPTER 3
            </div>
            <div
              className='chapter-subsection'
              style={{
                height: '100vh',
                backgroundImage: 'linear-gradient(#639da8, #637aa8)'
              }}
            >
              DREAMS SHARED BY LANGUAGE PAIRS
            </div>
            <div
              className='chapter-subsection'
              style={{
                height: '100vh',
                backgroundImage: 'linear-gradient(#637aa8, #32466d)'
              }}
            >
              NETWORK OF SHARED DREAMS
              <button
                className='next-button'
                onClick={this.handleChangeIndex(0)}
              >
                NEXT
              </button>
            </div>
          </div>
        </SwipeableViews>
      </div>
    );
  }
}

export default App;
