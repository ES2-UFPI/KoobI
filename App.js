import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Image, View, TouchableOpacity } from 'react-native';
const clickHandler = () => {
  alert('Botão Clicado');
  };

export default function App() {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={clickHandler}
        style={styles.touchableOpacityStyle}>
          <Text style={styles.buttonText}>Adicionar</Text>
      </TouchableOpacity>
      
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    alignItems: 'center',
    justifyContent: 'center',
  },
  touchableOpacityStyle: {
    position: 'absolute',
    width: 129,
    height: 42,
    alignItems: "center",
    justifyContent: 'center',
    left: 194,
    bottom: 18,
    backgroundColor: '#2E4756',
    borderRadius: 12,
  },
  buttonText: {
    fontFamily: "Inter",
    fontSize: 18,
    fontWeight: "bold",
    color: "#FFFFFF"
  }
});
