'use client'; // do this so we can use useState and useEffect, makes it a client component
import { useState } from 'react';
import Title from './components/Title';
import Map from './components/Map';
import Selector from './components/Selector';
import Footer from './components/Footer';
import Info from './components/Info';

const HomePage = () => {

  const [level, setLevel] = useState('MLB');

  return (
    <div id='full-content'>
      <Title />
      <div id='main-content'>
        <Map level={level}/>
        <div id='right-content'>
          <Info />
          <Selector level={level} setLevel={setLevel} />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default HomePage