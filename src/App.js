import "./styles.css";
import { TaskInput } from "./components/TaskInput";
import { TaskList } from "./components/TaskList";
import { Counter } from "./components/Counter";
import { useState } from "react";

export default function App() {
  const [currentTask, setCurrentTask] = useState("");
  const [currentCategory, setCurrentCategory] = useState("");
  const [count, setCount] = useState(0);
  const [taskList, setTaskList] = useState([]);
  const [filter, setFilter] = useState("");
  function addTask() {
    if (currentTask != "" && currentCategory != "") {
      setTaskList([
        ...taskList,
        { task: currentTask, category: currentCategory },
      ]);
      setCurrentTask("");
      setCurrentCategory("");
      setCount(count + 1);
    }
  }
  function deleteTask(index) {
    setTaskList(taskList.filter((_, i) => i !== index));
    setCount(count - 1);
  }
  return (
    <div className="App">
      <h1>Task Manager</h1>
      <Counter count={count} />
      <TaskInput
        task={currentTask}
        setTask={setCurrentTask}
        category={currentCategory}
        setCategory={setCurrentCategory}
        filter={filter}
        setFilter={setFilter}
        onAdd={addTask}
      />
      <TaskList taskList={taskList} deleteTask={deleteTask} filter={filter}/>
    </div>
  );
}
