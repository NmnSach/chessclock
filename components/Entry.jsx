import React, { useState } from 'react';
import { Button, SafeAreaView, StyleSheet, Text, View, Modal } from 'react-native';
import Clock from './Clock';

const Entry = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const [showClock, setShowClock] = useState(false);

    const closeModal = () => {
        setModalVisible(false);
        setShowClock(true);
    }

    return (
        <View style={styles.modalContainer}>
            <Modal
                visible={modalVisible}
                animationType="slide"
                onRequestClose={() => setModalVisible(false)}
            >
                <SafeAreaView style={{ flex: 1, backgroundColor: 'black' }}>
                    <View style={styles.modal}>
                        <Text style={styles.modalText}>Some Time</Text>
                        <Button title="Start" onPress={closeModal} />
                    </View>
                </SafeAreaView>
            </Modal>
            <Button title="Set Time" onPress={() => setModalVisible(true)} />
            {showClock && <Clock />}
        </View>
    );
};

const styles = StyleSheet.create({
    modalContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white'
    },
    modal: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalText: {
        color: 'white',
        fontSize: 50,
        textAlign: 'center'
    }
});

export default Entry;
