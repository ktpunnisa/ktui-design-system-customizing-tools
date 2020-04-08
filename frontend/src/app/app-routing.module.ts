import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DscButtonComponent } from './dsc-button/dsc-button.component';
import { DscColorComponent } from './dsc-color/dsc-color.component';
import { DscColorResolver } from './dsc-color/dsc-color.resolver';
import { DscButtonResolver } from './dsc-button/dsc-button.resolver';

const routes: Routes = [
  {
    path: '',
    component: DscButtonComponent,
    resolve: { button: DscButtonResolver },
    runGuardsAndResolvers: 'always'
  },
  {
    path: 'color',
    component: DscColorComponent,
    resolve: { color: DscColorResolver },
    runGuardsAndResolvers: 'always'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
