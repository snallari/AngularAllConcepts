import {Component, OnInit} from '@angular/core';
import {FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-reactforms',
  templateUrl: './reactforms.component.html',
  styleUrls: ['./reactforms.component.css']
})
export class ReactformsComponent implements OnInit {

  usersform: FormGroup;



//  usersform = new FormGroup({
//    name: new FormControl('brandon', [Validators.required, Validators.minLength(4), Validators.maxLength(10)]),
//    email: new FormControl(),
//    address: new FormGroup({
//      city: new FormControl(),
//      postalcode: new FormControl(),
//      street: new FormControl(null, Validators.pattern('^[1-9][0-9]{4}'))
//
//    })
//  });




  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit() {
    this.usersform = this._formBuilder.group({
      name: ['brandon', [Validators.required, Validators.minLength(4), Validators.maxLength(10)]],
      email: [],
      address: this._formBuilder.group({
        street: [ ],
        city: [],
        postalcode: [null, [Validators.pattern('^[1-9][0-9]{4}')]]

      })

    })
  }


  onSubmit() {
    console.log(this.usersform.value);
  }

}
