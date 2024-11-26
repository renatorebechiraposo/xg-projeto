import React, { useState } from "react";
import "./App.css";

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
  ]);
  return (
    <>
      <div className="container">
        <h1>Minhas Tarefas</h1>
      </div>
    </>
  );
};

export default App;
