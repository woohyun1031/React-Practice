import React, { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import Todos from "../components/CounterTodo";
import { addTodo, toggleTodo } from "../redux/modules/todos";
import styled from "styled-components";

function TodosContainer() {
  // useSelector 에서 꼭 객체를 반환 할 필요는 없습니다.
  // 한 종류의 값만 조회하고 싶으면 그냥 원하는 값만 바로 반환하면 됩니다.
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const onCreate = (text) => dispatch(addTodo(text));
  const onToggle = useCallback((id) => dispatch(toggleTodo(id)), [dispatch]); // 최적화를 위해 useCallback 사용

  return (
    <TodoUnit>
      <Todos todos={todos} onCreate={onCreate} onToggle={onToggle} />
    </TodoUnit>
  );
}

const TodoUnit = styled.div`
  padding: 20px 32px;
  overflow-y: auto;
`;

export default TodosContainer;
