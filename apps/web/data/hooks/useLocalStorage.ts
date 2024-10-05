import { useCallback } from "react"

export function useLocalStorage() {
  const saveItem = useCallback((key: string, value: unknown) => {
    localStorage.setItem(key, JSON.stringify(value))
  }, [])

  const getItem = useCallback((key: string) => {
    const value = localStorage.getItem(key)
    return value ? JSON.parse(value) : null
  }, [])

  const deleteItem = useCallback((key: string) => {
    localStorage.removeItem(key)
  }, [])

  return { saveItem, getItem, deleteItem }
}
