type Todo = {
  id: number;
  text: string;
  status: boolean;
  user_id: number;
};

export type TodoId = Todo['id'];

export default Todo;
