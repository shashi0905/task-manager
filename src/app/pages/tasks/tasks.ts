import { Component, inject } from '@angular/core';
import { TaskService } from '../../services/task';
import { FormsModule} from "@angular/forms";

@Component({
  selector: 'app-tasks',
  imports: [FormsModule],
  templateUrl: './tasks.html',
  styleUrl: './tasks.css',
})
export class Tasks {

   taskService = inject(TaskService);
  newTitle = '';

  addTask() {
    const title = this.newTitle.trim();

    if (!title) return;

    this.taskService.addTasks(this.newTitle);
    this.newTitle = '';
  }


}
