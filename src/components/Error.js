import React from 'react';
import { StyleSheet } from 'react-native';
import { Text, View, Image } from 'react-native';
import { globalStyles } from '../styles/global';
import { StyledButton } from './StyledButton';

export const Error = ({ message, onBack }) => {
  return (
    <View style={[globalStyles.container, styles.container]}>
      <Image
        source={require('../../assets/error.png')}
        style={globalStyles.image}
      />
      <Text style={globalStyles.infoMessage}>
        {message}
      </Text>
      <StyledButton type="secondary" title="Back to home" onPress={onBack} />
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    justifyContent: 'center'
  },
});