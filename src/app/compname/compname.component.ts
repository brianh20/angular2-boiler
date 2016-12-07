import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-compname',
  templateUrl: './compname.component.html',
  styleUrls: ['./compname.component.css']
})
export class CompnameComponent implements OnInit {

  shallpass = {
  	  name: 'Frodo'
  };

  yell(f){
  	alert(f.name + " is yelling");
    console.log(f);
  }

  constructor() { }

  ngOnInit() {
  }

}
