import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import Slider from '@react-native-community/slider'
import { useState } from 'react'

let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"

export default function App() {
  
  const [size, setSize] = useState(6)

  function generatePassword(){

    let password = "";

    for(let i = 0, n = charset.length; i < size; i++){
      password += charset.charAt(Math.floor(Math.random() * n))
    }
    console.log(password);
  }


  return (
    <View style={styles.container}>
      <Image
      source={require("./src/assets/icone.jpeg")}
      style={styles.icone}
      />

      <Text style={styles.title}>{size} caracteres</Text>

      <View style={styles.area}>
        <Slider
          style={styles.mySlider}
          minimumValue={6}
          maximumValue={20}
          value={size}
          onValueChange={ (value) => setSize(value.toFixed(0)) }
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={generatePassword}>
        <Text style={styles.textButton}>Gerar</Text>
      </TouchableOpacity>

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
