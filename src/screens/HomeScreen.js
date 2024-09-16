import React from 'react';
import { View, Image, Text } from 'react-native';
import { globalStyles } from '../styles/global';
import { StyledButton } from '../components/StyledButton';

export default function HomeScreen({ navigation }) {
  const handlePress = (actionType) => {
    navigation.navigate('Scanner', { actionType });
  };

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.heading}>Discover and Identify Plants with Ease!</Text>
      <Image
        source={require('../../assets/logo.png')}
        style={globalStyles.logo}
      />
      <StyledButton type="primary" title="Scan plant" onPress={() => handlePress('scan')} />
      <Text style={{ alignSelf: 'center', fontSize: 15, color: '#FFE5CF' }}>or</Text>
      <StyledButton type="secondary" title="Upload from gallery" onPress={() => handlePress('upload')} />
    </View>
  );
}

