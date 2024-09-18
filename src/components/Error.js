import React from 'react';
import { StyleSheet } from 'react-native';
import { Text, View, Image } from 'react-native';
import { globalStyles } from '../styles/global';
import { StyledButton } from './StyledButton';

export const Error = ({ message, onBack }) => {
  return (
    <View style={globalStyles.container}>
        <Text style={globalStyles.heading}>
           {message}
        </Text>
        <View style={globalStyles.content}>
          <Image
            source={require('../../assets/error.png')}
            style={styles.errorImage}
          />
      </View>
      <StyledButton type="secondary" title="Back to home" onPress={onBack} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center'
  },
  errorImage: {
    width: 270,
    height: 270,
    alignSelf: 'center',
  },
});