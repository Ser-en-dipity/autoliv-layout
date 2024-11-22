import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { EcoFabSpeedDialComponent, EcoFabSpeedDialTriggerComponent, EcoFabSpeedDialActionsComponent } from '@ser-en-dipity/fab-speed-dial';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzAffixModule } from 'ng-zorro-antd/affix';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzDescriptionsModule } from 'ng-zorro-antd/descriptions';
import { NzStatisticModule } from 'ng-zorro-antd/statistic';

import { AssetSearchBoxComponent } from './components/asset-search-box/asset-search-box.component';
import { MaterialSearchBoxComponent } from './components/material-search-box/material-search-box.component';
import { ProductSearchBoxComponent } from './components/product-search-box/product-search-box.component';
import { SupplierSearchBoxComponent } from './components/supplier-search-box/supplier-search-box.component';
import { TaxLabelPipe } from './pipes/tax-label.pipe';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { StateLabelPipe } from './pipes/state-label.pipe';
import { StateLabel2Pipe } from './pipes/state-label-2.pipe';
import { PoSearchBoxComponent } from './components/po-search-box/po-search-box.component';
import { UnitLabelPipe } from './pipes/unit-label.pipe';
import { SemiProductLabelPipe } from './pipes/semi-product-label.pipe';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { OrdersSearchBoxComponent } from './components/orders-search-box/orders-search-box.component';
import { SearchOptionLabelPipe } from './pipes/search-option-label.pipe';
import { ExternalSearchFormComponent } from './components/external-search-form/external-search-form.component';
import { OrderSearchLabelPipe } from './pipes/order-search-label.pipe';
import { CustomerSearchBoxComponent } from './components/customer-search-box/customer-search-box.component';
import { CustomerOptionLabelPipe } from './pipes/customer-option-label.pipe';
import { CurrencyLabelPipe } from './pipes/currency-label.pipe';
import { ProductOptionLabelPipe } from './pipes/product-option-label.pipe';
import { SupplierOptionLabelPipe } from './pipes/supplier-option-label.pipe';
import { AssetOptionLabelPipe } from './pipes/asset-option-label.pipe';
import { ProcessOptionLabelPipe } from './pipes/process-option-label.pipe';
import { StockTypeLabelPipe } from './pipes/stock-type-label.pipe';
import { AssetTypeLabelPipe } from './pipes/asset-type-label.pipe';
import { MoSearchBoxComponent } from './components/mo-search-box/mo-search-box.component';
import { AssetTypeLabel2Pipe } from './pipes/asset-type-label-2.pipe';
import { AssetStockDetailModalComponent } from './components/asset-stock-detail-modal/asset-stock-detail-modal.component';
import { OoSearchBoxComponent } from './components/oo-search-box/oo-search-box.component';
import { MaterialWeightCalculatorComponent } from './components/material-weight-calculator/material-weight-calculator.component';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { UnitLabelGqlPipe } from './pipes/unit-label-gql.pipe';
import { StockTypeApiPipe } from './pipes/stock-type-api.pipe';
import { ToolTypeLabelGqlPipe } from './pipes/tool-type-label-gql.pipe';
import { StockChangeTypePipe } from './pipes/stock-change-type.pipe';
import { ToolTypeLabelApiPipe } from './pipes/tool-type-label-api.pipe';
import { StockCellSelectorComponent } from './components/stock-cell-selector/stock-cell-selector.component';
import { TaxLabelGqlPipe } from './pipes/tax-label-gql.pipe';
import { ShapeLabelApiPipe } from './pipes/shape-label-api.pipe';
import { RawLabelApiPipe } from './pipes/raw-label-api.pipe';
import { PkgMaterialSearchBoxComponent } from './components/pkg-material-search-box/pkg-material-search-box.component';
import { ApolloModule } from 'apollo-angular';
import { ProductSearchBoxV2Component } from './components/product-search-box-v2/product-search-box-v2.component';
import { FinishLabelPipe } from './pipes/finish-label.pipe';
import { MaterialLabelPipe } from './pipes/material-label.pipe';
import { MaterialSearchBoxV2Component } from './components/material-search-box-v2/material-search-box-v2.component';
import { AssetSearchBoxV2Component } from './components/asset-search-box-v2/asset-search-box-v2.component';
import { PoSearchBoxV2Component } from './components/po-search-box-v2/po-search-box-v2.component';
import { PoStateLabelPipe } from './pipes/po-state-label.pipe';
import { MachineSearchBoxComponent } from './components/machine-search-box/machine-search-box.component';
import { MachineOptionLabelPipe } from './pipes/machine-option-label.pipe';
import { ResaleSearchBoxComponent } from './components/resale-search-box/resale-search-box.component';
import { ToolSearchBoxComponent } from './components/tool-search-box/tool-search-box.component';

const NZ_MODULES = [
  NzTableModule,
  NzTabsModule,
  NzInputModule,
  NzSelectModule,
  NzDatePickerModule,
  NzInputNumberModule,
  NzLayoutModule,
  NzButtonModule,
  NzFormModule,
  NzIconModule,
  NzDividerModule,
  NzPageHeaderModule,
  NzBreadCrumbModule,
  NzCardModule,
  NzRadioModule,
  NzSpinModule,
  NzMenuModule,
  NzAffixModule,
  NzAvatarModule,
  NzDropDownModule,
  NzDescriptionsModule,
  NzStatisticModule,
  NzModalModule,
];

const DIAL_MODULE = [EcoFabSpeedDialComponent, EcoFabSpeedDialTriggerComponent, EcoFabSpeedDialActionsComponent, MatIconModule, MatButtonModule];

@NgModule({
  exports: [
    ...NZ_MODULES,
    ...DIAL_MODULE,
    FormsModule,
    ReactiveFormsModule,
    ProductSearchBoxComponent,
    AssetSearchBoxComponent,
    SupplierSearchBoxComponent,
    OrdersSearchBoxComponent,
    CustomerSearchBoxComponent,
    TaxLabelPipe,
    TaxLabelGqlPipe,
    StateLabelPipe,
    StateLabel2Pipe,
    UnitLabelPipe,
    UnitLabelGqlPipe,
    SemiProductLabelPipe,
    CurrencyLabelPipe,
    ProcessOptionLabelPipe,
    StockTypeLabelPipe,
    AssetTypeLabelPipe,
    MoSearchBoxComponent,
    AssetTypeLabel2Pipe,
    AssetStockDetailModalComponent,
    OoSearchBoxComponent,
    StockTypeApiPipe,
    ToolTypeLabelGqlPipe,
    ToolTypeLabelApiPipe,
    StockChangeTypePipe,
    StockCellSelectorComponent,
    PoSearchBoxComponent,
    ShapeLabelApiPipe,
    RawLabelApiPipe,
    PkgMaterialSearchBoxComponent,
    ProductSearchBoxV2Component,
    MaterialSearchBoxV2Component,
    MachineSearchBoxComponent,
    ResaleSearchBoxComponent,
    ToolSearchBoxComponent
  ],
  declarations: [
    ProductSearchBoxComponent,
    MaterialSearchBoxComponent,
    AssetSearchBoxComponent,
    SupplierSearchBoxComponent,
    TaxLabelPipe,
    StateLabelPipe,
    StateLabel2Pipe,
    PoSearchBoxComponent,
    UnitLabelPipe,
    SemiProductLabelPipe,
    SearchBoxComponent,
    OrdersSearchBoxComponent,
    SearchOptionLabelPipe,
    ExternalSearchFormComponent,
    OrderSearchLabelPipe,
    CustomerSearchBoxComponent,
    CustomerOptionLabelPipe,
    CurrencyLabelPipe,
    ProductOptionLabelPipe,
    SupplierOptionLabelPipe,
    AssetOptionLabelPipe,
    ProcessOptionLabelPipe,
    StockTypeLabelPipe,
    AssetTypeLabelPipe,
    MoSearchBoxComponent,
    AssetTypeLabel2Pipe,
    AssetStockDetailModalComponent,
    OoSearchBoxComponent,
    MaterialWeightCalculatorComponent,
    UnitLabelGqlPipe,
    StockTypeApiPipe,
    ToolTypeLabelGqlPipe,
    StockChangeTypePipe,
    ToolTypeLabelApiPipe,
    StockCellSelectorComponent,
    TaxLabelGqlPipe,
    ShapeLabelApiPipe,
    RawLabelApiPipe,
    PkgMaterialSearchBoxComponent,
    ProductSearchBoxV2Component,
    FinishLabelPipe,
    MaterialLabelPipe,
    MaterialSearchBoxV2Component,
    AssetSearchBoxV2Component,
    PoSearchBoxV2Component,
    PoStateLabelPipe,
    MachineSearchBoxComponent,
    MachineOptionLabelPipe,
    ResaleSearchBoxComponent,
    ToolSearchBoxComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ApolloModule,
    ...NZ_MODULES,
    ...DIAL_MODULE,
  ],
})
export class SharedModule { }
