import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DscButtonComponent } from './dsc-button/dsc-button.component';

const routes: Routes = [{ path: '', component: DscButtonComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
