import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const  initialState = {
    task:[],
    loading: false,
    error: null,
    status: 'All'
}

const fetchTodo = createAsyncThunk('tasks/fetchTodo')