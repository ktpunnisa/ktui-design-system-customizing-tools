import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
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
import { DscLinkResolver } from './dsc-link/dsc-link.resolver';
import { DscInputResolver } from './dsc-input/dsc-input.resolver';
import { DisplayContainerComponent } from './base/display-container/display-container.component';
import { PaddingSettingComponent } from './base/padding-setting/padding-setting.component';
import { ColorListSettingComponent } from './base/color-list-setting/color-list-setting.component';
import { ColorPickerComponent } from './base/color-picker/color-picker.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DemoButtonComponent } from './base/demo-button/demo-button.component';
import { ToggleSwitchComponent } from './base/toggle-switch/toggle-switch.component';
import { DesignSystemComponent } from './design-system/design-system.component';
import { LoadingComponent } from './base/loading/loading.component';
import { LibGeneratorComponent } from './lib-generator/lib-generator.component';
import { DscLinkComponent } from './dsc-link/dsc-link.component';
import { DscLinkSettingComponent } from './dsc-link-setting/dsc-link-setting.component';
import { BaseLinkComponent } from './base/base-link/base-link.component';
import { DemoLinkComponent } from './base/demo-link/demo-link.component';
import { FontWeightSettingComponent } from './base/font-weight-setting/font-weight-setting.component';
import { DscInputComponent } from './dsc-input/dsc-input.component';
import { DscInputSettingComponent } from './dsc-input-setting/dsc-input-setting.component';
import { BaseInputComponent } from './base/base-input/base-input.component';
import { DemoInputComponent } from './base/demo-input/demo-input.component';
import { DscProjectComponent } from './dsc-project/dsc-project.component';
import { DscProjectResolver } from './dsc-project/dsc-project.resolver';
import { CardProjectComponent } from './base/card-project/card-project.component';
import { CheckboxComponent } from './base/checkbox/checkbox.component';

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
    ToggleSwitchComponent,
    DesignSystemComponent,
    LoadingComponent,
    LibGeneratorComponent,
    DscLinkComponent,
    DscLinkSettingComponent,
    BaseLinkComponent,
    DemoLinkComponent,
    FontWeightSettingComponent,
    DscInputComponent,
    DscInputSettingComponent,
    BaseInputComponent,
    DemoInputComponent,
    DscProjectComponent,
    CardProjectComponent,
    CheckboxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatDialogModule,
    ColorPickerModule
  ],
  providers: [
    DscColorResolver,
    DscButtonResolver,
    DscLinkResolver,
    DscInputResolver,
    DscProjectResolver
  ],
  entryComponents: [LibGeneratorComponent],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA // Tells Angular we will have custom tags in our templates
  ]
})
export class AppModule {}
