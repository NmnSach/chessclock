import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, SafeAreaView, StyleSheet, Text, View, Modal } from 'react-native';
import Entry from './components/Entry';

export default function App() {

  return (
    <View>
      <Entry />
      <StatusBar style="auto" />
    </View>
  );
}





