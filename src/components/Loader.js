import React from 'react';
import { StyleSheet } from 'react-native';
import { Text, View, ActivityIndicator } from 'react-native';
import { colors, globalStyles } from '../styles/global';

export const Loader = ({ message, customColors }) => {
  return (
    <View style={[globalStyles.container, styles.container, customColors?.loader]}>
        <ActivityIndicator
          style={styles.loadingSpinner}
          color={colors.primary}
          size="large"  
        />
        <Text style={[globalStyles.infoMessage, customColors?.loaderText]}>
          {message}
        </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  loadingSpinner: {
    marginBottom: 50,
    transform: [
      {
        scaleX: 1.5
      },
      { 
        scaleY: 1.5
      }
    ]
  },
});