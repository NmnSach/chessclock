import React, { useState, useEffect, useRef } from 'react';
import { View, Text, TouchableOpacity, TextInput, Alert } from 'react-native';
import tw from 'twrnc';


const SetupComponent = ({ onStartGame, isRunning }) => {
  const [player1Name, setPlayer1Name] = useState('Player 1');
  const [player2Name, setPlayer2Name] = useState('Player 2');
  const [player1Input, setPlayer1Input] = useState('5');
  const [player2Input, setPlayer2Input] = useState('5');

  const handleStartGame = () => {
    const player1Seconds = parseInt(player1Input, 10) * 60;
    const player2Seconds = parseInt(player2Input, 10) * 60;

    if (isNaN(player1Seconds) || isNaN(player2Seconds) || player1Seconds <= 0 || player2Seconds <= 0) {
      Alert.alert('Invalid Input', 'Please enter valid time limits for both players.');
      return;
    }

    if (!player1Name.trim() || !player2Name.trim()) {
      Alert.alert('Invalid Input', 'Please enter names for both players.');
      return;
    }

    onStartGame({
      player1Name,
      player2Name,
      player1Time: player1Seconds,
      player2Time: player2Seconds,
    });
  };

  return (
    <View style={tw`flex-1 justify-center items-center bg-gray-800`}>
      <Text style={tw`text-2xl text-white mb-8`}>Chess Clock</Text>

      {/* Player Names Input */}
      <View style={tw`flex-row justify-around w-full mb-4`}>
        <View style={tw`items-center`}>
          <Text style={tw`text-white text-lg mb-2`}>Player 1 Name</Text>
          <TextInput
            style={tw`bg-white p-2 rounded-lg w-40 text-center`}
            value={player1Name}
            onChangeText={(text) => setPlayer1Name(text)}
            editable={!isRunning}
          />
        </View>

        <View style={tw`items-center`}>
          <Text style={tw`text-white text-lg mb-2`}>Player 2 Name</Text>
          <TextInput
            style={tw`bg-white p-2 rounded-lg w-40 text-center`}
            value={player2Name}
            onChangeText={(text) => setPlayer2Name(text)}
            editable={!isRunning}
          />
        </View>
      </View>

      {/* Timer Inputs */}
      <View style={tw`flex-row justify-around w-full mb-8`}>
        <View style={tw`items-center`}>
          <Text style={tw`text-white text-lg mb-2`}>Time (mins)</Text>
          <TextInput
            style={tw`bg-white p-2 rounded-lg w-20 text-center`}
            keyboardType="numeric"
            value={player1Input}
            onChangeText={(text) => setPlayer1Input(text)}
            editable={!isRunning}
          />
        </View>

        <View style={tw`items-center`}>
          <Text style={tw`text-white text-lg mb-2`}>Time (mins)</Text>
          <TextInput
            style={tw`bg-white p-2 rounded-lg w-20 text-center`}
            keyboardType="numeric"
            value={player2Input}
            onChangeText={(text) => setPlayer2Input(text)}
            editable={!isRunning}
          />
        </View>
      </View>

      {/* Start Game Button */}
      <View style={tw`absolute bottom-0 mb-8`}>
        <TouchableOpacity
          style={tw`bg-green-500 px-30 py-5 rounded-lg`}
          onPress={handleStartGame}
          disabled={isRunning}
        >
          <Text style={tw`text-white text-xl`}>Start Game</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SetupComponent;