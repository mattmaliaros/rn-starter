import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import ColorCounter from '../components/ColorCounter';

const SquareScreen = () => {
  const colorInc = 20;
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);
  const setColor = (color, change) => {
    //color === 'red', 'green', 'blue'
    //change === +10, -10
    switch (color) {
      case 'red':
        red + change > 255 || red + change < 0 ? false : setRed(red + change);
        break;
      case 'green':
        green + change > 255 || green + change < 0
          ? false
          : setGreen(green + change);
        break;
      case 'blue':
        blue + change > 255 || blue + change < 0
          ? false
          : setBlue(blue + change);
        break;
    }
  };
  return (
    <View>
      <ColorCounter
        onIncrease={() => setColor('red', colorInc)}
        onDecrease={() => setColor('red', -1 * colorInc)}
        color='Red'
      ></ColorCounter>

      <ColorCounter
        onIncrease={() => setColor('green', colorInc)}
        onDecrease={() => setColor('green', -1 * colorInc)}
        color='Green'
      ></ColorCounter>
      <ColorCounter
        onIncrease={() => setColor('blue', colorInc)}
        onDecrease={() => setColor('blue', -1 * colorInc)}
        color='Blue'
      ></ColorCounter>
      <View
        style={{
          height: 100,
          width: 100,
          backgroundColor: `rgb(${red},${green},${blue})`
        }}
      />
    </View>
  );
};
const styles = StyleSheet.create({});

export default SquareScreen;
