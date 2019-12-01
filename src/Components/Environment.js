import 'aframe';

AFRAME.registerComponent('snow', {
    init: function () {
        let isCreated = false;
        let el = this.el;

        el.addEventListener('model-loaded', function() {
            if(!isCreated) {
                isCreated = true;
                const sceneElement = document.querySelector('#snowy');

                for(let snowflakes=0; snowflakes<100; snowflakes++){
                    const position = '' + (Math.random() * 20-10) + '-2.9' + (Math.random() * 20-10);
                    const newSnowflake = document.createElement('a-entity');
                    newSnowflake.setAttribute('position', position);
                    newSnowflake.setAttribute('scale', "0.1 0.1 0.1")
                    newSnowflake.setAttribute('gltf-model', '#snowflake');
                    sceneElement.appendChild(newSnowflake);
                }
            }
        })
    }
})