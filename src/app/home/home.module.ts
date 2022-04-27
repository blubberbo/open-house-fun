import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { ChallengeModule } from '../challenge/challenge.module';


@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ChallengeModule
  ]
})
export class HomeModule { }
