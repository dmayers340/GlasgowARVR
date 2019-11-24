import React, { useEffect } from 'react';

const DecemberAR = () => {

    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://raw.githack.com/jeromeetienne/AR.js/2.0.8/aframe/build/aframe-ar.js";
        script.async = true;
        document.body.appendChild(script);
    });

    return (
        <a-scene embedded arjs="sourceType: webcam;">
            <a-obj-model src="models/cone_adam_marc_williams.obj" mtl="models/materials.mtl" position="0 1.35 0" scale="3 3 3"></a-obj-model>
            <a-obj-model src="models/High-end_headset_01.obj" mtl="models/High-end_headset_01.mtl" position="0 0.5 0" scale="0.1 0.1 0.1"></a-obj-model>
            <a-obj-model src="models/ChristmasTree.obj" mtl="models/ChristmasTree.mtl" position="1 0 1"></a-obj-model>
            <a-marker-camera preset="hiro"></a-marker-camera>
        </a-scene>
    )
}

export default DecemberAR;