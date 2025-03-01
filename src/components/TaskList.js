export function TaskList({ taskList, deleteTask, filter }) {
  return (
    <div id="task-list">
      {taskList
        .filter((item) => (filter === "" ? true : item.category === filter))
        .map((item, index) => (
          <div key={index} className="d-flex justify-content-center">
            <div className="card p-3 w-75 m-1">
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <h6 className="mb-0">{item.task}</h6>
                  <small className="text-muted">{item.category}</small>
                </div>
                <button
                  className="btn btn-warning"
                  onClick={() => deleteTask(index)}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}
