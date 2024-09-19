import { useEffect, useMemo } from 'react';
import { View, StyleSheet } from 'react-native';
import { useHistory } from '../hooks/useHistory';
import { isToday, isThisWeek, isThisMonth } from 'date-fns';
import { globalStyles } from '../styles/global';
import { colors } from '../styles/global';
import { StyledButton } from '../components/StyledButton';
import { Loader } from '../components/Loader';
import { Error } from '../components/Error';
import { HistorySection } from '../components/HistorySection';

export const History = () => {
  const { history, loading, error, fetchHistory, clearHistory } = useHistory();

  useEffect(() => {
    fetchHistory();
  }, []);

  const todayHistory = useMemo(() => {
    return history.filter((entry) => isToday(new Date(entry.timestamp)));
  });

  const thisWeekHistory = useMemo(() => {
    return history.filter((entry) => isThisWeek(new Date(entry.timestamp)) && !isToday(new Date(entry.timestamp)));
  });

  const thisMonthHistory = useMemo(() => {
    return history.filter((entry) => isThisMonth(new Date(entry.timestamp)) && !isThisWeek(new Date(entry.timestamp)));
  });

  if (loading) return <Loader message="Loading history..." />
  if (error) return <Error message={error} />

  return (
    <View style={[globalStyles.container, styles.container]}>
      <HistorySection title="Today" data={todayHistory} />
      <HistorySection title="This Week" data={thisWeekHistory} />
      <HistorySection title="This Month" data={thisMonthHistory} />
      <StyledButton type="primary" title="Clear" onPress={clearHistory} />
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.secondary,
  },
});
