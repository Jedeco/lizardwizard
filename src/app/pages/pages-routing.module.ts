import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
    {
      path: 'dashboard',
      component: DashboardComponent,
    },
    {
      path: 'about',
      component: AboutComponent,
    },
    {
      path: 'contact',
      component: ContactComponent,
    },
    {
      path: 'jdc',
      loadChildren: './jdc/jdc.module#JdcModule',
    },
    {
      path: 'ervaring',
      loadChildren: './ervaring/ervaring.module#ErvaringModule',
    },
    {
      path: 'interesses',
      loadChildren: './interesses/interesses.module#InteressesModule',
    },
    {
      path: '',
      redirectTo: 'dashboard',
      pathMatch: 'full',
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
