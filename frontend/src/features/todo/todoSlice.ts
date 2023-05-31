import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import State from './types/State';
import * as api from './api';

const initialState: State = {
  todoAllList: [],
  error: undefined,
};

export const loadTodoAllTodo = createAsyncThunk('todo/loadTodoAllTodo', () =>
  api.getTodoAllList()
);

const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    resetError: (state) => {
      state.error = undefined;
    },
  },
  extraReducers: (bilder) => {
    bilder.addCase(loadTodoAllTodo.fulfilled, (state, action) => {
      state.todoAllList = action.payload;
    });
  },
});

const { resetError } = todoSlice.actions;

export default todoSlice.reducer;
