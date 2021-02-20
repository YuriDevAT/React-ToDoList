import React from 'react';

const ToDo = ({ text, todo, todos, setTodos }) => {    

    const deleteHandler = () => {
        setTodos(todos.filter((el) => el.id !== todo.id));
    }

    const completeHandler = () => {
        setTodos(todos.map((item) => {
            if (item.id === todo.id) {
                return {
                    ...item, completed: !item.completed
                }
            }
            return item; 
        }));
    }    

    return (
        <div className="bg-white flex justify-start rounded-lg mx-auto max-w-md mt-2 shadow-xl">
            <li className={`py-2 ml-2 flex-1 text-left ${todo.completed ? "completed" : ''}`}>{text}</li>
            <button onClick={completeHandler} className="bg-blue-500 hover:bg-blue-700 jflex-initial px-4"><i className="fas fa-check"></i></button>
            <button onClick={deleteHandler} className="bg-yellow-400 flex-initial px-4 hover:bg-yellow-600 rounded-r-lg"><i className="fas fa-trash"></i></button>
        </div>
    );
};

export default ToDo;
