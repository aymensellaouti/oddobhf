import { Injectable, inject } from '@angular/core';
import { Todo } from '../model/todo';
import { LoggerService } from 'src/app/service/logger.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TodoApi } from '../model/todoapi.model';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  todos: Todo[] = [];
  http = inject(HttpClient);
  constructor(private loggerService: LoggerService) {}

  /**
   * retourne la liste des todos
   * @returns Todo[]
   */
  getTodos(): Todo[] {
    return this.todos;
  }

  /**
   *
   * Logger la liste des todos
   */
  logTodos(): void {
    this.loggerService.logger(this.todos);
  }
  /**
   * Retourne true si l'élément est supprimé, false sinon
   *
   * @param todo: Todo
   * @returns boolean
   */
  deleteTodo(todo: Todo): boolean {
   const index = this.todos.indexOf(todo);
   console.log('splice', index);
   if(index > -1) {

    this.todos.splice(index, 1);
    return true;
   }
   return false;
  }

  /**
   * Ajoute un todo
   * @param todo : Todo
   */
  addTodo(todo: Todo): void {
    this.todos.push(todo);
  }

  getTodosFromApi(): Observable<TodoApi[]>{
    return this.http.get<TodoApi[]>(

    );
  }
}
