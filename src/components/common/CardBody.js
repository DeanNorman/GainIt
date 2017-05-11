import React from 'react';
import { View, Text } from 'react-native';

// CArd Body
const CardBody = (props) => {
    const { inputStyle, labelStyle, containerStyle } = styles;
  return (
    <View style={containerStyle}>
      <Text style={labelStyle}>Breakfast</Text>
      <Text style={labelStyle}>06:00</Text>
      <Text style={labelStyle}>150/cal</Text>
    </View>
  );
};

const styles = {
  inputStyle:{
    color: '#000',
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 18,
    lineHeight: 23,
    flex: 2
  },
  labelStyle: {
    fontSize: 18,
    paddingLeft: 20,
    flex: 1
  },
  containerStyle: {
    height: 40,
    flexDirection: 'row',
    alignItems: 'center'
  }
};
export default CardBody;
