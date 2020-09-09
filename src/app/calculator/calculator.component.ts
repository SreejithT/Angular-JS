import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  value1:string=""
  value2:string=""
  result:number=0
  operator:string=''
  operator2:string=''

  constructor() { }

  ngOnInit(): void {
  }
  add(){
    console.log("Function called")
    this.result=parseInt(this.value1)+parseInt(this.value2)
  }
  test(event2){
    console.log(event2)
  }
  setValue(i){
    if(this.value1==''){
      this.value1=i
    }
    else if(this.value1!='' && this.operator!=''){
      this.value2=i
    }

  }
  setOperator(opr){
    // console.log(i)
    this.operator=opr
    
    }
  operation(){
    this.operator2='='
    if(this.operator=='+'){
      this.result=parseInt(this.value1)+parseInt(this.value2)
  }
}

}
