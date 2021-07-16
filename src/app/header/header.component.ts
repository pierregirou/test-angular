import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {

  subscribFruitLength: Subscription
  countFruit: number //= 0;

  constructor(private dataService:DataService) { }

  ngOnInit(): void {
    this.subscribFruitLength = this.dataService.lengthFruitSubject.subscribe((data: any)=>{
      console.log(data)
      this.countFruit = data
    })
    this.dataService.emitLengthOfFruits()
  }

  ngOnDestroy(){
    this.subscribFruitLength.unsubscribe()
  }

}
