import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HomePage } from './home/home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { UserInfosComponent } from './user-infos/user-infos.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    HomePageRoutingModule    
  ],
  declarations: [HomePage, UserInfosComponent]
})
export class HomePageModule {}
