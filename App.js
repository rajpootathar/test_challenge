import React from 'react';
import {StyleSheet, View} from 'react-native';
import AnimatedButton from './src/screens/AnimatedButton';
const App = () => {
  return (
    <View style={styles.container}>
      <AnimatedButton />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    flex: 1,
  },
});
export default App;
