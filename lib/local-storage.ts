// Type definitions for stored data
export interface StoredHomeState {
  selectedMuscle: string | null
  gender: "male" | "female"
}

export interface StoredWorkoutState {
  selectedGoal: "fat-loss" | "muscle-gain" | "strength"
  showResults: boolean
  completedExercises: Record<string, Record<number, boolean>>
  activeDay: string
}

export interface StoredMacroState {
  formData: {
    gender: "male" | "female"
    age: string
    height: string
    weight: string
    activityLevel: "sedentary" | "light" | "moderate" | "active" | "very-active"
  }
  results: {
    bmr: number
    tdee: number
    protein: number
    carbs: number
    fats: number
  } | null
}

// Storage keys
const STORAGE_KEYS = {
  HOME: "fitguide_home_state",
  WORKOUT: "fitguide_workout_state",
  MACRO: "fitguide_macro_state",
}

// Generic function to save data to localStorage
export function saveToLocalStorage<T>(key: string, data: T): void {
  try {
    const serializedData = JSON.stringify(data)
    localStorage.setItem(key, serializedData)
  } catch (error) {
    console.error(`Error saving to localStorage with key ${key}:`, error)
  }
}

// Generic function to load data from localStorage
export function loadFromLocalStorage<T>(key: string, defaultValue: T): T {
  try {
    const serializedData = localStorage.getItem(key)
    if (serializedData === null) {
      return defaultValue
    }
    return JSON.parse(serializedData) as T
  } catch (error) {
    console.error(`Error loading from localStorage with key ${key}:`, error)
    return defaultValue
  }
}

// Specific functions for each component
export function saveHomeState(state: StoredHomeState): void {
  saveToLocalStorage(STORAGE_KEYS.HOME, state)
}

export function loadHomeState(): StoredHomeState {
  return loadFromLocalStorage<StoredHomeState>(STORAGE_KEYS.HOME, {
    selectedMuscle: null,
    gender: "male",
  })
}

export function saveWorkoutState(state: StoredWorkoutState): void {
  saveToLocalStorage(STORAGE_KEYS.WORKOUT, state)
}

export function loadWorkoutState(): StoredWorkoutState {
  return loadFromLocalStorage<StoredWorkoutState>(STORAGE_KEYS.WORKOUT, {
    selectedGoal: "fat-loss",
    showResults: false,
    completedExercises: {},
    activeDay: "mon",
  })
}

export function saveMacroState(state: StoredMacroState): void {
  saveToLocalStorage(STORAGE_KEYS.MACRO, state)
}

export function loadMacroState(): StoredMacroState {
  return loadFromLocalStorage<StoredMacroState>(STORAGE_KEYS.MACRO, {
    formData: {
      gender: "male",
      age: "",
      height: "",
      weight: "",
      activityLevel: "moderate",
    },
    results: null,
  })
}

// Function to clear all stored data
export function clearAllStoredData(): void {
  localStorage.removeItem(STORAGE_KEYS.HOME)
  localStorage.removeItem(STORAGE_KEYS.WORKOUT)
  localStorage.removeItem(STORAGE_KEYS.MACRO)
}
