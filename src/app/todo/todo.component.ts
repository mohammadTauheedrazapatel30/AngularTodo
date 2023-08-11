import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TodoDTO } from '../dto/TodoDTO';


@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  
  // For Input in Todo 
  @Input() todos : Array<TodoDTO> = [{name:"Todos 1", status: false},{name : "Todos 2", status : true}]

  @Output() dataTodo = new EventEmitter<string>();
  
  addTodo(name : any){
    let todo = new TodoDTO();
    todo.name = name;
    todo.status = false;
    this.todos.push(todo);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
