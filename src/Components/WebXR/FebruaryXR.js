import React from 'react';

const FebXR = () => {
    return (
        <a-scene>
            <a-text color="white" position="-0.71 0.875 -4.438" value="Glasgow ARVR"></a-text>
            <a-entity gltf-model="url(models/cone.gltf)" position="0.543 -3.25 -2.249" scale="3 3 3"></a-entity>
            <a-entity gltf-model="url(models/High-end_headset_01.gltf)" position="0 0.5 -5" scale="0.1 0.1 0.1"></a-entity>
            <a-entity gltf-model="url(models/Heart.gltf)" scale="0.005 0.005 0.005" position="1.790 2.448 -2"></a-entity>
            <a-entity gltf-model="url(models/Heart.gltf)" scale="0.005 0.005 0.005" position="-1.790 2.448 -2"></a-entity>

            
            <a-sky src="img/sky.jpg"></a-sky>
            <a-sphere src="img/moon.jpg" radius="5" position="0 60 -80"></a-sphere>
            <a-plane src="img/grass.jpg" position="0 0 0" rotation="-90 0 0" scale="10 10 10" width="4" height="4" color="white"></a-plane>
        </a-scene>
    )
}

export default FebXR;