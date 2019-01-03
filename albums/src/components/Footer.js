//Import libraries for making a component
import React from 'react';
import { Text, View } from 'react-native';

//Make a component
const Footer = (props) => {
  const { textStyle, viewStyle } = styles;

  return (
    <View style={viewStyle}>
    <Text style={textStyle}>{props.f1}{props.f2}{props.f3}{props.f4} </Text>

    </View>
  );
};

const styles = {
  viewStyle: {
    backgroundColor: '#FABF48',
    justifyContent: 'center',
    alignItems: 'center',
    height: 80,
    paddingBottom: 15,
    shadowColor: '#0011000',
    shadowOffset: { width: 1, height: 2 },
    shadowOpacity: 0.1,
    elevation: 2,
    position: 'relative'
  },
  textStyle: {
    fontSize: 20
  }
};

//Make the component available to other parts of the App
export default Footer;
