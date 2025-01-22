import "./List.css";
import TodoItem from "./TodoItem";
import { useState, useRef, useMemo, useContext } from "react";
import { TodoStateContext } from "../App";

const List = () => {
  const { todos } = useContext(TodoStateContext);
  const [search, setSearch] = useState("");

  const onChangeSearch = (e) => {
    setSearch(e.target.value);
  };

  const getFilteredTodos = () => {
    if (search === "") {
      return todos;
    }
    return todos.filter((todo) =>
      todo.content.toLowerCase().includes(search.toLowerCase())
    );
  };

  const filteredTodos = getFilteredTodos();

  const { totalCount, doneCount, notDoneCount } = useMemo(() => {
    console.log("getAnalyzedData 호출!");
    const totalCount = todos.length;
    const doneCount = todos.filter((todo) => todo.isDone).length;
    const notDoneCount = totalCount - doneCount;

    return {
      totalCount,
      doneCount,
      notDoneCount,
    };
  }, [todos]);

  //   const { totalCount, doneCount, notDoneCount } = getAnalyzedData();

  return (
    <div className="List">
      <h4>Todo List 🎇</h4>
      <div>total : {totalCount}</div>
      <div>done : {doneCount}</div>
      <div>notdone : {notDoneCount}</div>
      <input
        value={search}
        onChange={onChangeSearch}
        placeholder="검색어를 입력하세요"
      />
      <div className="todos_wapper">
        {filteredTodos.map((todo) => {
          return <TodoItem key={todo.id} {...todo}/>;
        })}
      </div>
    </div>
  );
};

export default List;
