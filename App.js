import React, {useState} from 'react';
import  { Pressable,
   StyleSheet,
   Text,
   useColorScheme,
   View,
  Modal} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import {Form} from './src/components/Form';

const App =() => {
  const [modalVisible, setModalVisible] = useState(false);
  console.log(modalVisible);
  const newUser = () => {
    console.log('diste click en  crear Nuevo usuario');
  };
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    flex:1
  };

  return (
    <View style={backgroundStyle}>
      <Text style={styles.sectionTitle}>App de Quemados{' '}
        <Text style={styles.sectionTitleBold}>UAM</Text>
      </Text>
      <Pressable 
      onPress= {() => setModalVisible(true)}
      style={styles.btnNuevoUsuario}>
        <Text style={styles.btnTxtNuevoUsuario}>Nueva Cita</Text>
      </Pressable>
      <Form modalVisible={modalVisible}/>
    </View>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    textAlign: 'center',
    textTransform: 'uppercase',
    fontSize: 30,
    color: '#374151',
    fontWeight:'600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  sectionTitleBold: {
    fontWeight: '900',
    color: '#6D28D9',
    textAlign: 'center',
  },
  btnNuevoUsuario: {
    backgroundColor: '#6D28D9',
    padding: 20,
    marginTop: 20,
    marginHorizontal: 20,
    borderRadius: 10,
  },
  btnTxtNuevoUsuario: {
    textAlign: 'center',
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: '900',
    textTransform: 'uppercase',
  },

});

export default App;
