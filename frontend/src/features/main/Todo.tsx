import React from 'react';

import Todo from '../todo/types/Todo';

type TodoProps = {
  todoList: Todo;
};

function TodoOne({ todoList }: TodoProps): React.JSX.Element {
  return (
    <div className="flex justify-around max-w-5xl space-x-5 ">
      <div className="w-52 text-center">{todoList.text}</div>
      <div className="place-items-center w-10">
        <input type="checkbox" checked={todoList.status} />
      </div>
    </div>
  );
}

export default TodoOne;
