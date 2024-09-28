import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { colors, fontSizes } from '../styles/global';

export const StyledButton = ({ type = 'primary', onPress, title }) => {
  return (
    <TouchableOpacity
      style={type === 'primary' ? styles.buttonPrimary : styles.buttonSecondary}
      onPress={onPress}
    >
      <Text style={type === 'primary' ? styles.buttonTextPrimary : styles.buttonTextSecondary}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonPrimary: {
    backgroundColor: colors.primary,
    padding: 17,
    margin: 15,
    alignItems: 'center',
    borderRadius: 120,
    width: 260,
    alignSelf: 'center',
  },
  buttonTextPrimary: {
    color: colors.secondary,
    fontSize: fontSizes.md,
  },
  buttonSecondary: {
    backgroundColor: 'transparent',
    borderWidth: 2,
    borderColor: colors.primary,
    padding: 17,
    margin: 15,
    alignItems: 'center',
    borderRadius: 120,
    width: 260,
    alignSelf: 'center',
  },
  buttonTextSecondary: {
    color: colors.secondary,
    fontSize: fontSizes.md,
  },
});