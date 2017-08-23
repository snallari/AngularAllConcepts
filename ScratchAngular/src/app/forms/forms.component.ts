import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent {

  myname= 'Brandon';

  onSubmit(value: any) {
    console.log(value);
  }

}
