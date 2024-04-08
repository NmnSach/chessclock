import React, { useState } from 'react';
import { Button, SafeAreaView, StyleSheet, Text, View, Modal } from 'react-native';



const Entry = () => {
    const [modalVisible, setModalVisible] = useState(false);

    const closeModal = () => {
        setModalVisible(false);
    }

    return (
        <View style={styles.modalContainer}>
            <Modal
                visible={modalVisible}
                animationType="slide"
                onRequestClose={closeModal}
            >
                <SafeAreaView style={{ flex: 1, backgroundColor: 'black' }}>
                    <View style={styles.modal}>
                        <Text style={styles.modalText}>Modal</Text>
                        <Button title="Start" onPress={closeModal} />
                    </View>
                </SafeAreaView>
            </Modal>
            <Button title="Set Time" onPress={() => setModalVisible(true)} />
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
