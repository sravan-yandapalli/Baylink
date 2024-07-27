import AsyncStorage from "@react-native-async-storage/async-storage";

export async function saveData(key, value) {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (error) {
    console.error("Error saving data:", error);
  }
}

export async function getData(key) {
  try {
    return await AsyncStorage.getItem(key);
  } catch (error) {
    console.error("Error loading data:", error);
  }
}

export async function removeData(key) {
  try {
    await AsyncStorage.removeItem(key);
  } catch (error) {
    console.error("Error removing data:", error);
  }
}

export async function clearData() {
  try {
    await AsyncStorage.clear();
  } catch (error) {
    console.error("Error clearing data:", error);
  }
}
