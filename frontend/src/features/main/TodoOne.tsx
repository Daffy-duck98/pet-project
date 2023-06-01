import React from 'react';

import Todo from '../todo/types/Todo';

type TodoProps = {
  todoList: Todo;
};

function TodoOne({ todoList }: TodoProps): React.JSX.Element {
  return (
    <div className="flex justify-around max-w-5xl space-x-5 ">
      <p className="w-52 text-center">{todoList.text}</p>
      <div className="place-items-center w-10">
        <input type="checkbox" defaultChecked={todoList.status} />
      </div>
    </div>
  );
}

export default TodoOne;
