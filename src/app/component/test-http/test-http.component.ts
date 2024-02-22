import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { TodoService } from 'src/app/todo/services/todo.service';

@Component({
  selector: 'app-test-http',
  templateUrl: './test-http.component.html',
  styleUrls: ['./test-http.component.css']
})
export class TestHttpComponent {
  todoService = inject(TodoService);
  constructor() {
    this.todoService.getTodosFromApi().subscribe(
      todos => console.log(todos)
    )
  }
}
