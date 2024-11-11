import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.scss']
})
export class ReactiveFormsComponent implements OnInit {

  public registerForm: FormGroup = this.formBuilder.group({
    fistName: [''],
    lastName: [''],
  });

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
  }

  public submitForm() {
    console.log(this.registerForm.value);
    console.log(this.registerForm.value.firstName);
    console.log(this.registerForm.value.lastName);
  }

}
