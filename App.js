import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, SafeAreaView, StyleSheet, Text, View, Modal, Touchable, Pressable, Image } from 'react-native';
import tw from 'twrnc';

import Icon from 'react-native-ionicons';

export default function App() {
  const [color, setColor] = useState('white');
  const [secondaryColor, setSecondaryColor] = useState('white');
  const [time1, setTime1] = useState(0);
  const [time2, setTime2] = useState(0);
  const [modalVisible, setModalVisible] = useState(false);

  function changeColor() {
    if (color == '#769656') {
      setColor('#baca44');
      setSecondaryColor('#769656');
    } else {
      setColor('#769656');
      setSecondaryColor('#baca44');
    }
  }

  function changeColorSecondary() {
    if (color == '#769656') {
      setColor('#baca44');
      setSecondaryColor('#769656');
    } else {
      setColor('#769656');
      setSecondaryColor('#baca44');
    }
  }

  function openModal() {
    setModalVisible(true);
  }

  function closeModal() {
    setModalVisible(false);
  }

  return (
    <View style={tw`h-full w-full flex justify-center items-center bg-white`}>
      <Pressable onPress={changeColor} style={[{ backgroundColor: secondaryColor }, tw`flex h-7/16 w-full justify-center items-center`]}>
        <Text style={tw`font-bold text-9xl text-white`}>{time1}</Text>
      </Pressable>

      <View style={tw`flex h-2/16 w-full justify-center items-center bg-gray-200`}>
        <Pressable onPress={openModal}>
          <Image source={require('./assets/clock_2.png')} style={tw`h-12 w-12`} />

        </Pressable>
      </View>

      <Pressable onPress={changeColorSecondary} style={[{ backgroundColor: color }, tw`flex h-7/16 w-full justify-center items-center`]}>
        <Text style={tw`font-bold text-9xl text-white`}>{time1}</Text>
      </Pressable>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={closeModal}
      >
        <View style={tw`flex-1 py-28 justify-between items-center bg-white`}>
          {/* <Text style={tw`text-white`}>This is the modal content</Text> */}
          <Button onPress={() => { setTime1(1); closeModal(); }} title='1 Minute' />
          <Button onPress={() => { setTime1(3); closeModal(); }} title='3 Minutes' />
          <Button onPress={() => { setTime1(5); closeModal(); }} title='5 Minutes' />
          <Button onPress={() => { setTime1(10); closeModal(); }} title='10 Minutes' />
          <Button onPress={() => { setTime1(60); closeModal(); }} title='60 Minutes' />

          <Button title="Close" onPress={closeModal} />
        </View>
      </Modal>
    </View>
  );
}
