class Task {
  constructor(title, deadline, project, id) {
    this.title = title;
    this.deadline = deadline;
    this.project = project;
    this.id = id;
    this.completed = false;
  }
}

export default Task;
