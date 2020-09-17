import { Component, OnInit } from '@angular/core';
import {Product} from '../product'


@Component({
  selector: 'app-productentry',
  templateUrl: './productentry.component.html',
  styleUrls: ['./productentry.component.css']
})
export class ProductentryComponent implements OnInit {
  
  // show=[]
  mdl:string
  key:number=0
  strkey:string

  model=new Product()

  constructor() { }

  ngOnInit(): void {
  }

  saveProduct(){
    console.log(this.model)
    this.mdl=JSON.stringify(this.model)
    this.strkey=this.key.toString()
    localStorage.setItem(this.strkey,this.mdl)
    // this.show.push(localStorage.getItem(this.strkey))
    this.key+=1
    this.model=new Product()
  }

  viewProduct(){
    // for (let i in localStorage){
    //   console.log(localStorage.getItem(i))
    // }
    Object.keys(localStorage).forEach((key) => {
      console.log(localStorage.getItem(key));
     });

    
    // for (let i in this.show){
    //   console.log(this.show[i])
      
      
    // }

  }

}
