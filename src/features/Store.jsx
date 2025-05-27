import { configureStore } from "@reduxjs/toolkit";
import Slice from './Slice'
import { saveToLocalStorage } from "../utils/localStorage";

export const store = configureStore({
    reducer:{
        tasks: Slice
    }
})

store.subscribe(() => {
  const state = store.getState();
  saveToLocalStorage(state.tasks.tasks);
});