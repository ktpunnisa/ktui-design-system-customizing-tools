import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DscButtonComponent } from './dsc-button/dsc-button.component';
import { DscColorComponent } from './dsc-color/dsc-color.component';

const routes: Routes = [
  { path: '', component: DscButtonComponent },
  { path: 'color', component: DscColorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
