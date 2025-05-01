import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function ToDoList() {
    let [todos, setTodos] = useState([
        { task: "sample task", id: uuidv4(), isDone: false },
    ]);
    let [newTodo, setNewTodo] = useState("");

    let addNewTodo = () => {
        setTodos((prevTodos) => {
            return [...prevTodos, { task: newTodo, id: uuidv4() }];
        });
        setNewTodo("");
    };

    let updateTodoValue = (event) => {
        setNewTodo(event.target.value);
    };

    let deleteTodo = (id) => {
        setTodos((prevTodos) =>
            todos.filter((prevTodos) => prevTodos.id != id)
        );
    };

    let upperCaseAll = () => {
        setTodos((prevTodos) =>
            prevTodos.map((todo) => {
                return {
                    ...todo,
                    task: todo.task.toUpperCase(),
                };
            })
        );
    };

    let upperCaseOne = (id) => {
        setTodos((prevTodos) =>
            prevTodos.map((todo) => {
                if (todo.id == id) {
                    return {
                        ...todo,
                        task: todo.task.toUpperCase(),
                    };
                } else {
                    return todo;
                }
            })
        );
    };

    let markAllAsDone = () => {
        setTodos((prevTodos) => {
            prevTodos.map((todo) => {});
        });
    };

    return (
        <div>
            <input
                placeholder="add a task"
                value={newTodo}
                onChange={updateTodoValue}
            ></input>
            <br></br>
            <button onClick={addNewTodo}>Add Task</button>
            <br></br>
            <br></br>
            <br></br>

            <hr></hr>
            <h4>Tasks Todo</h4>
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id}>
                        <span>{todo.task}</span>
                        &nbsp;&nbsp;&nbsp;
                        <button onClick={() => deleteTodo(todo.id)}>
                            Delete
                        </button>
                        <button onClick={() => upperCaseOne(todo.id)}>
                            UpperCase One
                        </button>
                        <button onClick={() => markAllAsDone(todo.id)}>
                            Mark as Done
                        </button>
                    </li>
                ))}
            </ul>
            <br></br>
            <button onClick={upperCaseAll}>UpperCase All</button>
            <button onClick={markAllAsDone}>Mark All as Done</button>
        </div>
    );
}
