import { StyleSheet, Text, View, Image } from 'react-native';
import Slider from '@react-native-community/slider'

export default function App() {
  return (
    <View style={styles.container}>
      <Image
      source={require("./src/assets/icone.jpeg")}
      style={styles.icone}
      />

      <Text style={styles.title}>20 caracteres</Text>

      <View style={styles.area}>
        <Slider
        style={styles.mySlider}
        minimumValue={6}
        maximumValue={20}
        />
      </View>
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
  }
});
