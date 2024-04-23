'use client'; // do this so we can use useState and useEffect, makes it a client component
import { useState, useEffect } from 'react';
import Map from './components/Map';
import Test from './components/Test';

const HomePage = () => {
  
  return (
    <div>
      <Test />
      <h1>United States of Baseball</h1>
      <Map />
    </div>
  )
}

export default HomePage