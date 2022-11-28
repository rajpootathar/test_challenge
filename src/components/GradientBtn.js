import React from 'react';
import {Text, StyleSheet} from 'react-native';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';

const GradientBtn = ({height, width, isJoined, active}) => {
  const fadeIn = {
    from: {
      opacity: 0,
    },
    to: {
      opacity: 1,
    },
  };
  const AnimatedTextComponent = ({name}) => {
    return (
      <Animatable.View animation={fadeIn}>
        <Text style={[styles.btn, {color: isJoined ? 'black' : 'white'}]}>
          {name}
        </Text>
      </Animatable.View>
    );
  };
  return (
    <LinearGradient
      colors={isJoined ? ['white', 'white'] : ['#9351DC', '#E73999']}
      style={[styles.btnContainer, {height: height, width: width}]}>
      {active ? (
        <AnimatedTextComponent name="✓" />
      ) : isJoined ? (
        <AnimatedTextComponent name="Joined" />
      ) : (
        <AnimatedTextComponent name="Join" />
      )}
    </LinearGradient>
  );
};
const styles = StyleSheet.create({
  btnContainer: {
    justifyContent: 'center',
    borderRadius: 30,
  },
  btn: {
    textAlign: 'center',
    color: 'white',
    fontFamily: 'Montserrat-Regular',
    fontWeight: '600',
    fontSize: 14,
  },
});

export default GradientBtn;
