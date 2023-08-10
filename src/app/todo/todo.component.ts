import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TodoDTO } from '../dto/TodoDTO';


@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  @Input() todos : Array<TodoDTO> = [{name:"Todos 1", status: false},{name : "Todos 2", status : true}]
  
  @Output() dataTodo = new EventEmitter<string>();
  
  addTodo(value : string){
    this.dataTodo.emit(value);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
