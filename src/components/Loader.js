import React from 'react';
import { StyleSheet } from 'react-native';
import { Text, View, ActivityIndicator } from 'react-native';
import { colors, globalStyles } from '../styles/global';

export const Loader = ({ message }) => {
  return (
    <View style={[globalStyles.container, styles.container]}>
        <ActivityIndicator
          style={styles.loadingSpinner}
          color={colors.primary}
          size="large"  
        />
        <Text style={globalStyles.heading}>
          {message}
        </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center'
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