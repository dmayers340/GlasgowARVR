import React, { useEffect } from 'react';

const DecAR = () => {

    useEffect(()=> {
        const script = document.createElement("script");
        script.src="https://raw.githack.com/jeromeetienne/AR.js/2.0.8/aframe/build/aframe-ar.js";
        script.async = true;
        document.body.appendChild(script);
    })
   
    return (
        <a-scene embedded artoolkit='sourceType: webcam;'>
            <a-assets>  
                <a-asset-item id="cone" src="models/cone_adam_marc_williams.obj"></a-asset-item>
                <a-asset-item id="cone-mtl" src="models/materials.mtl"></a-asset-item>
                <a-asset-item id="headset" src="models/High-end_headset_01.obj"></a-asset-item>
                <a-asset-item id="headset-mtl" src="models/High-end_headset_01.mtl"></a-asset-item>
            </a-assets>

            <a-obj-model src="#cone" mtl="#cone-mtl" position= "0 0.835 0" scale="3 3 3"></a-obj-model>
            <a-obj-model src="#headset" mtl="#cone-mtl" position= "0 0 0" scale="0.1 0.1 0.1"></a-obj-model>
            <a-marker-camera preset='hiro'></a-marker-camera>
        </a-scene>
    )
}

export default DecAR;