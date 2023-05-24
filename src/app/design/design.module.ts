import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DesignRoutingModule } from './design-routing.module';
import { SettingComponent } from '../setting/setting.component';
import { DesignComponent } from './design.component';


@NgModule({
  declarations: [
   DesignComponent
  ],
  imports: [
    CommonModule,
    DesignRoutingModule
  ]
})
export class DesignModule { }
