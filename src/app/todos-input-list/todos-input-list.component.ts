import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { TodoDTO } from '../dto/TodoDTO';

@Component({
  selector: 'app-todos-input-list',
  templateUrl: './todos-input-list.component.html',
  styleUrls: ['./todos-input-list.component.css']
})
export class TodosInputListComponent implements OnInit {

  todo = [{name:"Todo 1", status: false}]

  addTodo(value : any){
      let todoobj = {name:value, status: false}
      this.todo.push(todoobj)
      console.log('todo-----',this.todo);
      this.todo=[...this.todo];
  }

  constructor() { }

  ngOnInit(): void {
  }

}
