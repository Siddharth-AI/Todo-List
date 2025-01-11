const todoKey = "todotask";

export const getlocalStorageTodoData = () => {
  const rawData = localStorage.getItem(todoKey);
  return !rawData ? [] : JSON.parse(rawData);
};

export const setlocalStorageTodoData = (task) =>
  localStorage.setItem(todoKey, JSON.stringify(task));
