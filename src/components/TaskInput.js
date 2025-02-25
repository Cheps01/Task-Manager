export function TaskInput({ task, setTask, category, setCategory, onAdd }) {
  function handleTextInput(event) {
    setTask(event.target.value);
    console.log(event.target.value);
  }
  function handleSelect(event) {
    setCategory(event.target.value);
    console.log(event.target.value);
  }
  return (
    <div className="container mt-4">
      <div className="row g-2">
        <div className="col-md-8">
          <input
            type="text"
            className="form-control"
            placeholder="New Task"
            value={task}
            onChange={handleTextInput}
          ></input>
        </div>
        <div className="col-md-4">
          <select
            className="form-select"
            value={category}
            onChange={handleSelect}
          >
            <option value="">Select category</option>
            <option value="work">Work</option>
            <option value="school">School</option>
            <option value="personal">Personal</option>
            <option value="health">Health</option>
          </select>
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-12">
          <button className="btn btn-info w-25" onClick={onAdd}>
            Add Task
          </button>
        </div>
      </div>
      <div className="row mt-3 mb-3">
        <div className="col-md-4">
          <select>
            <option value="">Filter</option>
            <option value="work">Work</option>
            <option value="school">School</option>
            <option value="personal">Personal</option>
            <option value="health">Health</option>
          </select>
        </div>
      </div>
    </div>
  );
}
