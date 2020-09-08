import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  todo=[]
  task:string
  add(){
    this.todo.push(this.task)
    console.log("To Do Array:",this.todo)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
