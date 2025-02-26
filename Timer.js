import React, { useState, useEffect, useRef } from 'react';
import { View, Text, TouchableOpacity, TextInput, Alert } from 'react-native';
import tw from 'twrnc';

// Timer Component: Handles the chess clock functionality
const TimerComponent = ({ player1Name, player2Name, player1Time, player2Time, onResetGame }) => {
  const [activePlayer, setActivePlayer] = useState(1);
  const [currentPlayer1Time, setCurrentPlayer1Time] = useState(player1Time);
  const [currentPlayer2Time, setCurrentPlayer2Time] = useState(player2Time);
  const [player1Moves, setPlayer1Moves] = useState(0);
  const [player2Moves, setPlayer2Moves] = useState(0);
  const [isRunning, setIsRunning] = useState(true);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (isRunning) {
      intervalRef.current = setInterval(() => {
        if (activePlayer === 1) {
          setCurrentPlayer1Time((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
        } else {
          setCurrentPlayer2Time((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
        }
      }, 1000);
    } else {
      clearInterval(intervalRef.current);
    }

    return () => clearInterval(intervalRef.current);
  }, [isRunning, activePlayer]);

  useEffect(() => {
    if (currentPlayer1Time === 0) {
      Alert.alert('Game Over', `${player1Name} ran out of time! ${player2Name} wins!`);
      resetGame();
    } else if (currentPlayer2Time === 0) {
      Alert.alert('Game Over', `${player2Name} ran out of time! ${player1Name} wins!`);
      resetGame();
    }
  }, [currentPlayer1Time, currentPlayer2Time]);

  const switchPlayer = () => {
    if (activePlayer === 1) {
      setPlayer1Moves((prevMoves) => prevMoves + 1);
    } else {
      setPlayer2Moves((prevMoves) => prevMoves + 1);
    }
    setActivePlayer((prevPlayer) => (prevPlayer === 1 ? 2 : 1));
  };

  const resetGame = () => {
    setIsRunning(false);
    onResetGame();
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  return (
    <View style={tw`flex-1 justify-center items-center bg-gray-800`}>
      <Text style={tw`text-2xl text-white mb-8`}>Chess Clock</Text>

      {/* Player Timers and Move Counters */}
      <View style={tw`flex-row justify-around w-full`}>
        <TouchableOpacity
          style={[
            tw`p-6 rounded-lg`,
            activePlayer === 1 ? tw`bg-blue-500` : tw`bg-gray-500`,
          ]}
          onPress={activePlayer === 1 ? switchPlayer : null}
          disabled={!isRunning || activePlayer !== 1}
        >
          <Text style={tw`text-white text-xl`}>{player1Name}</Text>
          <Text style={tw`text-white text-2xl mt-2`}>{formatTime(currentPlayer1Time)}</Text>
          <Text style={tw`text-white text-lg mt-2`}>Moves: {player1Moves}</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            tw`p-6 rounded-lg`,
            activePlayer === 2 ? tw`bg-red-500` : tw`bg-gray-500`,
          ]}
          onPress={activePlayer === 2 ? switchPlayer : null}
          disabled={!isRunning || activePlayer !== 2}
        >
          <Text style={tw`text-white text-xl`}>{player2Name}</Text>
          <Text style={tw`text-white text-2xl mt-2`}>{formatTime(currentPlayer2Time)}</Text>
          <Text style={tw`text-white text-lg mt-2`}>Moves: {player2Moves}</Text>
        </TouchableOpacity>
      </View>

      {/* Reset Game Button */}
      <TouchableOpacity
        style={tw`bg-yellow-500 p-4 rounded-lg mt-8`}
        onPress={resetGame}
      >
        <Text style={tw`text-white text-xl`}>Reset Game</Text>
      </TouchableOpacity>
    </View>
  );
};

export default TimerComponent;