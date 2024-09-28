import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Image, TouchableOpacity } from 'react-native';

export const IconButton = ({ onPress, iconSource, style }) => {
    return (
      <TouchableOpacity onPress={onPress} style={[styles.button, style]}>
        <View style={styles.contentContainer}>
            <Image source={iconSource} style={styles.icon} />
        </View>
      </TouchableOpacity>
    );
  };
  
  const styles = StyleSheet.create({
    contentContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    icon: {
      width: 50,
      height: 50,
    },
  });
  