import { useState, useEffect } from "react";
import Form from "./components/Form/Form";
import TodoList from "./components/TodoList/TodoList";
import './style.css';

function App() {
  const [data, setData] = useState([]);
  const [list, setList] = useState([]);
  useEffect(() => {
    switch (true) {


      default: {
        setList(data.filter(item => !item.deleted))
      }
    }
  }, [data]);
  return (
    <div className="todo">
      <Form data={data} setData={setData} />
      <TodoList list={list} TodoList={TodoList} />
    </div>
  );
}

export default App;
