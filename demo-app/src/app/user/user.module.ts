import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupComponent } from './signup/signup.component';
import { SearchPipe } from '../pipes/search.pipe';



@NgModule({
  declarations: [
    SignupComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    SignupComponent
  ]
})
export class UserModule { }
