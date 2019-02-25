import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReportComponent } from './containers/report/report.component';
import { PanelGuard } from './panel.guard';
import { EmitComponent } from './containers/emit/emit.component';
import { RoleGuard } from './role.guard';

const routes: Routes = [
  {
    path: '',
    component: ReportComponent,
    canActivate: [RoleGuard],
    children: [
      { path: '', redirectTo: 'report', pathMatch: 'full' },
      { path: 'report', component: ReportComponent }
    ]
  },
  {
    path: 'emitter',
    component: EmitComponent,
    canActivate: [PanelGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PanelRoutingModule { }
