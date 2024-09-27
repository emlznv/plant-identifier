import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import { globalStyles } from '../styles/global';
import { StyledButton } from '../components/StyledButton';
import { IconButton } from '../components/IconButton';
import { useNavigation } from '@react-navigation/native';
import { useStorage } from '../context/context';

export const Home = () => {
  const { history } = useStorage(); 
  const handlePress = (actionType) => navigation.navigate('Scanner', { actionType });
  const navigation = useNavigation();

  return (
    <View style={globalStyles.container}>
      {!!history.length && (
        <IconButton
          style={styles.historyButton}
          onPress={() => navigation.navigate('History')}
          iconSource={require('../../assets/history-icon.png')}
        />
      )}
      <Text style={globalStyles.heading}>
        Discover and Identify Plants with Ease
      </Text>
      <View style={globalStyles.content}>
        <Image
          source={require('../../assets/logo.png')}
          style={globalStyles.image}
        />
      </View>
      <StyledButton type="primary" title="Scan plant" onPress={() => handlePress('scan')} />
      <Text style={globalStyles.text}>
        or
      </Text>
      <StyledButton type="secondary" title="Upload from gallery" onPress={() => handlePress('upload')} />
    </View>
  );
}

const styles = StyleSheet.create({
  historyButton: {
    position: 'absolute',
    top: 0,
    right: 0,
  },
});
