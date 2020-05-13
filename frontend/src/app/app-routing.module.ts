import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DesignSystemComponent } from './design-system/design-system.component';
import { DscColorComponent } from './foundation-color/dsc-color/dsc-color.component';
import { DscColorResolver } from './foundation-color/dsc-color.resolver';
import { DscButtonComponent } from './component-button/dsc-button/dsc-button.component';
import { DscButtonResolver } from './component-button/dsc-button.resolver';
import { DscLinkComponent } from './component-link/dsc-link/dsc-link.component';
import { DscLinkResolver } from './component-link/dsc-link.resolver';
import { DscInputComponent } from './component-input/dsc-input/dsc-input.component';
import { DscInputResolver } from './component-input/dsc-input.resolver';
import { DscProjectResolver } from './dsc-project/dsc-project.resolver';
import { DscProjectComponent } from './dsc-project/dsc-project.component';
import { DevSetupComponent } from './developer/dev-setup/dev-setup.component';
import { DevButtonComponent } from './developer/dev-button/dev-button.component';
import { DevLinkComponent } from './developer/dev-link/dev-link.component';
import { DevInputComponent } from './developer/dev-input/dev-input.component';

const routes: Routes = [
  { path: 'developer/setup-library', component: DevSetupComponent },
  { path: 'developer/button', component: DevButtonComponent },
  { path: 'developer/link', component: DevLinkComponent },
  { path: 'developer/input', component: DevInputComponent },
  {
    path: 'project',
    component: DscProjectComponent,
    resolve: {
      project: DscProjectResolver
    },
    runGuardsAndResolvers: 'always'
  },
  {
    path: '',
    component: DesignSystemComponent,
    resolve: {
      project: DscProjectResolver,
      color: DscColorResolver,
      button: DscButtonResolver,
      link: DscLinkResolver,
      input: DscInputResolver
    },
    runGuardsAndResolvers: 'always'
  },
  {
    path: 'color',
    component: DscColorComponent,
    resolve: { project: DscProjectResolver, color: DscColorResolver },
    runGuardsAndResolvers: 'always'
  },
  {
    path: 'button',
    component: DscButtonComponent,
    resolve: { project: DscProjectResolver, color: DscColorResolver, button: DscButtonResolver },
    runGuardsAndResolvers: 'always'
  },
  {
    path: 'link',
    component: DscLinkComponent,
    resolve: { project: DscProjectResolver, color: DscColorResolver, link: DscLinkResolver },
    runGuardsAndResolvers: 'always'
  },
  {
    path: 'input',
    component: DscInputComponent,
    resolve: { project: DscProjectResolver, color: DscColorResolver, input: DscInputResolver },
    runGuardsAndResolvers: 'always'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
