import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../user';
import {UserService} from '../user.service';
import {validate} from 'codelyzer/walkerFactory/walkerFn';


@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  currentUser: User[];
  titleAlert = 'can\'t be blank';
  rForm: FormGroup;
  post: any;
  emailAddress: string;
  firstName: string;
  lastName: string;
  newUser: User;
  constructor(private fb: FormBuilder, private userService: UserService) {
    this.rForm = fb.group({
      'f_emailAddress': [null, Validators.compose( [Validators.required, Validators.email])],
      'f_firstName': [null, Validators.compose([Validators.required, Validators.minLength(2), Validators.maxLength(10)])],
      'f_lastName': [null, Validators.required]
    });
  }

  ngOnInit() {
    this.getUserCount();
  }
  getUserCount() {
    this.userService.getUsers().subscribe(res => this.currentUser = res);
  }
  addPost(post) {
    this.emailAddress = post.f_emailAddress;
    this.firstName = post.f_firstName.trim();
    this.lastName = post.f_lastName.trim();
    // adding user details
    this.newUser = new User('', this.firstName, this.lastName, this.emailAddress);
    this.newUser.id = this.currentUser.length + 1 + '';
    // this.newUser.email = this.emailAddress;
    // this.newUser.first_name = this.firstName;
    // this.newUser.last_name = this.lastName;
    // posting new User to the DB
    this.userService.addUser(this.newUser);

  }

}
