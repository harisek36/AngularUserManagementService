import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../user';


@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  titleAlert = 'can\'t be blank';
  rForm: FormGroup;
  post: any;
  emailAddress: string;
  firstName: string;
  lastName: string;
  newUser: User = new User(this.emailAddress, this.firstName, this.lastName);
  constructor(private fb: FormBuilder) {
    this.rForm = fb.group({
      'f_emailAddress': [null, Validators.required],
      'f_firstName': [null, Validators.compose([Validators.required, Validators.minLength(2), Validators.maxLength(10)])],
      'f_lastName': [null, Validators.required]
    });
  }

  ngOnInit() {
  }
  addPost(post) {
    console.log(this.emailAddress);

    this.emailAddress = post.f_emailAddress;
    this.firstName = post.f_firstName;
    this.lastName = post.f_lastName;

    console.log(this.emailAddress);
  }

}
