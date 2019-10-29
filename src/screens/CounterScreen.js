import React, { useReducer } from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native';

const reducer = (state, action) => {
  // state is an OBJECT --- {counter: number}
  // action is looking to perform something specific --- {type: 'setIncrease || 'setDecrease, payload: 1}
  // payload is the AMOUNT we are incrementing/decrementing
  switch (action.type) {
    case 'setIncrease':
      return { ...state, counter: state.counter + action.payload };
    case 'setDecrease':
      return state.counter <= 0
        ? state
        : { ...state, counter: state.counter - action.payload };
    default:
  }
};

const CounterScreen = () => {
  const [state, dispatch] = useReducer(reducer, { counter: 0 });
  const { counter } = state;

  return (
    <View>
      <Button
        title='Increase'
        onPress={() => dispatch({ type: 'setIncrease', payload: 1 })}
      />
      <Button
        title='Decrease'
        onPress={() => dispatch({ type: 'setDecrease', payload: 1 })}
      />
      <Text>Current Count:{counter}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default CounterScreen;

// class CounterScreen extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       counter: 0
//     };
//   }
//   incrementCounter = () => {
//     this.setState({ counter: this.state.counter + 1 });
//   };
//   decrementCounter = () => {
//     this.setState({ counter: this.state.counter - 1 });
//   };
//   render() {
//     return (
//       <View>
//         <Button title='Increase' onPress={this.incrementCounter} />
//         <Button title='Decrease' onPress={this.decrementCounter} />
//         <Text>Current Count: {this.state.counter}</Text>
//       </View>
//     );
//   }
// }
