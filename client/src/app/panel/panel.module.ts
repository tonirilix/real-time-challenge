import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportComponent } from './containers/report/report.component';
import { PanelGuard } from './panel.guard';
import { PanelRoutingModule } from './panel-routing.module';
import { DeepStreamService } from './services/deep-stream.service';
import { WebSocketGatewayConfig, WS_CONFIG, WebSocketGateway } from './gateways/websocket.gateway';
import { environment } from 'src/environments/environment';
import { RestfulGateway } from './gateways/restful.gateway';
import { ReportListComponent } from './components/report-list/report-list.component';
import { KpiNavComponent } from './components/kpi-nav/kpi-nav.component';
import { ReportItemComponent } from './components/report-item/report-item.component';
import { EmitComponent } from './containers/emit/emit.component';
import { RoleGuard } from './role.guard';
import { MainNavComponent } from './components/main-nav/main-nav.component';

const WSConfig: WebSocketGatewayConfig = {
  port: environment.dsConfig.port,
  host: environment.dsConfig.host
};

@NgModule({
  declarations: [ReportComponent, ReportListComponent, KpiNavComponent, ReportItemComponent, EmitComponent, MainNavComponent],
  imports: [
    CommonModule,
    PanelRoutingModule,
  ],
  providers: [PanelGuard, RoleGuard, RestfulGateway, WebSocketGateway, // DeepStreamService,
    { provide: WS_CONFIG, useValue: WSConfig },
  ]
})
export class PanelModule { }
