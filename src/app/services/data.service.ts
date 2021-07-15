import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

fruit : any[]
fruitSubject = new Subject

  constructor() {
    this.fruit = ['banane', 'pommes', 'abricots','framboise', 'fraise']
    this.emitFruitSubject()
   }

  emitFruitSubject(){
    this.fruitSubject.next(this.fruit)
  }

  deleteFruit(idEvent){
    this.fruit.splice(idEvent,1)
     this.emitFruitSubject()
  }

  add(fruit){
    this.fruit.push(fruit)
    this.emitFruitSubject()
  }
}
