import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JdcComponent } from './jdc.component';
import { ProfielComponent } from './profiel/profiel.component';
import { CvComponent } from './cv/cv.component';


const routes: Routes = [{
    path: '',
    component: JdcComponent,
    children: [ {
      path: 'profiel',
      component: ProfielComponent,
    }, {
      path: 'cv',
      component: CvComponent,
    }],
  }];
  
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JdcRoutingModule { }
