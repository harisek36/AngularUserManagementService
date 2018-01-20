import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
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

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    UserInfoComponent,
    LogoutComponent,
    UserDetailComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MatButtonModule,
    MatCardModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatToolbarModule,
    NoopAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
