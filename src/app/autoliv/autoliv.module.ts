import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AutolivInfraComponent } from './autoliv-infra/autoliv-infra.component';
import { AutolivDrawingComponent } from './autoliv-drawing/autoliv-drawing.component';
import { AutolivToolsComponent } from './autoliv-tools/autoliv-tools.component';
import { ToolUploadComponent } from './autoliv-tools/tool-upload/tool-upload.component';
import { AutolivMaintenanceComponent } from './autoliv-maintenance/autoliv-maintenance.component';
import { MaintenanceProfileComponent } from './autoliv-maintenance/maintenance-profile/maintenance-profile.component';
import { AutolivInspectionComponent } from './autoliv-inspection/autoliv-inspection.component';
import { ExceptionRecordComponent } from './autoliv-inspection/exception-record/exception-record.component';
import { AutolivNgHistoryComponent } from './autoliv-ng-history/autoliv-ng-history.component';
import { UploadHistoryComponent } from './autoliv-ng-history/upload-history/upload-history.component';
import { SpotCheckTableComponent } from './autoliv-maintenance/spot-check-table/spot-check-table.component';
import { UploadSpotCheckComponent } from './autoliv-maintenance/upload-spot-check/upload-spot-check.component';
import { InputMachineCodeComponent } from './autoliv-infra/input-machine-code/input-machine-code.component';
import { MachineMaintenanceTableComponent } from './autoliv-maintenance/machine-maintenance-table/machine-maintenance-table.component';
import { UploadUpkeepTableComponent } from './autoliv-maintenance/upload-upkeep-table/upload-upkeep-table.component';
import { AutolivReportComponent } from './autoliv-report/autoliv-report.component';
import { QrCodeModule } from 'ng-qrcode';
import { UploadInspectSelfComponent } from './autoliv-inspection/upload-inspect-self/upload-inspect-self.component';
import { PatrolInspectionTableComponent } from './autoliv-inspection/patrol-inspection-table/patrol-inspection-table.component';
import { SelfCheckTableComponent } from './autoliv-inspection/self-check-table/self-check-table.component';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { DeviceOperationInstructionComponent } from './autoliv-maintenance/device-operation-instruction/device-operation-instruction.component';
import { ProductInspectInstructionComponent } from './autoliv-inspection/product-inspect-instruction/product-inspect-instruction.component';
import { InspectorCheckRecordComponent } from './autoliv-inspection/inspector-check-record/inspector-check-record.component';
import { CraftFlowComponent } from './autoliv-tools/craft-flow/craft-flow.component';
import { ToolBomDocComponent } from './autoliv-tools/tool-bom-doc/tool-bom-doc.component';
import { SpotCheckInstructionComponent } from './autoliv-maintenance/spot-check-instruction/spot-check-instruction.component';
import { DigitalMicroMeterComponent } from './autoliv-inspection/digital-micro-meter/digital-micro-meter.component';
import { AirGaugeComponent } from './autoliv-inspection/air-gauge/air-gauge.component';
import { ProfilerComponent } from './autoliv-inspection/profiler/profiler.component';
import { ProjectorComponent } from './autoliv-inspection/projector/projector.component';
import { CapabilityIndexDisplayComponent } from './capability-index-display/capability-index-display.component';
import { LineChartComponent } from './capability-index-display/line-chart/line-chart.component';

import { SharedModule } from '../shared/shared.module';
import { NzUploadModule } from 'ng-zorro-antd/upload';

import { AutolivRoutingModule } from './autoliv-routing.module';
@NgModule({
  declarations: [
    AutolivInfraComponent,
    AutolivDrawingComponent,
    AutolivToolsComponent,
    ToolUploadComponent,
    AutolivMaintenanceComponent,
    MaintenanceProfileComponent,
    AutolivInspectionComponent,
    ExceptionRecordComponent,
    AutolivNgHistoryComponent,
    UploadHistoryComponent,
    SpotCheckTableComponent,
    UploadSpotCheckComponent,
    InputMachineCodeComponent,
    MachineMaintenanceTableComponent,
    UploadUpkeepTableComponent,
    AutolivReportComponent,
    UploadInspectSelfComponent,
    PatrolInspectionTableComponent,
    SelfCheckTableComponent,
    DeviceOperationInstructionComponent,
    ProductInspectInstructionComponent,
    InspectorCheckRecordComponent,
    CraftFlowComponent,
    ToolBomDocComponent,
    SpotCheckInstructionComponent,
    DigitalMicroMeterComponent,
    AirGaugeComponent,
    ProfilerComponent,
    ProjectorComponent,
    CapabilityIndexDisplayComponent,
    LineChartComponent,
  ],
  imports: [
    CommonModule,
    AutolivRoutingModule,
    SharedModule,
    NzUploadModule,
    QrCodeModule,
    PdfViewerModule,
  ],
  providers: [
    
  ],
})
export class AutolivModule { }
