import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ThemeModule } from '../../@theme/theme.module';
import { InteressesRoutingModule } from './interesses-routing.module';
import { InteressesComponent } from './interesses.component';

import { GeluidComponent } from './geluid/geluid.component';
import { BeeldComponent } from './beeld/beeld.component';
import { SchriftComponent } from './schrift/schrift.component';

const components = [
  InteressesComponent,
  GeluidComponent,
  BeeldComponent,
  SchriftComponent,
];

@NgModule({
  imports: [
    CommonModule,
    ThemeModule,
    InteressesRoutingModule,
  ],
  declarations: [
    ...components,
  ],
})
export class InteressesModule { }

