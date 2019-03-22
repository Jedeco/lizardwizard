import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ErvaringComponent } from './ervaring.component';
import { StudieComponent } from './studie/studie.component';
import { ProjectenComponent } from './projecten/projecten.component';
import { ExtraComponent } from './extra/extra.component';

const routes: Routes = [{
  path: '',
  component: ErvaringComponent,
  children: [ {
    path: 'studie',
    component: StudieComponent,
  }, {
    path: 'projecten',
    component: ProjectenComponent,
  }, {
    path: 'extra',
    component: ExtraComponent,
  }],
  }];
  
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ErvaringRoutingModule { }
