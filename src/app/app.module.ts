import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import {MatFormFieldModule} from '@angular/material/form-field';


import { RouterModule, Routes } from '@angular/router';


// Material Design
import { MatCardModule, MatGridListModule, MatIconModule, MatToolbarModule, MatButtonModule } from '@angular/material';
import { MatInputModule } from '@angular/material';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppRoutingModule } from './app-routing.module';
import { LogoutComponent } from './account/logout.component';
import { UserDetailComponent } from './user/detail.component';
import { InMemoryUserDataService} from './in-memory-data.service';
import { UserService } from './user.service';
import { CreateUserComponent } from './create-user/create-user.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    UserInfoComponent,
    LogoutComponent,
    UserDetailComponent,
    CreateUserComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryUserDataService
    ),
    ReactiveFormsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatCardModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatToolbarModule,
    NoopAnimationsModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
