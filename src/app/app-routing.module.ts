import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './components/landing/landing.component';
import { TableComponent } from './components/table/table.component';
import { TextChangeComponent } from './components/text-change/text-change.component';


const routes: Routes = [
  {
    path: 'page1',
    component:TableComponent,
  },
  {
    path: 'page2',
    component:TextChangeComponent,
  },
  {
    path: '',
    component:LandingComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
