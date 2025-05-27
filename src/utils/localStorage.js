export const loadFromLocalStorage = () => {
  try {
    const data = localStorage.getItem("tasks");
    return data ? JSON.parse(data) : [];
  } catch (error) {
    console.error("Load error:", error);
    return [];
  }
};

export const saveToLocalStorage = (tasks) => {
  try {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  } catch (error) {
    console.error("Save error:", error);
  }
};

