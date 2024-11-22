/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

export enum ASSET_TYPE {
  ASSET = "ASSET",
  GAUGE = "GAUGE",
  OIL = "OIL",
  PKG_MATERIAL = "PKG_MATERIAL",
  PRODUCT = "PRODUCT",
  RAW_MATERIAL = "RAW_MATERIAL",
  SEMI_FINISHED_PRODUCT = "SEMI_FINISHED_PRODUCT",
  TOOL = "TOOL",
  ZAKA = "ZAKA",
}

export enum ExtraTag {
  DAY_SHIFT = "DAY_SHIFT",
  NIGHT_SHIFT = "NIGHT_SHIFT",
  UN_TAG = "UN_TAG",
}

export enum MFG_ORDER_STATE {
  CANCELLED = "CANCELLED",
  FINISHED = "FINISHED",
  NOT_STARTED = "NOT_STARTED",
  PENDING = "PENDING",
  STARTED = "STARTED",
}

export enum ORDER_STATE {
  CANCELLED = "CANCELLED",
  CLOSED = "CLOSED",
  RUNNING = "RUNNING",
  STARTED = "STARTED",
}

export enum OsState {
  CANCELLED = "CANCELLED",
  CHECKED = "CHECKED",
  CLOSED = "CLOSED",
  IN_ACTIVE = "IN_ACTIVE",
  STARTED = "STARTED",
  WAITING_FOR_CHECK = "WAITING_FOR_CHECK",
}

export enum PROCESSING_TYPE {
  ASSEMBLE = "ASSEMBLE",
  BLACKEN = "BLACKEN",
  BLACK_ZINC_PLATING = "BLACK_ZINC_PLATING",
  BLUNT = "BLUNT",
  BONDERIZING = "BONDERIZING",
  BRIGHT_ZINC_PLATING = "BRIGHT_ZINC_PLATING",
  CHAMFER = "CHAMFER",
  DISPENSING = "DISPENSING",
  ELECTROLESS_NICKEL_PLATING = "ELECTROLESS_NICKEL_PLATING",
  GOLD_PLATING = "GOLD_PLATING",
  GRIND = "GRIND",
  HEAT_TREATMENT = "HEAT_TREATMENT",
  HEXAVALENT_COLOR_ZINC_PLATING = "HEXAVALENT_COLOR_ZINC_PLATING",
  MATTE_TIN = "MATTE_TIN",
  MILLING = "MILLING",
  NICKEL_PLATE = "NICKEL_PLATE",
  QPQ = "QPQ",
  RAW = "RAW",
  SILVER_PLATING = "SILVER_PLATING",
  SPRAYING = "SPRAYING",
  THREAD_FORMING = "THREAD_FORMING",
  TRIVALENT_COLOR_ZINC_PLATING = "TRIVALENT_COLOR_ZINC_PLATING",
  TURNING = "TURNING",
  WEDM_HS = "WEDM_HS",
  WEDM_LS = "WEDM_LS",
  WHITE_ZINC_PLATING = "WHITE_ZINC_PLATING",
  YELLOW_ZINC_PLATING = "YELLOW_ZINC_PLATING",
  ZINC_NICKEL_ALLOY_PLATING = "ZINC_NICKEL_ALLOY_PLATING",
}

export enum PoState {
  APPROVED = "APPROVED",
  CANCELLED = "CANCELLED",
  CHECKED = "CHECKED",
  CLOSED = "CLOSED",
  WAITING_FOR_APPROVEMENT = "WAITING_FOR_APPROVEMENT",
  WAITING_FOR_CHECK = "WAITING_FOR_CHECK",
}

export enum SEMI_PROCESS {
  HEAT_TREATMENT = "HEAT_TREATMENT",
  LATHE = "LATHE",
  MANUFACTURE = "MANUFACTURE",
  PLATING = "PLATING",
  ROUGHCAST = "ROUGHCAST",
}

export enum STOCK_TYPE {
  ASSEMBLE = "ASSEMBLE",
  AUTOLIV = "AUTOLIV",
  DEFECTIVE_PRODUCT = "DEFECTIVE_PRODUCT",
  FINISHED_PRODUCT = "FINISHED_PRODUCT",
  GAUGE = "GAUGE",
  INACTIVE_STOCK = "INACTIVE_STOCK",
  MACHINE = "MACHINE",
  MATERIAL = "MATERIAL",
  MFG_BUFFER = "MFG_BUFFER",
  OUTSOURCING = "OUTSOURCING",
  PACKAGE_MATERIAL = "PACKAGE_MATERIAL",
  SEMI_FINISHED_PRODUCT = "SEMI_FINISHED_PRODUCT",
  TOOLS = "TOOLS",
  UFO = "UFO",
}

export enum State {
  CHECKED = "CHECKED",
  CLOSED = "CLOSED",
  DELETED = "DELETED",
  INIT = "INIT",
  INSPECTED = "INSPECTED",
  REPORTED = "REPORTED",
}

export enum StockChangeHint {
  GENERAL_CONSUME_STOCK_OUT = "GENERAL_CONSUME_STOCK_OUT",
  MANUFACTURE_CONSUME_STOCK_OUT = "MANUFACTURE_CONSUME_STOCK_OUT",
  MANUFACTURE_RETURN_STOCK_IN = "MANUFACTURE_RETURN_STOCK_IN",
  MANUFACTURE_STOCK_IN = "MANUFACTURE_STOCK_IN",
  OPENING_STOCK_IN = "OPENING_STOCK_IN",
  OUTSOURCING_RETURN_STOCK_OUT = "OUTSOURCING_RETURN_STOCK_OUT",
  OUTSOURCING_STOCK_IN = "OUTSOURCING_STOCK_IN",
  OUTSOURCING_STOCK_OUT = "OUTSOURCING_STOCK_OUT",
  PURCHASING_RETURN_STOCK_OUT = "PURCHASING_RETURN_STOCK_OUT",
  PURCHASING_STOCK_IN = "PURCHASING_STOCK_IN",
  RE_SALE = "RE_SALE",
  SALES_RETURN_STOCK_IN = "SALES_RETURN_STOCK_IN",
  SALES_STOCK_OUT = "SALES_STOCK_OUT",
  STOCK_CHANGE_LOSS_AND_PROFIT = "STOCK_CHANGE_LOSS_AND_PROFIT",
  TRANSFER_STOCK_IN = "TRANSFER_STOCK_IN",
  TRANSFER_STOCK_OUT = "TRANSFER_STOCK_OUT",
}

export enum StockChangeType {
  CHANGE = "CHANGE",
  IN = "IN",
  OUT = "OUT",
}

export enum TOOL_TYPE {
  BEI_JIA = "BEI_JIA",
  DAO_BING = "DAO_BING",
  DAO_PIAN = "DAO_PIAN",
  DAO_TAO = "DAO_TAO",
  JIAO_DAO = "JIAO_DAO",
  JIA_TOU = "JIA_TOU",
  LIAO_JIA = "LIAO_JIA",
  PEI_JIAN = "PEI_JIAN",
  SI_GONG = "SI_GONG",
  TANG_DAO = "TANG_DAO",
  TOOL_HOLDER = "TOOL_HOLDER",
  UN_KNOWN = "UN_KNOWN",
  XI_DAO = "XI_DAO",
  ZHU_JIA = "ZHU_JIA",
  ZUAN_TOU = "ZUAN_TOU",
}

export enum TaxType {
  N = "N",
  Y = "Y",
  ZERO = "ZERO",
}

export enum UNIT {
  KG = "KG",
  L = "L",
  PCS = "PCS",
}

export interface AssetQueryInput {
  ids: string[];
}

export interface AutolivDocQueryInput {
  machineCode: string;
  dateRange?: any[] | null;
}

export interface AutolivNgHistoryQueryInput {
  machineCode?: string | null;
  dateRange?: any[] | null;
  workflowMetaId?: string | null;
}

export interface BatchQueryInput {
  customerIds: string[];
  assetId?: string | null;
  ids: string[];
  filter: any;
  dateRange: any[];
  stockId?: string | null;
  stockType?: STOCK_TYPE | null;
  heatNumber?: string | null;
  serialNumber?: string | null;
}

export interface BatchStockChangeEntryQueryInput {
  hints?: StockChangeHint[] | null;
  customerId?: string | null;
  supplierId?: string | null;
  assetType?: ASSET_TYPE | null;
  assetId?: string | null;
  dateRange: any[];
}

export interface DeliveryNoteItemQueryInput {
  ids: string[];
  productId?: string | null;
  customerOrderNumber?: string | null;
  checked?: boolean | null;
}

export interface GeneralAcctQueryInput {
  customerId?: string | null;
  supplierId?: string | null;
  checked?: boolean | null;
  dateRange: any[];
}

export interface ManufactureOrderQueryInput {
  ids: string[];
  productId?: string | null;
  dateRange: any[];
  state?: MFG_ORDER_STATE | null;
}

export interface OrderItemQueryInput {
  productIds: string[];
  isClosed?: boolean | null;
  deliveryDateRange: any[];
  customerOrderNumber: string;
}

export interface OrderQueryInput {
  orderIds: string[];
  customerIds: string[];
  customerOrderNumber: string;
  creationDateRange: any[];
  productIds: string[];
  isClosed?: boolean | null;
}

export interface OutsourcingOrderItemQueryInput {
  assetIds: string[];
  closed?: boolean | null;
  dateRange: any[];
}

export interface OutsourcingOrderQueryInput {
  ids: string[];
  assetIds: string[];
  supplierId?: string | null;
  dateRange: any[];
}

export interface POMStockChangeEntryQueryInput {
  supplierId?: string | null;
  dateRange: any[];
  assetType?: ASSET_TYPE | null;
  assetId?: string | null;
  orderId?: string | null;
  checked?: boolean | null;
}

export interface ProductQueryInput {
  productIds: string[];
  customerIds: string[];
}

export interface PurchasingOrderItemQueryInput {
  assetIds: string[];
  closed?: boolean | null;
  assetType?: ASSET_TYPE | null;
}

export interface PurchasingOrderQueryInput {
  ids: string[];
  supplierId?: string | null;
  dateRange: any[];
  assetType?: ASSET_TYPE | null;
  assetIds: string[];
}

export interface SaleStockChangeQueryInput {
  customerId: string;
  customerOrderNumber: string;
  productId?: string | null;
  dateRange: any[];
  checked?: boolean | null;
}

export interface StockCellQueryInput {
  type?: STOCK_TYPE | null;
  types: STOCK_TYPE[];
}

export interface StockChangeChecklistItemQueryInput {
  customerId?: string | null;
  supplierId?: string | null;
  assetId?: string | null;
  closed?: boolean | null;
  customerOrderNumber: string;
  dateRange: any[];
}

//==============================================================
// END Enums and Input Objects
//==============================================================
