import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.css']
})
export class ForumComponent implements OnInit {

  form!: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.form = new FormGroup({
      username: new FormControl('', Validators.compose([])),
      message: new FormControl('', Validators.compose([])),
    });
  }


  submit(e:any): void {
    e.preventDefault();
    if (this.form.valid) {
        console.log('form value: ', this.form.value);
    } else {
        console.log('Error: Form invalid');
    }
  }

}
