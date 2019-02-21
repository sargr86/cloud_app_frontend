import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { ShowUsersComponent } from './show-users/show-users.component';
import {SharedModule} from "../shared/shared.module";

@NgModule({
  declarations: [ShowUsersComponent],
  imports: [
    CommonModule,
    UsersRoutingModule,
      SharedModule
  ],
    exports:[
        ShowUsersComponent
    ]
})
export class UsersModule { }
