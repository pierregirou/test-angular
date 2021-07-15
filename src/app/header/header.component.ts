import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {

  subscribFruit: Subscription
  countFruit: number //= 0;

  constructor(private dataService:DataService) { }

  ngOnInit(): void {
    this.subscribFruit = this.dataService.fruitSubject.subscribe((data: any)=>{
      this.countFruit = data.length
    })
  }

  ngOnDestroy(){
    this.subscribFruit.unsubscribe()
  }

}
