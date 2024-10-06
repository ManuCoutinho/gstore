import { useCallback } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export function useLocalStorage() {
  const saveItem = useCallback(async (key: string, value: unknown) => {
    await AsyncStorage.setItem(key, JSON.stringify(value));
  }, []);

  const getItem = useCallback(async (key: string) => {
    const value = await AsyncStorage.getItem(key);
    return value ? JSON.parse(value) : null;
  }, []);

  const deleteItem = useCallback((key: string) => {
    localStorage.removeItem(key);
  }, []);

  return { saveItem, getItem, deleteItem };
}
