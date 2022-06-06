import React, {useState} from 'react';

import {Todo} from "./todo.model";
import TodoList from "./components/TodoList";
import NewTodo from "./components/NewTodo";

const App: React.FC = () => {

    const [todos, setTodos] = useState<Todo[]>([]);

    const addTodo = (text: string) => {
        setTodos(prevState =>
            [
                ...prevState,
                {id: Math.random().toString(), text: text}
            ])
    }

    const deleteTodo = (id: string) => {
        setTodos(prevState => {
            return prevState.filter(todo => todo.id !== id)
        })
    }

    return (
        <div className="App">
            <NewTodo onAddTodo={addTodo}/>
            <TodoList items={todos} onDeleteTodo={deleteTodo}/>
        </div>
    );
}

export default App;
