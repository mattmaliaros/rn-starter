import React, { useState } from 'react';
import { Text, StyleSheet, View, TextInput, Button, Alert } from 'react-native';

const NameScreen = () => {
  const [name, setName] = useState('');
  return (
    <View>
      <TextInput
        value={name}
        style={styles.input}
        autoCapitalize='none'
        autoCorrect={false}
        onChangeText={newValue => setName(newValue)}
      />
      {name.length < 4 ? <Text>Name must be 4 characters</Text> : null}
      <Button title='Submit' onPress={() => Alert.alert(`Hello ${name}`)} />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    margin: 15,
    borderColor: 'black',
    borderWidth: 1,
    textAlign: 'center'
  }
});

export default NameScreen;
