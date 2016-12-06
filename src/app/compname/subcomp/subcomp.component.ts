import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-subcomp',
  templateUrl: './subcomp.component.html',
  styleUrls: ['./subcomp.component.css']
})
export class SubcompComponent implements OnInit {

  title="This is a beautiful component";

  constructor() { }

  ngOnInit() {
  }

}
