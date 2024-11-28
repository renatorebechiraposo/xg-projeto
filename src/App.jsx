import React, { useEffect, useState } from "react";
import axios from "axios";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";

import "./App.css";
import TaskDetails from "./components/TaskDetails";

const App = () => {
  const [task, setTask] = useState([
    {
      id: 1,
      title: "Estudar React",
      completed: true,
    },
    {
      id: 2,
      title: "Estudar Vue",
      completed: false,
    },
    {
      id: 3,
      title: "teste",
      completed: false,
    },
  ]);

  useEffect(() => {
    const fetchTasks = async () => {
      const { data } = await axios.get(
        "https://jsonplaceholder.cypress.io/todos?_limit=10",
      );
      setTask(data);
    };
    fetchTasks();
  }, []);

  const handleTaskAddition = (taskTitle) => {
    const newTask = [
      ...task,
      {
        title: taskTitle,
        id: uuidv4(),
        completed: false,
      },
    ];
    setTask(newTask);
  };

  const handleTaskClick = (taskId) => {
    const newTasks = task.map((task) => {
      if (task.id === taskId) return { ...task, completed: !task.completed };
      return task;
    });
    setTask(newTasks);
  };

  const handleTaskDeletion = (taskId) => {
    const newTasks = task.filter((task) => task.id !== taskId);
    setTask(newTasks);
  };

  return (
    <BrowserRouter>
      <div className="container">
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <AddTask handleTaskAddition={handleTaskAddition} />
                <Tasks
                  tasks={task}
                  handleTaskClick={handleTaskClick}
                  handleTaskDeletion={handleTaskDeletion}
                />
              </>
            }
          />
          <Route path="/:taskTitle" Component={TaskDetails} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
