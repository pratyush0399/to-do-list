import React, { useState } from "react";

function ToDoList() {
    const [tasks, setTasks] = useState(["eat", "sleep", "conquer"]);
    const [newTask, setNewTask] = useState("");

    function handleInputChange(event) {
        setNewTask(event.target.value);
    }

    function addTask() {
        if (newTask.trim() !== "") {
            setTasks((t) => [...t, newTask]);
            setNewTask("");
        }
    }

    function delTask(index) {
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);
    }

    function moveUpTask(index) {
        if (index > 0) {
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index - 1]] = 
            [updatedTasks[index - 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }

    function moveDownTask(index) {
        if (index < tasks.length - 1) {
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index + 1]] = 
            [updatedTasks[index + 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }

    return (
        <div className="to-do-list">
            <h1>ToDo List</h1>
            <div>
                <input
                    type="text"
                    placeholder="Enter something ..."
                    value={newTask}
                    onChange={handleInputChange}
                />
                <button className="add-button" onClick={addTask}>
                    ADD
                </button>
            </div>
            <ol>
                {tasks.map((task, index) => (
                    <li key={index}>
                        <span className="text">{task}</span>
                        <button
                            className="delete-button"
                            onClick={() => delTask(index)}
                        >
                            Delete
                        </button>
                        <button
                            className="up-button"
                            onClick={() => moveUpTask(index)}
                        >
                            Move UP
                        </button>
                        <button
                            className="down-button"
                            onClick={() => moveDownTask(index)}
                        >
                            Move Down
                        </button>
                    </li>
                ))}
            </ol>
        </div>
    );
}

export default ToDoList;
