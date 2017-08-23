import {Component, OnInit, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  inputs: [`parentData`],
  outputs: ['childEvent']
})

export class ListComponent {
  public title = 'Tutorials for Shruti';
  public imgLink = 'http://lorempixel.com/400/200';
  public applyClass = true;
  public applyBlue = false;
  public fname: string;
  public showElement = true;
  public lname;
  public color= 'green';
  public colors= ['red', 'green', 'blue'];
  public cone= true;
  public ctwo= true;
  public style= 'italic';
  public size= '30px';
  public parentData: string;
  childEvent= new EventEmitter<String>();
  name= 'sai';
  onChange(value: string) {
    this.childEvent.emit(value);
  }


  onClick(value) {
    console.log('Click button' + value);
  }

  toggle() {
    this.cone = !this.cone;
    this.ctwo = !this.ctwo;
  }
}
