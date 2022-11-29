import React from 'react';
import { Text,Modal,Button,View } from 'react-native';

export const From = ({modalVisible, newUser}) => {
    
    return (
        <Modal animationType='slide' visible={modalVisible}>
            <View>
            <Text>Formulario de registro</Text>
            <Button title='Aceptar' onPress={newUser}/>
            </View>
        </Modal>

    );

};