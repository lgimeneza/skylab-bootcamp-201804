// import React from 'react';
// import '../App.css';
// import App from '../App'
import { withRouter } from 'react-router-dom'
import world from './maps/world-50m.json'
import logic from '../logic/index'
import Home from "./Home"
// import logic from '../logic'


import React, { Component } from "react"
import {
  ComposableMap,
  ZoomableGroup,
  Geographies,
  Geography,
} from "react-simple-maps"

const wrapperStyles = {
  width: "100%",
  maxWidth: 980,
  margin: "0 auto",
}

const visited = []

class BasicMap extends Component {
    constructor() {
        super()
        this.clicking = this.clicking.bind(this)
        this.visited = visited
      }
    componentDidMount(){
      
    }

    clicking(value, e){
        const x = e.clientX
        const y = e.clientY + window.pageYOffset
        console.log(logic.visited)       
        this.props.history.push(`/${value.properties.name}`) // segundo parametro username
    }

  render() {
    return (
      <div style={wrapperStyles}>
        <ComposableMap
          projectionConfig={{
            scale: 205,
            rotation: [-11,0,0],
          }}
          width={980}
          height={551}
          style={{
            width: "100%",
            height: "auto",
          }}
          >
          <ZoomableGroup center={[0,20]}>
            <Geographies geography={world}>
              {(geographies, projection) => geographies.map((geography, i) => {
                this.visited.push({index: i, name : geography.properties.name})
                
              return geography.id !== "ATA" && (
                <Geography
                  key={i}
                  geography={geography}
                  projection={projection}
                  onClick={this.clicking}
                  style={{
                    default: {
                      fill: "#ECEFF1",
                      stroke: "#607D8B",
                      strokeWidth: 0.15,
                      outline: "none",
                    },
                    hover: {
                      fill: "#607D8B",
                      stroke: "#607D8B",
                      strokeWidth: 0.15,
                      outline: "none",
                    },
                    pressed: {
                      fill: "#FF5722",
                      stroke: "#607D8B",
                      strokeWidth: 0.15,
                      outline: "none",
                    },
                  }}
                />
              )})
              }
            </Geographies>
          </ZoomableGroup>
        </ComposableMap>
      </div>
    )
  }
}

export default BasicMap