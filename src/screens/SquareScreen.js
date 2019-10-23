import React, { useState } from 'react';
import { StyleSheet, View, Text, Button, FlatList } from 'react-native';
import ColorCounter from '../components/ColorCounter';

const SquareScreen = () => {
  return (
    <View>
      <ColorCounter color ='Red'> </ColorCounter>
      <ColorCounter color ='Green'> </ColorCounter>
      <ColorCounter color = 'Blue'> </ColorCounter>
    </View>
  );
};
const styles = StyleSheet.create({});

export default SquareScreen;
