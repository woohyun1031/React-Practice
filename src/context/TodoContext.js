import React, { useReducer, createContext, useContext, useRef } from "react";

const initialTodos = [
  {
    id: 1,
    text: "First 프로젝트 생성하기",
    done: false,
  },
];

function todoReducer(state, action) {
  switch (action.type) {
    case "CREATE":
      return state.concat(action.todo);
    case "TOGGLE":
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, done: !todo.done } : todo
      );
    case "REMOVE":
      return state.filter((todo) => todo.id !== action.id);
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
}

const TodoStateContext = createContext();
const TodoDispatchContext = createContext();
const TodoNextIdContext = createContext();

export function TodoProvider({ children }) {
  const [state, dispatch] = useReducer(todoReducer, initialTodos);
  const nextId = useRef(5);

  return (
    <TodoStateContext.Provider value={state}>
      <TodoDispatchContext.Provider value={dispatch}>
        <TodoNextIdContext.Provider value={nextId}>
          {children}
        </TodoNextIdContext.Provider>
      </TodoDispatchContext.Provider>
    </TodoStateContext.Provider>
  );
}

export function useTodoState() {
  const cur_state = useContext(TodoStateContext);
  if (!cur_state) {
    throw new Error("Cannot find TodoProvider");
  }
  return cur_state;
}

export function useTodoDispatch() {
  const cur_dispatch = useContext(TodoDispatchContext);
  if (!cur_dispatch) {
    throw new Error("Cannot find TodoProvider");
  }
  return cur_dispatch;
}

export function useTodoNextId() {
  const cur_nextid = useContext(TodoNextIdContext);
  if (!cur_nextid) {
    throw new Error("Cannot find TodoProvider");
  }
  return cur_nextid;
}
