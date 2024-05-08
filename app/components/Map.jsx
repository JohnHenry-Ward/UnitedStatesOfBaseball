import generateMap from '../../public/map.js';
import { useEffect, useRef } from 'react';

const Map = ({ level }) => {
    const ref = useRef();

    useEffect(() => {
        generateMap(level);
    }, [level])

    return (
        <div id='map' className='section-content' ref={ref}></div>
    )
}

export default Map