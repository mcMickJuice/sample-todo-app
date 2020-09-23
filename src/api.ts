export function updateTodos(todos: string[]) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(todos))
}

const STORAGE_KEY = 'MY_TODOS'
export function getTodos(): string[] {
  const value = localStorage.getItem(STORAGE_KEY)
  console.log('value fetched', value)
  if (value == null) return []

  return JSON.parse(value)
}
