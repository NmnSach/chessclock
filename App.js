import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, SafeAreaView, StyleSheet, Text, View, Modal } from 'react-native';
import Entry from './components/Entry';

export default function App() {



  const handlePress = () => {
    console.log('Text Pressed');
  }
  return (


    <View style={styles.container}>

      <Entry />



    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: 'black', // Set background color to black
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  time1: {
    width: '100%',
    height: '50%',
    backgroundColor: '#FFA500',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  time2: {
    width: '100%',
    height: '50%',
    backgroundColor: '#FFF',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text1: {
    color: 'white',
    fontSize: 100,
  },
  text2: {
    color: 'black',
    fontSize: 100,
  },
  modal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }



});

