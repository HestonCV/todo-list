class Task {
  constructor(title, dueDate, project, id) {
    this.title = title;
    this.dueDate = dueDate;
    this.project = project;
    this.id = id;
    this.completed = false;
  }
}

export default Task;
