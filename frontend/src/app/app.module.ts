import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ColorPickerModule } from '@iplab/ngx-color-picker';

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
import { DscColorResolver } from './dsc-color/dsc-color.resolver';
import { DscButtonResolver } from './dsc-button/dsc-button.resolver';
import { DisplayContainerComponent } from './base/display-container/display-container.component';
import { PaddingSettingComponent } from './base/padding-setting/padding-setting.component';
import { ColorListSettingComponent } from './base/color-list-setting/color-list-setting.component';
import { ColorPickerComponent } from './base/color-picker/color-picker.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DemoButtonComponent } from './base/demo-button/demo-button.component';
import { ToggleSwitchComponent } from './base/toggle-switch/toggle-switch.component';

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
    SidebarComponent,
    DisplayContainerComponent,
    PaddingSettingComponent,
    ColorListSettingComponent,
    ColorPickerComponent,
    NavbarComponent,
    DemoButtonComponent,
    ToggleSwitchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatIconModule,
    ColorPickerModule
  ],
  providers: [DscColorResolver, DscButtonResolver],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA // Tells Angular we will have custom tags in our templates
  ]
})
export class AppModule {}
