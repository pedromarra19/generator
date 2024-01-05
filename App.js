import { StyleSheet, Text, View, Image, TouchableOpacity, Modal,  } from 'react-native';
import Slider from '@react-native-community/slider'
import { useState } from 'react'
import { ModalPassword } from './src/components/modal';

let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"

export default function App() {
  
  const [size, setSize] = useState(4)
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
      source={require("./src/assets/icone.jpeg")}
      style={styles.icone}
      />

      <Text style={styles.title}>{size} lados</Text>

      <View style={styles.area}>
        <Slider
          style={styles.mySlider}
          minimumValue={4}
          maximumValue={20}
          step={2}
          value={size}
          onValueChange={ (value) => setSize(value.toFixed(0)) }
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={generatePassword}>
        <Text style={styles.textButton}>Jogar</Text>
      </TouchableOpacity>

      <Modal visible={modalVisible} animtionType="fade" transparent={true}>
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

  icone: {
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
    padding: 6
  },

  button: {
    backgroundColor: '#000',
    width: '80%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 16
  },

  textButton: {
    color: "#FFF",
    fontSize: 20
  },

  title: {
    fontSize: 30,
    fontWeight: 'bold',
  }
});
