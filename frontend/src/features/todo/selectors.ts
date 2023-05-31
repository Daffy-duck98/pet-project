import { RootState } from '../../store/store';
import Todo from './types/Todo';

export const selectTodoAllList = (state: RootState): Todo[] =>
  state.todo.todoAllList;
