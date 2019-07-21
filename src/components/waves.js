/* eslint-disable */

import "./vanta/vanta.waves.js"
import postscribe from 'postscribe'
import React from 'react'
var waves = './vanta/vanta.waves.js'
 
class VantaWaves extends React.Component {

  componentDidMount() {
      postscribe('#waves', '<script language="javascript" src="' + waves + '"></script>')
      
      this.effect = window.VANTA.WAVES({
        el: "#waves",
        color: 0x9faa98,
        shininess: 0.00,
        waveHeight: 33.50,
        waveSpeed: 0.00,
        zoom: 0.75
      })
  }

  componentWillUnmount() {
    if(this.effect) this.effect.destroy();
  }

  render() {
    return (
      <div className="waves-wrapper">
        <div id="waves"></div>
      </div>
    );
  }
}

export default VantaWaves