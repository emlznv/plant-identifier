import React from 'react';
import { SectionList, StyleSheet } from 'react-native';
import { Text, View, Image, FlatList } from 'react-native';
import { formatDistanceToNow } from 'date-fns';
import { space, colors, fontSizes } from '../styles/global';

export const HistorySection = ({ title, data }) => {
    if (!data.length) return null;

    const formatReadableTime = (timestamp) => formatDistanceToNow(new Date(timestamp));

    return (
      <View style={styles.sectionContainer}>
        <Text style={styles.timeGroup}>{title}</Text>
        {data.map((item) => (
            <View style={styles.tile} key={item.timestamp}>
              <Image style={styles.image} source={{ uri: item.photoUri }} />
              <View>
                  <Text style={styles.name}>{item.name}</Text>
                  <Text style={styles.scientificName}>{item.scientificName}</Text>
                  <Text style={styles.date}>{formatReadableTime(item.timestamp)} ago</Text>
              </View>
          </View>
        ))}
      </View>
    );
};

const styles = StyleSheet.create({
    sectionContainer: {
      marginBottom: space.md,
    },
    tile: {
      flexDirection: 'row',
      backgroundColor: colors.secondary,
      borderRadius: 15,
      padding: space.sm,
      borderWidth: 2,
      borderColor: colors.primary,
      marginVertical: space.sm,
      alignItems: 'center',
    },
    name: {
      color: colors.backgroundLight,
      fontWeight: '500',
      fontSize: fontSizes.md,
    },
    scientificName: {
      color: colors.backgroundLight,
      fontSize: fontSizes.sm
    },
    date: {
      color: colors.fade,
      marginTop: space.xs,
    },
    image: {
      width: 70,
      height: 70,
      borderRadius: 120,
      marginRight: space.md,
    },
    timeGroup: {
      fontWeight: '500',
      fontSize: fontSizes.md,
      marginBottom: space.sm,
    },
});