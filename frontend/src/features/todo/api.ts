import Todo from './types/Todo';

export async function getTodoAllList(): Promise<Todo[]> {
  const result = await fetch('/api/todo/todo-all-list');
  return result.json();
}
