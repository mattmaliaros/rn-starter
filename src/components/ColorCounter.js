import React, { useState } from 'react';
import { StyleSheet, View, Text, Button, FlatList } from 'react-native';

const ColorCounter = ({ color }) => {
  return (
    <View>
      <Text style={styles.text}>{color}</Text>
      <Button title={`Increase ${color}`} />
      <Button title={`Decrease ${color}`} />
    </View>
  );
};
const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    textAlign: 'center'
  }
});

export default ColorCounter;
