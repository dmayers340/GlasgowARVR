import React from 'react';

const DecemberAR = () => {
    
    return (
        <a-scene>
            <a-text color="white" position="-1.69 0.875 -4.438" value="Glasgow ARVR"></a-text>
            <a-obj-model src="models/cone_adam_marc_williams.obj" mtl="models/materials.mtl" position="-1 1.35 -5" scale="3 3 3"></a-obj-model>
            <a-entity gltf-model="url(models/High-end_headset_01.gltf)" position="-1 0.5 -5" scale="0.1 0.1 0.1"></a-entity>
            <a-obj-model src="models/ChristmasTree.obj" mtl="models/ChristmasTree.mtl" position="2 0 -6" scale="0.1 0.1 0.1"></a-obj-model>
            <a-sky color="black"></a-sky>
            <a-sphere src="img/moon.jpg" radius="5" position="0 60 -80"></a-sphere>
            <a-plane src="img/snow.jpg" position="0 0 0" rotation="-90 0 0" scale="10 10 10" width="4" height="4" color="white"></a-plane>
        </a-scene>
    )
}

export default DecemberAR;