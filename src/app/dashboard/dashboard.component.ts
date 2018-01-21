import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'dashboard-component',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: [ UserService ]
})
export class DashboardComponent implements OnInit {
  usersDashboard: User[];

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.getUsersforDashBoard();
  }
  getUsersforDashBoard() {
    this.userService.getUsers().subscribe(res => this.usersDashboard = res);
  }

}

