import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DscButtonComponent } from './dsc-button/dsc-button.component';
import { DscColorComponent } from './dsc-color/dsc-color.component';
import { DscColorResolver } from './dsc-color/dsc-color.resolver';
import { DscButtonResolver } from './dsc-button/dsc-button.resolver';
import { DesignSystemComponent } from './design-system/design-system.component';

const routes: Routes = [
  {
    path: '',
    component: DesignSystemComponent,
    resolve: { color: DscColorResolver, button: DscButtonResolver },
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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
