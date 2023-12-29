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
        <Text style = {styles.text}>Введіть ім'я</Text>
      </View>
      <View style = {styles.inscription}>
      <Button title='OK'/> 
      </View>    
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: '#ff0',
    alignItems: 'center',
    justifyContent: 'center'
  },
  inscription: {
    flex: 0,
    flexDirection: 'row'
  },
  input: {
    height: '10%',
    width: '40%',
    margin: 120,
    borderWidth: 2,
    padding: 10,
    color: 'black'
  },
  text: {
    marginTop: 1,
    fontSize: 40,
    color: 'black'
  },
});

export default App;

 
