function TaskElement({ task, category }) {
  return (
    <div className="d-flex justify-content-center">
      <div className="card p-3 w-75 m-1">
        <div className="d-flex justify-content-between align-items-center">
          <div>
            <h6 className="mb-0">{task}</h6>
            <small className="text-muted">{category}</small>
          </div>
          <button className="btn btn-warning">Delete</button>
        </div>
      </div>
    </div>
  );
}

export function TaskList({ taskList }) {
  return (
    <div id="task-list">
      {taskList.map((item, index) => (
        <TaskElement key={index} task={item.task} category={item.category} />
      ))}
    </div>
  );
}
