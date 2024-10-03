import { useMemo } from 'react';
import { StyleSheet, ScrollView, TouchableOpacity, Text, View } from 'react-native';
import { startOfDay, subDays, subMonths, startOfMonth, endOfMonth, isWithinInterval } from 'date-fns';
import { toZonedTime } from 'date-fns-tz';
import { fontSizes, globalStyles, space } from '../styles/global';
import { colors } from '../styles/global';
import { Loader } from '../components/Loader';
import { Error } from '../components/Error';
import { HistorySection } from '../components/HistorySection';
import { useStorage } from '../context/context';

const localTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

export const History = () => {
  const { history, loading, error, clearHistory } = useStorage();

  const utcTimestampToLocalDate = (timestamp) => {
    const utcDate = new Date(timestamp);
    return toZonedTime(utcDate, localTimezone);
  };
  
  const todayHistory = useMemo(() => {
    const today = new Date();
    const startOfToday = startOfDay(today);
    return history.filter((entry) => utcTimestampToLocalDate(entry.timestamp) >= startOfToday);
  }, [history]);

  const lastWeekHistory = useMemo(() => {
    const today = new Date();
    const lastWeekStart = subDays(today, 7);
    const lastWeekEnd = subDays(today, 1);

    return history.filter((entry) =>
      isWithinInterval(utcTimestampToLocalDate(entry.timestamp), { start: lastWeekStart, end: lastWeekEnd })
    );
  }, [history]);

  const lastMonthHistory = useMemo(() => {
    const today = new Date();
    const lastMonthStart = startOfMonth(subMonths(today, 1));
    const lastMonthEnd = endOfMonth(lastMonthStart);
    const lastWeekStart = subDays(today, 7);

    return history.filter((entry) => {
      const entryDate = utcTimestampToLocalDate(entry.timestamp);
      return isWithinInterval(entryDate, { start: lastMonthStart, end: lastMonthEnd }) &&
            !isWithinInterval(entryDate, { start: lastWeekStart, end: today });
    });
  }, [history]);

  const olderHistory = useMemo(() => {
    const today = new Date();
    const lastMonthStart = startOfMonth(subMonths(today, 1));
    return history.filter((entry) => utcTimestampToLocalDate(entry.timestamp) < lastMonthStart);
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
      <HistorySection title="Last week" data={lastWeekHistory} />
      <HistorySection title="Last month" data={lastMonthHistory} />
      <HistorySection title="Over a month ago" data={olderHistory} />
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
