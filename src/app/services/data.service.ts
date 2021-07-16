import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService implements OnInit{

fruit : any[]
fruitSubject = new BehaviorSubject(['banane', 'pommes', 'abricots','framboise', 'fraise'])
lengthFruitSubject = new BehaviorSubject<number>(0);

  constructor() {
    
    console.log(this.fruitSubject.value)// this.fruit = ['banane', 'pommes', 'abricots','framboise', 'fraise']
    console.log(this.fruitSubject.value.length) // 5

   }

   ngOnInit(): void{
  }
    
  emitFruitSubject(){
      this.fruitSubject.next(this.fruitSubject.value)
      // this.emitLengthOfFruits()
  }

  deleteFruit(idEvent){
    this.fruitSubject.value.splice(idEvent,1)
     this.emitFruitSubject()
     this.emitLengthOfFruits()
  }

  add(fruit){
    this.fruitSubject.value.push(fruit)
    this.emitFruitSubject()
    this.emitLengthOfFruits()
  }

  emitLengthOfFruits(){
    this.lengthFruitSubject.next(this.fruitSubject.value.length)
  }
}
