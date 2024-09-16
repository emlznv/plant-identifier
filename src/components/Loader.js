import React from 'react';
import { Text, View, ActivityIndicator } from 'react-native';
import { colors, globalStyles } from '../styles/global';

export const Loader = ({ message }) => {
  return (
    <View style={[globalStyles.container, { justifyContent: 'center' }]}>
        <ActivityIndicator style={{ marginBottom: 50, transform: [{ scaleX: 2 }, { scaleY: 2 }]}} size="large" color={colors.primary} />
        <Text style={globalStyles.heading}>
          {message}
        </Text>
    </View>
  );
};
