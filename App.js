import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button
} from 'react-native';

const App = () => {
  return (
    <View style = {styles.container}>
      <View style = {styles.inscription}>
        <Text style = {styles.text}>Згенеруйте список</Text>
      </View>
      <View style = {styles.button}>
      <Button title='OK'/> 
      </View>    
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ff0',
    alignItems: 'center',
    justifyContent: 'center'
  },
  inscription: {
    flex: 1,
    //flexDirection: 'row'
  },
  button: {
    flex: 1,
    height: '10%',
    width: '40%',
    //flexDirection: 'row'
  },
  text: {
    marginTop: 1,
    fontSize: 40,
    color: 'black'
  },
});

export default App;

 
