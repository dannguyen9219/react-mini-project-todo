import "../style.css";
import React from "react";
import { useState } from "react";
import data from "../data";

export default function Form(props) {
    const [totalList, setTotalList] = useState(data)
    const [toDo, setTodo] = useState({ title: "", completed: false })
    
    const handleChange = evt => {
        setTodo({
            title: evt.target.value,
            completed: false
        });
    };

    const handleSubmit = evt => {
        evt.preventDefault();
        setTotalList([...totalList, toDo]);
        setTodo({
            title: "",
            completed: false
        });
    };

    return (
        <>
            <div>
                <form id="input-form" onSubmit={handleSubmit}>
                    <label htmlFor="todo-input">New To Do Item:</label>
                    <input
                        id="title"
                        type="text"
                        value={toDo.title}
                        onChange={handleChange}
                    ></input>
                    <input type="submit" value="Submit"></input>
                </form>
            </div>
            <div id="todo-list">
                {totalList.map(item => {
                    if (item.completed === false)
                        return (
                            <div>
                                <ul>
                                    <li key={item.title}>{item.title}</li>
                                </ul>
                            </div>
                        );
                })}
            </div>
        </>
    );
};