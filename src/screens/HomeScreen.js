import React from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.text}>Home</Text>
      <Button
        title='Go to Components Demo'
        onPress={() => navigation.navigate('Components')}
      />
      <Button
        title='Go to List Demo'
        onPress={() => navigation.navigate('List')}
      />
      <Button
        title='Go to ImageScreen Demo'
        onPress={() => navigation.navigate('Image')}
      />
      <Button
        title='Go to CounterScreen Demo'
        onPress={() => navigation.navigate('Count')}
      />
      <Button
        title='Go to ColorScreen Demo'
        onPress={() => navigation.navigate('Color')}
      />
      <Button
        title='Go to SquareScreen Demo'
        onPress={() => navigation.navigate('Square')}
      />
      <Button
        title='Go to NameScreen Demo'
        onPress={() => navigation.navigate('Name')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    textAlign: 'center'
  }
});

export default HomeScreen;
