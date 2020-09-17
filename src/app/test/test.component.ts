import { Component, OnInit } from '@angular/core';
import {DateService} from'../date.service'

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  choice:string
  colors:string[]=["red","blue","green","yellow"]

  constructor(private dateobj:DateService) { }
  disabled='false'

  ngOnInit(): void {
    console.log("Inside the test component",this.dateobj.getcur_Date())
  }
  test(){
    console.log(this.choice)
  }
}
