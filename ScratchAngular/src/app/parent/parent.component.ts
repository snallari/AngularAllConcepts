import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  title = 'app';
  public childData: string;
  myname= 'Brandon';

  onSubmit(value: any) {
    console.log(value);
  }

  constructor() { }

  ngOnInit() {
  }

}
