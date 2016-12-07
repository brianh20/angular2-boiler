import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

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
  @Output() onYell = new EventEmitter();


  imClicked(){
  	alert("I was clicked");
  }

  fireYellEvent(e){
    var f=this.objec;
    this.onYell.emit(f);
  }

  constructor() { }

  ngOnInit() {
  }

}
