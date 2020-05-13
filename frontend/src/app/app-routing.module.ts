import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DesignSystemComponent } from './design-system/design-system.component';
import { DscColorComponent } from './dsc-color/dsc-color.component';
import { DscColorResolver } from './dsc-color/dsc-color.resolver';
import { DscButtonComponent } from './button/dsc-button/dsc-button.component';
import { DscButtonResolver } from './button/dsc-button.resolver';
import { DscLinkComponent } from './dsc-link/dsc-link.component';
import { DscLinkResolver } from './dsc-link/dsc-link.resolver';
import { DscInputComponent } from './dsc-input/dsc-input.component';
import { DscInputResolver } from './dsc-input/dsc-input.resolver';
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
