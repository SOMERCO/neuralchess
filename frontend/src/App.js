import React, { useState } from 'react';
import Chessboard from 'chessboardjsx';
import axios from 'axios'

function App() {
  const [counter, setCounter] = useState(0);
  const onDrop = ({ sourceSquare, targetSquare, piece }) => {
    setCounter(counter + 1)
    const move = sourceSquare + targetSquare
    console.log(sourceSquare, targetSquare, piece)
    axios.post('/move', { move })
      .then(res => {
        console.log(res)
        return res.data
      })
  }


  return (
    <div>
      {counter}
      <Chessboard position="start" onDrop={onDrop}/>
    </div>
  );
}

export default App;
