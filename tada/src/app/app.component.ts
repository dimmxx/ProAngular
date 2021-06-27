import { Component } from '@angular/core';
import {Model, TodoItem} from './model';

@Component({
  selector: 'app-tada',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  model = new Model();
  title = 'tada';
  getName(): string {
    return this.model.user;
  }
  getToDoItem(): TodoItem[] {
    return this.model.items.filter(item => !item.done);
  }
  addItem(action: string): void {
    if (action !== '') {
      this.model.items.push(new TodoItem(action, false));
    }
  }
}




