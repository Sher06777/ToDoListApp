const TodoList = ({ list }) => {
  return (
    <div className="todo-list">
      {list.map((item) => {
        return (
          <div key={item.id} className="todo-list-item">
            <p>{item.text}</p>
            <div className="todo-list-item-btns">
              <button>complete</button>
              <button>delete</button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TodoList;
