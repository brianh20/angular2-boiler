import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-subcomp',
  templateUrl: './subcomp.component.html',
  styleUrls: ['./subcomp.component.css']
})
export class SubcompComponent implements OnInit {

  title="This is a beautiful component";
  myString="I like chicken";
  myBoolean=true;

  objec = {
	name: 'Brian'
  }

  @Input() shallpass;


  imClicked(){
  	alert("I was clicked");
  }

  constructor() { }

  ngOnInit() {
  }

}
