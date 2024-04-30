import { useEffect, createRef } from "react";

import doAllWork from '../../public/map.js';

const Map = () => {
    const ref = createRef(); //idk what this is doing yet

    useEffect(() => {
        doAllWork();
    });

    return (
        <div id='map' ref={ref}></div>
    )
}

export default Map