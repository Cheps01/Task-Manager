export function TaskInput({
  task,
  setTask,
  category,
  setCategory,
  onAdd,
  filter,
  setFilter,
}) {
  return (
    <div className="container mt-4">
      <div className="row g-2">
        <div className="col-md-8">
          <input
            type="text"
            className="form-control"
            placeholder="New Task"
            value={task}
            onChange={(event) => setTask(event.target.value)}
          ></input>
        </div>
        <div className="col-md-4">
          <select
            className="form-select"
            value={category}
            onChange={(event) => setCategory(event.target.value)}
          >
            <option value="">Select category</option>
            <option value="work">Work</option>
            <option value="school">School</option>
            <option value="personal">Personal</option>
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
      <div className="row mt-3 mb-3 justify-content-center">
        <div className="col-12">
          <select
            className="form-select"
            value={filter}
            onChange={(event) => setFilter(event.target.value)}
          >
            <option value="">All</option>
            <option value="work">Work</option>
            <option value="school">School</option>
            <option value="personal">Personal</option>
          </select>
        </div>
      </div>
    </div>
  );
}
