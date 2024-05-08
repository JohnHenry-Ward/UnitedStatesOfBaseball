import generateMap from '../../public/js/map.js';
import { useEffect, useRef } from 'react';

const Map = ({ level, setSelectedData }) => {
    const ref = useRef();

    useEffect(() => {
        generateMap(level, setSelectedData);
    }, [level])

    return (
        <div id='map' className='section-content' ref={ref}></div>
    )
}

export default Map