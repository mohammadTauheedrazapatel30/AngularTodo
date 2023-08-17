import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TodoDTO } from '../dto/TodoDTO';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  
  // For Input in Todo 
  @Input() todos :TodoDTO[]=[];

  constructor() { }

  ngOnInit(): void {
    console.log('todos=========================',this.todos);    
  }
  

  // ngOnChanges(changes: any) {
  //   console.log('todos=========================',this.todos);

  // }

}
