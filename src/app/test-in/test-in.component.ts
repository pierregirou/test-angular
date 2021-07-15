import { Component, Input, OnInit, Output,EventEmitter, OnDestroy } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-test-in',
  templateUrl: './test-in.component.html',
  styleUrls: ['./test-in.component.css']
})
export class TestInComponent implements OnInit, OnDestroy {
monTit : string = ''
testTwoWay: string = ''
@Input() tit:string
myFruits: any
fruitSubscription : Subscription
@Output() evenEmitDeletFruit = new EventEmitter()
monFruitInput: string = ''

  constructor(private dataService:DataService) { }
 @Output() sendEventEmitter = new EventEmitter()
  ngOnInit(): void {
    this.monTit = this.tit
    this.testTwoWay = 'je suis pierre'

    this.fruitSubscription = this.dataService.fruitSubject.subscribe(
      (data: any)=>{
        this.myFruits = data
      })
      this.dataService.emitFruitSubject()
    
  }

  onSubmit(form: NgForm){
    console.log(form);
    const nom = form["nom"].value
    const prenom = form["prenom"].value
    console.log(nom,prenom);
    alert(`Bonjour ${nom} ${prenom} votre enregistrement vient d'être envoyé ! `)
  }

  resetForm(form: NgForm){
    form.reset()
  }

  addFruit(event){
    console.log(event);
    this.dataService.add(this.monFruitInput)
    this.monFruitInput = ''
  }

  deleteFruit(idfruit){
    this.evenEmitDeletFruit.emit(idfruit)
  }

  detecterEvent(event: Event){
    console.log(event)
  }

  sendEvent(){
    this.sendEventEmitter.emit('Jes suis une notification')
  }
  ngOnDestroy(){
    this.fruitSubscription.unsubscribe();
  }
}
