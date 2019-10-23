import React, { useState } from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native';
const CounterScreen = () => {
  const [counter, setCounter] = useState(0);

  return (
    <View>
      <Button title='Increase' onPress={() => setCounter(counter + 1)} />
      <Button title='Decrease' onPress={() => setCounter(counter - 1)} />
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
