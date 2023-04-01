import React from 'react';
import { ToDos } from './componnents/ToDos/ToDos';

function App() {
  
  return (
    <div className='w-screen h-screen bg-gradient-to-br  from-pink-400 to-orange-300 flex flex-col justify-around items-center '>
      <ToDos/>
    </div>
  );
}

export default App;
