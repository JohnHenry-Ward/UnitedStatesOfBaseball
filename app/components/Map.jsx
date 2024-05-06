import generateMap from '../../public/map.js';
import { useEffect, useRef } from 'react';

const Map = ({ level }) => {
    const ref = useRef();

    // use effect is not needed
    generateMap(level);

    return (
        <div id='map' ref={ref}></div>
    )
}

export default Map