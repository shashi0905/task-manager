import { Injectable, signal } from '@angular/core';

export interface Task {
  id: number;
  title: string;
  completed: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class TaskService {

  private nextId = 1;

  tasks = signal<Task[]>([
        {
            id: this.nextId++,
            title: 'Task 1',
            completed: false
        },
      {
        id: this.nextId++,
        title: 'Task 2',
        completed: true
      }
    ]);

    addTasks(title: string) {
      this.tasks.update((currentTasks) => [
        ...currentTasks,
        {
          id: this.nextId++,
          title,
          completed: false
        }
      ]);
    }

    toggleTask(id: number) {
      this.tasks.update((currentTasks) =>
        currentTasks.map((task) =>
          task.id === id ? { ...task, completed: !task.completed } : task
        )
      );
    }

    getTasks() {
      return this.tasks.asReadonly();
    }


}
