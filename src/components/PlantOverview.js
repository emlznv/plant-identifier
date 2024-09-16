import { View, Text, Image, StyleSheet } from 'react-native';
import { StyledButton } from './StyledButton';
import { globalStyles, colors } from '../styles/global';

export const PlantOverview = ({ plantData, photoUri, onBack }) => {
    const commonName = plantData.species.commonNames[0];
    const plantFamily = plantData.species.family.scientificNameWithoutAuthor;

    return (
        <View style={[globalStyles.container, { justifyContent: 'space-evenly', alignItems: 'center' }]}>
            <Text style={[globalStyles.heading, { marginBottom: 0 }]}>
                {plantData.species.scientificNameWithoutAuthor}
            </Text>
            {family && (
                <Text style={{ color: colors.secondary }}>
                    Part of the {plantFamily} family
                </Text>
            )}
            <Image source={{ uri: photoUri }} style={styles.plantImage} />
            {commonName && (
                <View style={{ alignItems: 'center' }}>
                    <Text style={{ color: colors.secondary, fontSize: 15, marginBottom: 10 }}>
                        Commonly known as:
                    </Text>
                    <Text style={{ color: colors.secondary, fontSize: 22, fontWeight: 600 }}>
                        {commonName}
                    </Text>
                </View>
            )}
            <StyledButton type="secondary" title="Back to home" onPress={onBack} />
        </View>
    )
}


const styles = StyleSheet.create({
    plantImage: {
      width: 200,
      height: 200,
      borderWidth: 5,
      borderColor: colors.primary,
      borderRadius: 120,
      alignSelf: 'center',
    },
});
