import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { HomeRoutes } from './login-admin.routing';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from 'src/app/modules/shared/header/header.component';

@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    HomeRoutes
  ],
  exports: [FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [],
})
export class LoginModule {}
