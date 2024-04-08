import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';


const Clock = () => {
    return (
        <View style={styles.container}>

            <View style={styles.time1}>
                <Text style={styles.text1}>4:00</Text>
                {/* <Text style={styles.text1}>Hello this is my first native project.</Text> */}
                <StatusBar style="auto" />
            </View>

            <View style={styles.time2}>
                <Text style={styles.text2}>4:00</Text>
                {/* <Text style={styles.text1}>Hello this is my first native project.</Text> */}
                <StatusBar style="auto" />
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
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


export default Clock
