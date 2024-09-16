import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { globalStyles } from '../styles/global';

export const StyledButton = ({ type = 'primary', onPress, title }) => {
  return (
    <TouchableOpacity
      style={type === 'primary' ? globalStyles.buttonPrimary : globalStyles.buttonSecondary}
      onPress={onPress}
    >
      <Text style={type === 'primary' ? globalStyles.buttonTextPrimary : globalStyles.buttonTextSecondary}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};
