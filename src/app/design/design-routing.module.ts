import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DesignComponent } from './design.component';

const routes: Routes = [
  {
    path : '',
    component : DesignComponent,
    children : [
      { path : 'setting', loadChildren : ()=> import('./../setting/setting.module').then(m => m.SettingModule)}
    ],    
  },
  { path : '', redirectTo : '', pathMatch : 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DesignRoutingModule { }
