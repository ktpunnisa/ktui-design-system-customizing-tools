import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import 'kt-component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BaseButtonComponent } from './base/base-button/base-button.component';
import { DscButtonComponent } from './dsc-button/dsc-button.component';
import { SettingRangeSliderComponent } from './base/setting-range-slider/setting-range-slider.component';
import { DscColorComponent } from './dsc-color/dsc-color.component';
import { BaseColorComponent } from './base/base-color/base-color.component';
import { DscColorSettingComponent } from './dsc-color-setting/dsc-color-setting.component';
import { DscButtonSettingComponent } from './dsc-button-setting/dsc-button-setting.component';
import { SidebarComponent } from './sidebar/sidebar.component';
@NgModule({
  declarations: [
    AppComponent,
    BaseButtonComponent,
    DscButtonComponent,
    SettingRangeSliderComponent,
    DscColorComponent,
    BaseColorComponent,
    DscColorSettingComponent,
    DscButtonSettingComponent,
    SidebarComponent
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA // Tells Angular we will have custom tags in our templates
  ]
})
export class AppModule {}
