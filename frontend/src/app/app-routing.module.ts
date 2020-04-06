import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DscButtonComponent } from './dsc-button/dsc-button.component';
import { DscColorComponent } from './dsc-color/dsc-color.component';
import { DscColorResolver } from './dsc-color/dsc-color.resolver';

const routes: Routes = [
  { path: '', component: DscButtonComponent },
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
