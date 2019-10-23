import React, { useState } from 'react';
import { StyleSheet, View, Button, FlatList } from 'react-native';

const ColorScreen = () => {
  const [color, setColor] = useState([]);
  return (
    <View>
      <Button
        title='Add a Color'
        onPress={() => {
          setColor([...color, randRGB()]);
        }}
      />

      <FlatList
        keyExtractor={item => item}
        data={color}
        renderItem={({ item }) => {
          return (
            <View style={{ height: 100, width: 100, backgroundColor: item }} />
          );
        }}
      />
    </View>
  );
};
const styles = StyleSheet.create({});

const randRGB = () => {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);

  return `rgb(${red}, ${green}, ${blue})`;
};

export default ColorScreen;
