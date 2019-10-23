import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const ComponentsScreen = () => {
  const name = 'Matt';
  const greeting = <Text style={styles.textForName}>My name is {name}</Text>;
  return (
    <View>
      <Text style={styles.text}>Getting start with React Native</Text>
      {greeting}
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 45
  },
  textForName: {
    fontSize: 20
  }
});

export default ComponentsScreen;
