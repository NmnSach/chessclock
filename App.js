import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello world</Text>
      <Text style={styles.text}>Hello this is my first native project.</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black', // Set background color to black
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'white', // Set text color to white
    fontSize: 20,
    fontWeight: 'bold',
  },
});

