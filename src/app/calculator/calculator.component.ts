import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  value1:string="123"
  value2:string="345"
  result:number=0

  constructor() { }

  ngOnInit(): void {
  }
  add(){
    console.log("Function called")
    this.result=parseInt(this.value2)+parseInt(this.value1)
  }
  test(event2){
    console.log(event2)
  }

}
