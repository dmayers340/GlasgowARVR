import React, { Component } from 'react';
import * as THREE from 'three';

class Knot extends Component{
  constructor(props) {
    super(props);
    this.state = {
      isAnimated: true
    }
  }
  componentDidMount(){
    const width = window.innerWidth;
    const height = window.innerHeight/2;
    //ADD SCENE
    this.scene = new THREE.Scene()
    //ADD CAMERA
    this.camera = new THREE.PerspectiveCamera(
      75,
      width / height,
      0.1,
      1000
    )
    this.camera.position.z = 8;
    //ADD RENDERER
    this.renderer = new THREE.WebGLRenderer({ antialias: true })
    this.renderer.setClearColor('#ffffff')
    this.renderer.setSize(width, height)
    this.mount.appendChild(this.renderer.domElement)
	//ADD CUBE
	
	const geometry = new THREE.TorusKnotGeometry( 5, 1.5, 50, 8 );
	const material = new THREE.MeshBasicMaterial( { color: 0x008080 } );
	this.torusKnot = new THREE.Mesh( geometry, material );
	this.scene.add( this.torusKnot );

this.start()
  }
componentWillUnmount(){
    this.stop()
    this.mount.removeChild(this.renderer.domElement)
  }
start = () => {
    if (!this.frameId) {
      this.frameId = requestAnimationFrame(this.animate)
    }
  }
stop = () => {
    cancelAnimationFrame(this.frameId);
  }

animationStatus = () => {
  if(this.state.isAnimated) {
    this.setState({ isAnimated: false });
    return this.stop();
  } else {
    this.setState({ isAnimated:true });
    return this.animate();
  }
}
animate = () => {
   this.torusKnot.rotation.x += 0.01
   this.torusKnot.rotation.y += 0.01
   this.renderScene()
   this.frameId = window.requestAnimationFrame(this.animate)
 }
renderScene = () => {
  this.renderer.render(this.scene, this.camera)
}
render(){
    const buttonLabel = this.state.isAnimated ? 'Stop Animation' : 'Start Animation';

    return (
      <>
        <button onClick = {this.animationStatus}>{buttonLabel}</button>
			  <div
				  style={{ width: '100%', height: '100%' }}
          ref={(mount) => { this.mount = mount }}
			  />
      </>
  )
  }
}
export default Knot;


// import React, { useState } from 'react';
// import * as THREE from 'three';

// export const Knot = () => {
//   const [isAnimated, setIsAnimated] = useState('true');
//   let frameId;
//   const width = window.innerWidth;
//   const height = window.innerHeight;

//   const scene = new THREE.Scene();

//   const camera = new THREE.PerspectiveCamera( 75, width/height, 0.1, 1000);
//   camera.position.z = 8;

//   const renderer = new THREE.WebGLRenderer({ antialias: true});
//   renderer.setClearColor('#ffffff');
//   renderer.setSize(width, height);
//   let mount = React.createRef();
//   document.body.appendChild(renderer.domElement);

// 	const geometry = new THREE.TorusKnotGeometry( 5, 1.5, 50, 8 );
// 	const material = new THREE.MeshBasicMaterial( { color: 0x008080 } );
// 	const torusKnot = new THREE.Mesh( geometry, material );
//   scene.add( torusKnot );  
  
//   const start = () => {
//     if (!frameId) {
//       frameId = requestAnimationFrame(animate)
//     }
//   }
//   const stop = () => {
//     cancelAnimationFrame(frameId);
//   }

//   const animationStatus = () => {
//     if(isAnimated) {
//       setIsAnimated(false);
//       return stop();
//     } else {
//       setIsAnimated(true);
//       return animate();
//    }
//   }
//   const animate = () => {
//     torusKnot.rotation.x += 0.01
//     torusKnot.rotation.y += 0.01
//     renderScene()
//     frameId = window.requestAnimationFrame(animate)
//  };

//   const renderScene = () => {
//     renderer.render(scene, camera)
//   }

//       const buttonLabel = isAnimated ? 'Stop Animation' : 'Start Animation';
//   start();
//     return (
//       <>
//         <button onClick = {animationStatus}>{buttonLabel}</button>
// 			  <div
// 				  style={{ width: '100%', height: '100%' }}
//           ref={(mount) => { mount = mount }}
// 			  />
//       </>
//   )
// }
