import React from 'react';
import {
  Text,
  Modal,
  View,
  StyleSheet,
  View,
  SafeAreaView,
  ScrollView,
  TextInput,
} from 'react-native';

export const From = ({modalVisible, newUser}) => {
  return (
    <Modal animationType="slide" visible={modalVisible}>
      <SafeAreaView style={StyleSheet.content}>
        <ScrollView>
          <Text style={styles.title}>
            Nuevo{''}
            <Text style={styles.boldTitle}>Usuario</Text>
          </Text>
          <View style={styles - text_input}>
            <Text style={styles.label}>Nombre</Text>
            <TextInput
              style={styles.input}
              keyboardType=""
              placeholder="Nombre"
              placeholderTextColor={'#00000'}
            />
            <Text style={styles.label}>Correo</Text>
            <TextInput
              style={styles.input}
              keyboardType="phone-pad"
              placeholderTextColor={'#00000'}
            />
            <Text style={styles.label}>Nombre</Text>
            <TextInput
              style={styles.input}
              keyboardType=""
              placeholderTextColor={'#00000'}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    </Modal>
  );
};

const styles = StyleSheet.create({
    content: {
        backgroundColor: '#0069a3',
        flex: 1,
    },
    title: {
        fontSize: 20,
        fontWeight: '600',
        textAlign: 'center',
        marginTop: 20,
        marginEnd: 20,
        color: '#fff',
    },
    boldTitle: {
        fontWeight: '700',
    },
    label: {
        fontSize: 15,
        fontWeight: '600',
        color: '#fff',
        marginTop: 15,
        marginBottom:10,
    },
    text_input: {
        marginTop: 40,
        marginHorizontal: 30,
        marginBottom:100,
    },
    input: {
        backgroundColor: '#fff',
        padding: 15,
        borderRadius: 10,
        marginBottom: 10,
    },
});