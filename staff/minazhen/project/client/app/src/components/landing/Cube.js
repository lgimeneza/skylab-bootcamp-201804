import React, { Component } from 'react';
import * as THREE from 'three';
import model from './js/worldpic.json';
import airplane from './js/avion.json';
import "../../../home.css"

let rend = {}
const div = {x: 600, y: 400}

let rot = 0

class Landing extends Component {
    constructor(props) {
      super(props)
  
      this.start = this.start.bind(this)
      this.stop = this.stop.bind(this)
      this.animate = this.animate.bind(this)
    }
  
    componentDidMount() {
      const width = this.mount.clientWidth
      const height = this.mount.clientHeight

      div.x = width
      div.y = height

      window.addEventListener("resize", this._updateDimensions);

      const scene = new THREE.Scene()
      const camera = new THREE.PerspectiveCamera(
          60,
          width / height,
          0.1,
          1000
        )
        const clock = new THREE.Clock();
        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
        const geometry = new THREE.BoxGeometry(1, 1, 1)
        const material = new THREE.MeshBasicMaterial({ color: 0x4444ff })



        const mat_air = new THREE.MeshStandardMaterial(
            { color: 0xffffff ,
            roughness: 0.5,
            metalness: 0.8
            })





        
        var loader = new THREE.JSONLoader();
        
        const loading = loader.parse(model)
        const loading2 = loader.parse(airplane)
        
        var logo = new THREE.Mesh( loading.geometry, material);
        var flight = new THREE.Mesh( loading2.geometry, mat_air);

        

        camera.position.z = 5
        
        scene.add(logo)
        scene.add(flight)
        
        renderer.setClearColor( 0xff00ff, 0.2)
        renderer.setSize(width, height)

        var ambientLight = new THREE.AmbientLight( 0xcccccc );
        scene.add( ambientLight );
        
        var pointBlue = new THREE.PointLight( 0x003399, 5, 10 );
        pointBlue.position.set( 0, 5, 0 );
        scene.add( pointBlue );
        

        // var pointOrange = new THREE.PointLight(0xff9900, 1, 10)
        // pointOrange.position.set( 3, 5, 3 );
        // scene.add( pointOrange );
        
        this.scene = scene
        this.camera = camera
        this.renderer = renderer
        this.material = material
        this.logo = logo
        this.flight = flight
        this.clock = clock
        this.screen_x = 0
        this.screen_y = 0
        
        rend = renderer
      this.mount.appendChild(this.renderer.domElement)

      
      this.start()
    }

    _onMouseMove(e) {
        let rect = e.target.getBoundingClientRect()

        let x = e.clientX - rect.left
        let y = e.clientY - rect.top 
        
        this.screen_x = x - (div.x * 0.5)
        this.screen_y = y - (div.y * 0.5)   
        
    }

    _onWheel(e) { 
        rot += e.deltaY * 0.00001
        if (rot > 0.05) rot = 0.05; else if (rot < -0.05) rot = -0.05;
        rot = parseFloat(rot.toFixed(5))
    }

    _updateDimensions() {
        let wWidth = window.innerWidth 
        rend.setSize(wWidth, wWidth * 0.5)
    }

    componentWillUnmount() {
      this.stop()
      this.mount.removeChild(this.renderer.domElement)
    }
  
    start() {
      if (!this.frameId) {
        this.frameId = requestAnimationFrame(this.animate)
      }
    }
  
    stop() {
      cancelAnimationFrame(this.frameId)
    }
  
    animate() {
      this.logo.rotation.y += ((this.screen_x * 0.001) - this.camera.position.x) * 0.01
      this.camera.position.y += ((this.screen_y * 0.01) - this.camera.position.y) * 0.01
      this.camera.lookAt( this.scene.position );

      this.flight.rotateOnAxis(new THREE.Vector3(0, 1, 1), rot)
      this.logo.material.color.setHSL( Math.sin(this.clock.getElapsedTime()*0.05), 0.5, 0.5 );  

      this.renderScene()
      this.frameId = window.requestAnimationFrame(this.animate)
    }

    renderScene() {
      this.renderer.render(this.scene, this.camera)
    }
  
    render() {
        let {x, y} = div
      return (
        <div className="three-d"
          onMouseMove={this._onMouseMove.bind(this)}
          onWheel={this._onWheel.bind(this)}
          ref={(mount) => { this.mount = mount }}
        />
      )
    }
  }
  
export default Landing