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
    backgroundColor: '#FA8089',
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
    paddingTop: 65,
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
export default Header;
