import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  todo=[]
  tmrw=[]
  task:string=""
  indx:number
  add(){
    if(this.task!=""){
    this.todo.push(this.task)
    
    console.log("To Do Array:",this.todo)}
  }


  constructor() { }

  ngOnInit(): void {
  }

  delete(tsk){
    this.indx=this.todo.indexOf(tsk)
    this.todo.splice(this.indx,1)
    console.log("To Do Array:",this.todo)

  }
  move(tsk){
    this.tmrw.push(tsk)
    this.indx=this.todo.indexOf(tsk)
    this.todo.splice(this.indx,1)
    console.log("To Do Array:",this.todo)
    console.log("Tomorrow Array:",this.tmrw)

  }

  delete2(tsk){
    this.indx=this.tmrw.indexOf(tsk)
    this.tmrw.splice(this.indx,1)
    console.log("Tomorrow Array:",this.tmrw)

  }

}
