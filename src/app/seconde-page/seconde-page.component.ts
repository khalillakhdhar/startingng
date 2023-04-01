import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-seconde-page',
  templateUrl: './seconde-page.component.html',
  styleUrls: ['./seconde-page.component.css']
})
export class SecondePageComponent implements OnInit {

  constructor() {
    console.log("hello from constructor");
  }
  ngOnInit() {
    // ngoninit is called after the constructor
    console.log("hi I am ngOnInit");
  }
ngOnDestroy(): void {
  //Called once, before the instance is destroyed.
  //Add 'implements OnDestroy' to the class.
  console.log("hi I am ngOnDestroy");
}
clicked()
{
  alert("button clicked");
}
}
