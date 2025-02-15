import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoutesModule } from './routes.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material.module';
import { LoginComponent } from './login/login.component';



@NgModule({
  declarations: [ LoginComponent ],
  imports: [
    CommonModule,
    RoutesModule,
    ReactiveFormsModule,
    MaterialModule
  ]
})
export class UserModule { }
