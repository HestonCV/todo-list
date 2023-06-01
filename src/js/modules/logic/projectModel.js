class Project {
  constructor(title, color, id) {
    this.title = title;
    this.color = color;
    this.id = id;
    this.tasks = [];
  }

  addTask(task) {
    this.tasks.push(task);
  }
}

export default Project;
