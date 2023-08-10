import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { TodoDTO } from '../dto/TodoDTO';

@Component({
  selector: 'app-todos-input',
  templateUrl: './todos-input.component.html',
  styleUrls: ['./todos-input.component.css']
})
export class TodosInputComponent implements OnInit {

  @Input() todos : Array<TodoDTO> = [{name:"Todos 1", status: false},{name : "Todos 2", status : true}]
  
  @Output() dataTodo = new EventEmitter<string>();
  
  addTodo(value : string){
    this.dataTodo.emit(value);
  }

  constructor() { }

  ngOnInit(): void {
  }

}