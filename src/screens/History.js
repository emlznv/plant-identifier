import { useEffect, useMemo } from 'react';
import { StyleSheet, ScrollView, TouchableOpacity, Text, View } from 'react-native';
import { useHistory } from '../hooks/useHistory';
import { isToday, isThisWeek, isThisMonth } from 'date-fns';
import { fontSizes, globalStyles, space } from '../styles/global';
import { colors } from '../styles/global';
import { Loader } from '../components/Loader';
import { Error } from '../components/Error';
import { HistorySection } from '../components/HistorySection';
import { useStorage } from '../context/context';

export const History = () => {
  const { history, loading, error, clearHistory } = useStorage();

  const todayHistory = useMemo(() => {
    return history.filter((entry) => isToday(new Date(entry.timestamp)));
  }, [history]);

  const thisWeekHistory = useMemo(() => {
    return history.filter((entry) => isThisWeek(new Date(entry.timestamp)) && !isToday(new Date(entry.timestamp)));
  }, [history]);

  const thisMonthHistory = useMemo(() => {
    return history.filter((entry) => isThisMonth(new Date(entry.timestamp)) && !isThisWeek(new Date(entry.timestamp)));
  }, [history]);

  if (loading) return <Loader message="Loading history..." customColors={{ loader: styles.loader, loaderText: styles.loaderText }} />
  if (error) return <Error message={error} />

  return (
    <ScrollView contentContainerStyle={styles.contentContainer}>
       <TouchableOpacity style={styles.clearButton} onPress={clearHistory}>
        <Text style={styles.text}>
          Clear all
        </Text>
      </TouchableOpacity>
      <HistorySection title="Today" data={todayHistory} />
      <HistorySection title="This Week" data={thisWeekHistory} />
      <HistorySection title="This Month" data={thisMonthHistory} />
      {!history.length && (
        <View style={globalStyles.content}>
          <Text style={styles.text}>No items to show.</Text>
        </View>
      )}
    </ScrollView>
  );
};


const styles = StyleSheet.create({
  contentContainer: {
    flexGrow: 1,
    backgroundColor: colors.secondary,
    padding: space.md,
  },
  clearButton: {
    width: 80,
    borderWidth: 1,
    borderColor: colors.primary,
    borderRadius: 20,
    paddingVertical: space.xs,
    paddingHorizontal: space.sm,
    alignSelf: 'flex-end',
  },
  text: {
    fontSize: fontSizes.sm,
    color: colors.primary,
    textAlign: 'center',
  },
  loader: {
    backgroundColor: colors.secondary,
  },
  loaderText: {
    color: colors.primary,
  },
});
