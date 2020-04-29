import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DesignSystemComponent } from './design-system/design-system.component';
import { DscColorComponent } from './dsc-color/dsc-color.component';
import { DscColorResolver } from './dsc-color/dsc-color.resolver';
import { DscButtonComponent } from './dsc-button/dsc-button.component';
import { DscButtonResolver } from './dsc-button/dsc-button.resolver';
import { DscLinkComponent } from './dsc-link/dsc-link.component';
import { DscLinkResolver } from './dsc-link/dsc-link.resolver';
import { DscInputComponent } from './dsc-input/dsc-input.component';
import { DscInputResolver } from './dsc-input/dsc-input.resolver';
import { DscProjectResolver } from './dsc-project/dsc-project.resolver';

const routes: Routes = [
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
    resolve: { color: DscColorResolver },
    runGuardsAndResolvers: 'always'
  },
  {
    path: 'button',
    component: DscButtonComponent,
    resolve: { color: DscColorResolver, button: DscButtonResolver },
    runGuardsAndResolvers: 'always'
  },
  {
    path: 'link',
    component: DscLinkComponent,
    resolve: { color: DscColorResolver, link: DscLinkResolver },
    runGuardsAndResolvers: 'always'
  },
  {
    path: 'input',
    component: DscInputComponent,
    resolve: { color: DscColorResolver, input: DscInputResolver },
    runGuardsAndResolvers: 'always'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
