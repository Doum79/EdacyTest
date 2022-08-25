import { Component, OnInit } from '@angular/core';
import { Observable, OperatorFunction } from 'rxjs';
import {debounceTime, distinctUntilChanged, map} from 'rxjs/operators';



 @Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})



export class HomeComponent implements OnInit {

  LanguageList = [
    { label: "AngularJS", value: 1 },
    { label: "C#/.NET", value: 2 },
    { label: "JavaScript", value: 3 },
    { label: "Java", value: 4 },
    { label: "PHP", value: 5},
    { label: "Python", value: 6 },
    { label: "SQL", value: 7},
];

 

  constructor() {
    
   }
  
  ngOnInit(): void {
    
  }
 

compareLanguage(LanguageList1: number, LanguageList2: number) {
  return LanguageList1 === LanguageList2;
}
}
