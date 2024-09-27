import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState, useEffect } from 'react';

const STORAGE_KEY = '@plant_identification_history';
const MAX_HISTORY_ITEMS = 20;

export const useHistory = () => {
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchHistory();
  }, []);

  const fetchHistory = async () => {
    setLoading(true);
    try {
      const storedHistory = await AsyncStorage.getItem(STORAGE_KEY);
      if (storedHistory !== null) {
        setHistory([...JSON.parse(storedHistory)]);
      }
    } catch (error) {
      setError('Failed to load history. Please try again.')
    } finally {
      setLoading(false);
    };
  };

  const addToHistory = async (newEntry) => {
    try {
      const storedHistory = await AsyncStorage.getItem(STORAGE_KEY);
      const currentHistory = storedHistory ? JSON.parse(storedHistory) : [];
  
      const updatedHistory = [newEntry, ...currentHistory].slice(0, MAX_HISTORY_ITEMS);
      await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(updatedHistory));
      setHistory([...updatedHistory]);
    } catch (error) {
      setError('An error occured. Please try again.');
    }
  };

  const clearHistory = async () => {
    setLoading(true);
    try {
      await AsyncStorage.removeItem(STORAGE_KEY);
      setHistory([]);
    } catch (error) {
      setError('Failed to clear history. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return { history, loading, error, addToHistory, clearHistory };
};
