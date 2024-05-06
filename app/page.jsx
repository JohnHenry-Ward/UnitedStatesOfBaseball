'use client'; // do this so we can use useState and useEffect, makes it a client component
import { useState, useEffect } from 'react';
import Map from './components/Map';
import Selector from './components/Selector';

const HomePage = () => {

  const [level, setLevel] = useState('MLB');

  return (
    <div>
      <h1>United States of Baseball</h1>
      <h4>{level}</h4>
      <div id='main-content'>
        <Map level={level}/>
        <Selector level={level} setLevel={setLevel}/>
      </div>
    </div>
  )
}

export default HomePage