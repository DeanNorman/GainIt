import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const CardButton = ({ onPressProp, children }) => {
  const { buttonStyle, textStyle } = styles;

  return(
    // catch feedback from user, hook
    <TouchableOpacity
      onPress={onPressProp}
      style={buttonStyle}>
      <Text style={textStyle}>
        Edit Meals
      </Text>
    </TouchableOpacity>
  );
};

const styles = {
  textStyle: {
    alignSelf: 'center',
    color: '#1C9963',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10
  },
  buttonStyle: {

    alignSelf: 'stretch',
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#1C9963',
    marginLeft: 5,
    marginRight: 5
  }
};

export default CardButton;
