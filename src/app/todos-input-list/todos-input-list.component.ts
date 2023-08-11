import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { TodoDTO } from '../dto/TodoDTO';

@Component({
  selector: 'app-todos-input-list',
  templateUrl: './todos-input-list.component.html',
  styleUrls: ['./todos-input-list.component.css']
})
export class TodosInputListComponent implements OnInit {

  todo : Array<TodoDTO> = [{name:"Todo 1", status: false}]
  
  @Output() dataEvent = new EventEmitter<string>;

  addTodo(value : string){
      this.dataEvent.emit(value)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
