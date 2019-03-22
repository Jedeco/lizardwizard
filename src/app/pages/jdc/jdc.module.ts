import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ThemeModule } from '../../@theme/theme.module';
import { JdcRoutingModule } from './jdc-routing.module';
import { JdcComponent } from './jdc.component';

import { ProfielComponent } from './profiel/profiel.component';
import { CvComponent } from './cv/cv.component';

const components = [
  JdcComponent,
  ProfielComponent,
  CvComponent,
];

@NgModule({
  imports: [
    CommonModule,
    ThemeModule,
    JdcRoutingModule,
  ],
  declarations: [
    ...components,
  ],
})
export class JdcModule { }
