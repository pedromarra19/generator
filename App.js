import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity, Modal,  } from 'react-native';
import Slider from '@react-native-community/slider'
import { useState } from 'react'
import { ModalPassword } from './src/components/modal';


let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"

export default function App() {
  
  const [size, setSize] = useState(8)
  const [passwordValue, setPasswordValue] = useState("")
  const [modalVisible, setModalVisible] = useState(false)

  function generatePassword(){

    let password = "";

    for(let i = 0, n = charset.length; i < size; i++){
      password += charset.charAt(Math.floor(Math.random() * n))
    }
    setPasswordValue(password)
    setModalVisible(true)
  }


  return (

    <View style={styles.container}>

      <Image 
        source={require("./src/assets/icon.png")}
        style={styles.icon}  
      />

      <Text style={styles.title}>{size} caracteres</Text>

      <View style={styles.area}>
        <Slider
          style={styles.mySlider}
          minimumValue={8}
          maximumValue={20}
          value={size}
          onValueChange={ (value) => setSize(value.toFixed(0)) }
          minimumTrackTintColor="#000"
          thumbTintColor="#000"
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={generatePassword}>
        <Text style={styles.textButton}>Gerar</Text>
      </TouchableOpacity>

      <Modal visible={modalVisible} animationType="fade" transparent={true}>
        <ModalPassword password={passwordValue} handleClose={ () => setModalVisible(false)}/>
      </Modal>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F3FF',
    alignItems: 'center',
    justifyContent: 'center',
  },

  icon: {
    marginBottom: 60,
    width: 175,
    height: 175,
    resizeMode: 'stretch'
  },

  area: {
    marginTop: 14,
    marginBottom: 14,
    width: "80%",
    backgroundColor: '#FFF',
    borderRadius: 16,
    padding: 20
  },

  button: {
    backgroundColor: '#DAA520',
    width: '80%',
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 32,
    marginTop: 20,
 
  },

  textButton: {
    color: "#FFF",
    fontSize: 20,
    fontWeight: 'bold'
  },

  title: {
    fontSize: 30,
    fontWeight: 'bold',
  }
});
