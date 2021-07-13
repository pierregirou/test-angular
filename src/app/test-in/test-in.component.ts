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

  constructor(private dataService:DataService) { }

  ngOnInit(): void {
    this.monTit = this.tit
    this.testTwoWay = 'je suis pierre'
    this.fruitSubscription = this.dataService.fruitSubject.subscribe(
      (data)=>{
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

  deleteFruit(idfruit){
    this.evenEmitDeletFruit.emit(idfruit)
  }

  ngOnDestroy(){
    this.fruitSubscription.unsubscribe();
  }
}