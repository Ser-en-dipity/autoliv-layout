import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutolivInfraComponent } from './autoliv-infra/autoliv-infra.component';
import { AutolivDrawingComponent } from './autoliv-drawing/autoliv-drawing.component';
import { AutolivToolsComponent } from './autoliv-tools/autoliv-tools.component';
import { AutolivMaintenanceComponent } from './autoliv-maintenance/autoliv-maintenance.component';
import { AutolivInspectionComponent } from './autoliv-inspection/autoliv-inspection.component';
import { AutolivNgHistoryComponent } from './autoliv-ng-history/autoliv-ng-history.component';
import { AutolivReportComponent } from './autoliv-report/autoliv-report.component';
import { CapabilityIndexDisplayComponent } from './capability-index-display/capability-index-display.component';
import { authGuard } from '../auth.guard';

const routes: Routes = [
  { path: 'autoliv-infra', component: AutolivInfraComponent },
  { path: 'autoliv-drawing', component: AutolivDrawingComponent },
  { path: 'autoliv-tools', component: AutolivToolsComponent },
  { path: 'autoliv-maintenance', component: AutolivMaintenanceComponent },
  { path: 'autoliv-inspection', component: AutolivInspectionComponent },
  { path: 'autoliv-ng-history', component: AutolivNgHistoryComponent },
  { path: 'autoliv-report', component: AutolivReportComponent, canActivate: [authGuard] },
  { path: 'capability-display', component: CapabilityIndexDisplayComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AutolivRoutingModule { }
