import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { TodoDTO } from '../dto/TodoDTO';

@Component({
  selector: 'app-todos-input',
  templateUrl: './todos-input.component.html',
  styleUrls: ['./todos-input.component.css']
})
export class TodosInputComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
