import { Component } from '@angular/core';
import { Task } from '../../models/task';
import { Status } from '../../models/status';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css'],
})
export class TaskListComponent {
  tasks: Task[] = [
    {
      id: '1',
      title: 'Design Interface',
      description: 'Complete the layout for the Todo app',
      status: Status.IN_PROGRESS,
    },
    {
      id: '2',
      title: 'Develop Features',
      description: 'Build functions for adding, editing, and deleting tasks',
      status: Status.IMPORTANT,
    },
    {
      id: '3',
      title: 'Test and Improve',
      description: 'Perform testing and optimize performance',
      status: Status.DONE,
    },
    {
      id: '4',
      title: 'Data Storage',
      description: 'Integrate localStorage or backend for data storage',
      status: Status.ARCHIVED,
    },
  ];

  // Convert the status enum to a string
  getStatusLabel(status: Status): string {
    switch (status) {
      case Status.IN_PROGRESS:
        return 'IN_PROGRESS';
      case Status.IMPORTANT:
        return 'IMPORTANT';
      case Status.DONE:
        return 'DONE';
      case Status.ARCHIVED:
        return 'ARCHIVED';
      default:
        return 'UNKNOWN';
    }
  }
}
