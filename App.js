import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, SafeAreaView, StyleSheet, Text, View, Modal, Touchable, Pressable, Image } from 'react-native';
import tw from 'twrnc';

export default function App() {
  const [color, setColor] = useState('black');
  const [secondaryColor, setSecondaryColor] = useState('black');
  const [time1, setTime1] = useState(0);
  const [time2, setTime2] = useState(0);
  const [modalVisible, setModalVisible] = useState(false);
  const [activeTimer, setActiveTimer] = useState(null); // State to track active timer

  function changeColor() {
    if (color == '#D2D6EF') {
      setColor('#baca44');
      setSecondaryColor('#D2D6EF');
    } else {
      setColor('#D2D6EF');
      setSecondaryColor('#baca44');
    }
  }

  function changeColorSecondary() {
    if (color == '#D2D6EF') {
      setColor('#baca44');
      setSecondaryColor('#D2D6EF');
    } else {
      setColor('#D2D6EF');
      setSecondaryColor('#baca44');
    }
  }

  function openModal() {
    setModalVisible(true);
  }

  function closeModal() {
    setModalVisible(false);
  }

  function resetTime() {
    setTime1(0);
    setTime2(0);
  }

  function startTimer1(time) {
    let totalSeconds = time * 60;

    const timer = setInterval(() => {
      if (activeTimer === 1) {
        setTime1(totalSeconds);
        totalSeconds--;
        if (totalSeconds < 0) {
          clearInterval(timer);
        }
      }
    }, 1000);

    return timer;
  }

  function startTimer2(time) {
    let totalSeconds = time * 60;

    const timer = setInterval(() => {
      if (activeTimer === 2) {
        setTime2(totalSeconds);
        totalSeconds--;
        if (totalSeconds < 0) {
          clearInterval(timer);
        }
      }
    }, 1000);

    return timer;
  }

  function handlePress(timer) {
    if (activeTimer === timer) {
      setActiveTimer(null);
    } else {
      setActiveTimer(timer);
    }
  }

  return (
    <View style={tw`h-full w-full flex justify-center items-center bg-black`}>
      <Pressable onPress={() => { changeColor(); handlePress(2); startTimer2(time2); }} style={[{ backgroundColor: secondaryColor }, tw`flex h-7/16 w-full justify-center items-center`]}>
        <Text style={[tw`font-bold text-9xl text-white`, { transform: [{ rotate: '180deg' }] }]}>{time1}</Text>
      </Pressable>
      <View style={tw`flex flex-row h-2/16 w-full justify-between items-center bg-gray-200`}>
        <Pressable onPress={openModal} style={tw`flex justify-center items-center w-1/2`}>
          <Image source={require('./assets/clock_2.png')} style={tw`h-12 w-12`} />
        </Pressable>
        <Pressable onPress={resetTime} style={tw`flex justify-center items-center w-1/2`}>
          <Image source={require('./assets/reset.png')} style={tw`h-12 w-12`} />
        </Pressable>
      </View>

      <Pressable onPress={() => { changeColorSecondary(); handlePress(1); startTimer1(time1); }} style={[{ backgroundColor: color }, tw`flex h-7/16 w-full justify-center items-center`]}>
        <Text style={tw`font-bold text-9xl text-white`}>{time2}</Text>
      </Pressable>

      <Modal
        animationType="slide"
        transparent={false}
        visible={modalVisible}
        onRequestClose={closeModal}
      >
        <View style={tw`flex-1 my-32 justify-between items-center`}>
          <Button onPress={() => { setTime1(1); closeModal(); setTime2(1); }} title='1 Minute' />
          <Seperator />
          <Button onPress={() => { setTime1(3); closeModal(); setTime2(3); }} title='3 Minutes' />
          <Seperator />

          <Button onPress={() => { setTime1(5); closeModal(); setTime2(5); }} title='5 Minutes' />
          <Seperator />

          <Button onPress={() => { setTime1(10); closeModal(); setTime2(10); }} title='10 Minutes' />
          <Seperator />

          <Button onPress={() => { setTime1(30); closeModal(); setTime2(30); }} title='30 Minutes' />
          <Seperator />

          <Button title="Close" onPress={closeModal} color={'red'} />
        </View>
      </Modal>
    </View>
  );
}

const seperatorStyles = {
  height: 0.5,
  width: '60%',
  backgroundColor: '#ddd'
}

const Seperator = () => <View style={seperatorStyles} />
