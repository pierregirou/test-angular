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
   }

  emitFruitSubject(){
    this.fruitSubject.next(this.fruit)
  }

  deleteFruit(idEvent){
    this.fruit.splice(idEvent,1)
     this.emitFruitSubject()
  }
}
