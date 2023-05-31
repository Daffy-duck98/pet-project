import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectTodoAllList } from '../todo/selectors';
import { useAppDispatch } from '../../store/store';
import { loadTodoAllTodo } from '../todo/todoSlice';
import TodoOne from './Todo';

function TodoAllList(): React.JSX.Element {
  const allTodo = useSelector(selectTodoAllList);
  const dispatch = useAppDispatch();
  console.log(allTodo);

  useEffect(() => {
    dispatch(loadTodoAllTodo());
  }, [dispatch]);

  return (
    <div className="justify-center">
      <div className="mt-10">
        <h2 className="flex justify-center">Todo list:</h2>
      </div>
      <div className="flex justify-center mt-10">
        <div className="w-1/2">
          {allTodo.map((todo) => (
            <TodoOne key={todo.id} todoList={todo} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default TodoAllList;
