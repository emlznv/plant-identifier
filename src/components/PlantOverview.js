import { View, Text, Image, StyleSheet } from 'react-native';
import { StyledButton } from './StyledButton';
import { globalStyles, colors, space } from '../styles/global';

export const PlantOverview = ({ plantData, photoUri, onBack }) => {
    const commonName = plantData.species.commonNames[0];
    const plantFamily = plantData.species.family.scientificNameWithoutAuthor;

    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.heading}>
                {plantData.species.scientificNameWithoutAuthor}
            </Text>
            {plantFamily && (
                <Text style={[globalStyles.text, styles.text]}>
                    Part of the {plantFamily} family
                </Text>
            )}
            <View style={globalStyles.content}>
                <Image source={{ uri: photoUri }} style={styles.plantImage} />
                {commonName && (
                    <View style={styles.nameContainer}>
                        <Text style={[globalStyles.text, styles.text]}>
                            Commonly known as:
                        </Text>
                        <Text style={globalStyles.heading}>
                            {commonName}
                        </Text>
                    </View>
                )}
            </View>
            <StyledButton type="secondary" title="Back to home" onPress={onBack} />
        </View>
    )
}


const styles = StyleSheet.create({
    plantImage: {
      width: 200,
      height: 200,
      borderWidth: 4,
      borderColor: colors.primary,
      borderRadius: 120,
      alignSelf: 'center',
    },
    text: {
      marginVertical: space.sm,
    },
    nameContainer: {
      alignItems: 'center',
    },
});
