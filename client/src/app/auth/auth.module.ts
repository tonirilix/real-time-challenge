import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParticlesModule } from 'angular-particle';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SigninComponent } from './containers/signin/signin.component';
import { AuthRoutingModule } from './auth-routing.module';
import { AuthService } from './services/auth.service';
import { AuthInterceptor } from './services/auth.interceptor';

@NgModule({
  declarations: [SigninComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ParticlesModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [AuthService]
})
export class AuthModule { }
