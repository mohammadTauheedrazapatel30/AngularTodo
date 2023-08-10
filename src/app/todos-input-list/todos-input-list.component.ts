import { Component, OnInit } from '@angular/core';
import { TodoDTO } from '../dto/TodoDTO';

@Component({
  selector: 'app-todos-input-list',
  templateUrl: './todos-input-list.component.html',
  styleUrls: ['./todos-input-list.component.css']
})
export class TodosInputListComponent implements OnInit {

  todo : Array<TodoDTO> = [{name:"Todo 1", status: false}]

  addTodo(name : string){
    let todoIn = new TodoDTO();
    todoIn.name = name;
    todoIn.status = false;
    this.todo.push(todoIn);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
