import React, { useState, useEffect, useRef } from 'react';
import { View, Text, TouchableOpacity, TextInput, Alert } from 'react-native';
import tw from 'twrnc';
import SetupComponent from './Setup';
import TimerComponent from './Timer';

const App = () => {
  const [gameStarted, setGameStarted] = useState(false);
  const [player1Name, setPlayer1Name] = useState('Player 1');
  const [player2Name, setPlayer2Name] = useState('Player 2');
  const [player1Time, setPlayer1Time] = useState(300);
  const [player2Time, setPlayer2Time] = useState(300);

  const handleStartGame = ({ player1Name, player2Name, player1Time, player2Time }) => {
    setPlayer1Name(player1Name);
    setPlayer2Name(player2Name);
    setPlayer1Time(player1Time);
    setPlayer2Time(player2Time);
    setGameStarted(true);
  };

  const handleResetGame = () => {
    setGameStarted(false);
  };

  return (
    <View style={tw`flex-1`}>
      {!gameStarted ? (
        <SetupComponent onStartGame={handleStartGame} isRunning={false} />
      ) : (
        <TimerComponent
          player1Name={player1Name}
          player2Name={player2Name}
          player1Time={player1Time}
          player2Time={player2Time}
          onResetGame={handleResetGame}
        />
      )}
    </View>
  );
};

export default App;