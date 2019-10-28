import React, { useReducer } from 'react';
import { StyleSheet, View } from 'react-native';
import ColorCounter from '../components/ColorCounter';

const colorInc = 20;

const reducer = (state, action) => {
  // state === {red: number, green: number, blue: number};
  // action === { type : 'change_red' || 'change_green' || 'change_blue', payload: 20 || -20 }
  switch (action.type) {
    case 'change_red':
      return state.red + action.payload > 255 || state.red + action.payload < 0
        ? state
        : { ...state, red: state.red + action.payload };
    case 'change_green':
      return state.green + action.payload > 255 ||
        state.green + action.payload < 0
        ? state
        : { ...state, green: state.green + action.payload };
    case 'change_blue':
      return state.blue + action.payload > 255 ||
        state.blue + action.payload < 0
        ? state
        : { ...state, blue: state.blue + action.payload };
    default:
  }
};

const SquareScreen = () => {
  const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0 });
  const { red, green, blue } = state;
  return (
    <View>
      <ColorCounter
        onIncrease={() => dispatch({ type: 'change_red', payload: colorInc })}
        onDecrease={() =>
          dispatch({ type: 'change_red', payload: -1 * colorInc })
        }
        color='Red'
      ></ColorCounter>

      <ColorCounter
        onIncrease={() => dispatch({ type: 'change_green', payload: colorInc })}
        onDecrease={() =>
          dispatch({ type: 'change_green', payload: -1 * colorInc })
        }
        color='Green'
      ></ColorCounter>
      <ColorCounter
        onIncrease={() => dispatch({ type: 'change_blue', payload: colorInc })}
        onDecrease={() =>
          dispatch({ type: 'change_blue', payload: -1 * colorInc })
        }
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
