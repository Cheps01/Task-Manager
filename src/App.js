import "./styles.css";
import { TaskInput } from "./components/TaskInput";
import { TaskList } from "./components/TaskList";
import { useState } from "react";

export default function App() {
  const [currentTask, setCurrentTask] = useState("");
  const [currentCategory, setCurrentCategory] = useState("");
  const [count, setCount] = useState(0);
  const [taskList, setTaskList] = useState([]);
  function addTask() {
    setTaskList([
      ...taskList,
      { task: currentTask, category: currentCategory },
    ]);
    setCurrentTask("");
    setCurrentCategory("");
  }
  return (
    <div className="App">
      <h1>Task Manager</h1>
      <TaskInput
        task={currentTask}
        setTask={setCurrentTask}
        category={currentCategory}
        setCategory={setCurrentCategory}
        onAdd={addTask}
      />
      <TaskList taskList={taskList} />
    </div>
  );
}
