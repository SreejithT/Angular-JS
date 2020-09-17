import { Component, OnInit } from '@angular/core';
import {Square,Rectangle,Circle} from '../ishapes'

@Component({
  selector: 'app-shapes',
  templateUrl: './shapes.component.html',
  styleUrls: ['./shapes.component.css']
})
export class ShapesComponent implements OnInit {

  


  
  square=new Square();
  circle=new Circle();
  rectangle=new Rectangle();

  create(){
    var sh = <HTMLInputElement>document.getElementById("shapeSelect")
    if (sh.value == "sq"){
      var canvas= <HTMLCanvasElement> document.getElementById('myCanvas')
      var context = canvas.getContext('2d');
      context.clearRect(0, 0, canvas.width, canvas.height);
      this.square.draw()
    }
    if (sh.value == "ci"){
      var canvas= <HTMLCanvasElement> document.getElementById('myCanvas')
      var context = canvas.getContext('2d');
      context.clearRect(0, 0, canvas.width, canvas.height);
      this.circle.draw()
    }
    if (sh.value == "re"){
      var canvas= <HTMLCanvasElement> document.getElementById('myCanvas')
      var context = canvas.getContext('2d');
      context.clearRect(0, 0, canvas.width, canvas.height);
      this.rectangle.draw()
    }
  
  
  }
  
  
  
  


  constructor() { }

  ngOnInit(): void {
  }
 
  

}
