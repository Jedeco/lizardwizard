import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ThemeModule } from '../../@theme/theme.module';
import { ErvaringRoutingModule } from './ervaring-routing.module';
import { ErvaringComponent } from './ervaring.component';

import { StudieComponent } from './studie/studie.component';
import { ProjectenComponent } from './projecten/projecten.component';
import { ExtraComponent } from './extra/extra.component';

const components = [
  ErvaringComponent,
  StudieComponent,
  ProjectenComponent,
  ExtraComponent,
];

@NgModule({
  imports: [
    CommonModule,
    ThemeModule,
    ErvaringRoutingModule,
  ],
  declarations: [
    ...components,
  ],
})
export class ErvaringModule { }

