import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChallengeRoutingModule } from './challenge-routing.module';
import { ChallengeComponent } from './challenge.component';
import { MaterialModule } from '../material/material.module';


@NgModule({
  declarations: [
    ChallengeComponent
  ],
  imports: [
    CommonModule,
    ChallengeRoutingModule,
    MaterialModule
  ],
  exports: [
    ChallengeComponent
  ]
})
export class ChallengeModule { }
