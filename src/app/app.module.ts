import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodosHeaderComponent } from './todos-header/todos-header.component';
import { TodosFooterComponent } from './todos-footer/todos-footer.component';
import { TodosInputComponent } from './todos-input/todos-input.component';
import { TodosInputListComponent } from './todos-input-list/todos-input-list.component';
import { TodoComponent } from './todo/todo.component';

@NgModule({
  declarations: [
    AppComponent,
    TodosHeaderComponent,
    TodosFooterComponent,
    TodosInputComponent,
    TodosInputListComponent,
    TodoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
