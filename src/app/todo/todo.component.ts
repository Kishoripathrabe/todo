import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent implements OnInit {
  lists: any;
  edit: boolean = false;
  value: string = '';
  editId= 0;
  constructor(private todoService: TodoService) {
    this.lists = this.todoService.getlist();
  }

  ngOnInit() {}

  editTask(task: any) {
    this.editId = task.id;
    this.value = task.value;
  }

  deleteTask(list: any) {

    this.lists = this.todoService.deleteTask(list.id);
  }

  submitTask(editmode: any) {
    if (editmode) {
      this.lists = this.todoService.editTask(this.editId, this.value);

    } else {
      this.lists = this.todoService.createList(this.value);

    }
    this.editId = 0;
    this.value = '';
  }
}
