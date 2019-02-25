import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: '/panel/report', pathMatch: 'full'},
  {
    path: 'signin',
    loadChildren: '@app-root/auth/auth.module#AuthModule'
  },
  {
    path: 'panel',
    loadChildren: '@app-root/panel/panel.module#PanelModule'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
