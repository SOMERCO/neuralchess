import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Chessboard from 'chessboardjsx';

function App() {

    const [starting_fen, setFen] = useState("")
	
    useEffect(()=>{
		axios.get('/FEN',{}).then(risposta_server => {
		setFen(risposta_server.data)
		})},[])
	      
    const onDrop = ({sourceSquare,targetSquare,piece}) => {
	
	const move = sourceSquare + targetSquare

	axios.post('/move',{move}).then(res =>{
		setFen(res.data)
	})
    }

    return (
	    <Chessboard position={starting_fen} onDrop={onDrop} />
  );
}

export default App;
