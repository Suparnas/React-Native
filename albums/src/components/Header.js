//Import libraries for making a component
import React from 'react';
import { Text, View } from 'react-native';

//Make a component
const Header = (props) => {
  const { textStyle, viewStyle } = styles;

  return (
    <View style={viewStyle}>
    <Text style={textStyle}> {props.headerText} </Text>
    </View>
  );
};

const styles = {
  viewStyle: {
    backgroundColor: '#FF4500',
    justifyContent: 'center',
    alignItems: 'center',
    height: 190,
    paddingTop: 65,
    shadowColor: '#0000',
    shadowOffset: { width: 1, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative'
  },
  textStyle: {
    fontSize: 20
  }
};

//Make the component available to other parts of the App
export default Header;
