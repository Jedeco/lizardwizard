import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InteressesComponent } from './interesses.component';
import { GeluidComponent } from './geluid/geluid.component';
import { BeeldComponent } from './beeld/beeld.component';
import { SchriftComponent } from './schrift/schrift.component';

const routes: Routes = [{
  path: '',
  component: InteressesComponent,
  children: [ {
    path: 'geluid',
    component: GeluidComponent,
  }, {
    path: 'beeld',
    component: BeeldComponent,
  }, {
    path: 'schrift',
    component: SchriftComponent,
  }],
  }];
  
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InteressesRoutingModule { }
