import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import GradientBtn from '../components/GradientBtn';
const AnimatedButton = () => {
  const [active, setActive] = useState(false);
  const [isJoined, setIsJoined] = useState(false);
  const handleClick = () => {
    setActive(!active);
    setTimeout(() => {
      setActive(false);
      setIsJoined(true);
    }, 1000);
  };
  const buttonTitle = active ? '✓' : isJoined ? 'Joined' : 'Join';

  return (
    <View>
      <Text style={styles.heading}>
        Press prototype to see button animation
      </Text>
      <TouchableOpacity
        onPress={handleClick}
        disabled={active || isJoined}
        style={[styles.wrapper]}>
        <GradientBtn
          active={active}
          isJoined={isJoined}
          height={25}
          width={62}
          name={buttonTitle}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  heading: {
    color: 'black',
    textAlign: 'center',
    width: 164,
    height: 52,
    marginBottom: 30,
    fontSize: 14,
    fontFamily: 'Montserrat-Regular',
  },
  wrapper: {
    alignSelf: 'center',
  },
});

export default AnimatedButton;
