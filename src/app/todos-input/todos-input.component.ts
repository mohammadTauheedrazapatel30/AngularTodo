import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { TodoDTO } from '../dto/TodoDTO';

@Component({
  selector: 'app-todos-input',
  templateUrl: './todos-input.component.html',
  styleUrls: ['./todos-input.component.css']
})
export class TodosInputComponent implements OnInit {

  @Input() todos : Array<TodoDTO> = []
  
  @Output() dataTodo = new EventEmitter<string>();
  
  addTodo(name : any){
    let todo = new TodoDTO();
    todo.name = name;
    todo.status = false;
    // Data sent from Child to Parent    
    this.dataTodo.emit(todo.name)
  }

  constructor() { }

  ngOnInit(): void {
    console.log(this.todos)
  }

}
