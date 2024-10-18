import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ContadorComponent } from './contador/contador.component';

interface User {
  userId: string;
  id: string;
  title: string;
  completed: boolean;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ContadorComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'my-first-angular-app';
  edad = 20;
  frutas = ['manzana', 'pera', 'mango'];
  count = 0;
  countString = '';
  randomRecibido = '';

  code = '';

  datos: User[] = [];

  incrementar() {
    this.count++;
    this.countString = String(this.count);
  }
  recibirEvento(msg: string) {
    console.log(msg);
    this.randomRecibido = msg;
  }

  ngOnInit(): void {
    this.getData();
  }

  async getData() {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos');
    const json = await res.json();
    // console.log(json[3]);
    this.code = JSON.stringify(json.slice(0, 3).reverse(), null, 2);
    this.datos = json.slice(0, 10).reverse();
    console.log(this.datos);
  }

  addTodo(task: string, completed: boolean) {
    if (task.trim() !== '') {
      this.datos.push({
        title: task,
        completed,
        id: crypto.randomUUID(),
        userId: crypto.randomUUID(),
      });
    }
  }

  deleteUser(id: string) {
    const isDelete = confirm('¿estas seguro?');
    if (isDelete) {
      this.datos = this.datos.filter((i) => i.id !== id);
    }
  }
}
