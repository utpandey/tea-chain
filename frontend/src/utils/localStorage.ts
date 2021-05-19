export const loadState = (key: string) => {
  try {
    const serializedState = localStorage.getItem(key);
    if (serializedState === null) {
      return undefined;
    }
    console.log(serializedState)
    return JSON.parse(serializedState);
  } catch (err) {
    console.log(err);
  }
}; 

export const saveState = (key: string, state: object) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem(key, serializedState);
  } catch (err) {
    console.log(err);
  }
};

export const removeState = (key: string) => {
  try {
    localStorage.removeItem(key);
  } catch (err) {
    console.log(err);
  }
};