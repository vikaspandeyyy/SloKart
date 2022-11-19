// import CRMCustomerImg from "./CRMCustomer.png";
// import BIInsightImg from "./BIInsight.png";
import InventoryReturns from "./INVENTORY/Returns.js";
// import LogisticRoutesImg from "./LogisticRoutes.png";
// import LogisticScheduleImg from "./LogisticSchedule.png";
// import BIStrategiesImg from "./BIStrategies.png";
// import AccountingInvoiceImg from "./Accounting Invoice.png";
// import DropShipDocumentsImg from "./DropShipDocuments.png";
// import DropShipInvoiceImg from "./DropShipInvoice.png";
// import DropShipProductImg from "./DropShipProduct.png";
import LogisticsDashboard from "./Logistics/LogisticsDashboard";
// import DropShipSupplierImg from "./DropShipSupplier.png";
// import DropShipTruckImg from "./DropShipTruck.png";
// import CRMCampaignImg from "./CRMCampaign.png";
// import HREmployeeImg from "./HREmployee.png";
// import HRPayrollImg from "./HRPayroll.png";
// import HRRecruitmentImg from "./HRRecruitment.png";
// import HRTeamsImg from "./HRTeams.png";
// import wmsupplierimg from "./WMSuppliers.png";
// import wmproductimg from "./WMProducts.png";
// import dashboardImg from "./dashboard.png";
// import orderListImg from "./order list.png";
// import purchaseImg from "./purchase.png";
// import returnsImg from "./returns.png";
import OMSOrderList from "./OMS order list";
import OMSPurchaseList from "./OMS Purchase";
import InventoryStockList from "./InventoryStockList";
import OMSReturns from "./OMSReturns";
import OMSMarketPlace from "./OMSMarketPlace";
import InventoryPurchase from "./InventoryPurchase";
import HRDashboard from "./HR/HRDashboard.js";
import OMSDashboard from "./OMS/OMSDashboard";
import InventoryDashboard from "./INVENTORY/InventoryDashboard";
import WarehouseDashboard from "./WAREHOUSE/WarehouseDashboard";
import DropshippingDashboard from "./DROPSHIPPING/DropshippingDashboard";
import CRMDashboard from "./CRM/CRMDashboard";
import HREmployee from "./HR/HREmployee";
import HRTeams from "./HR/HRTeams";
import HRPayroll from "./HR/HRPayroll";
import HRRecruitment from "./HR/HRRecruitment";
import WarehouseProducts from "./WAREHOUSE/Products.js";
import WarehouseSuppliers from "./WAREHOUSE/Suppliers.js";
import FinanceDashBoard from "./FINANCE/FinanceDashboard";
import FinanaceExpenditute from "./FINANCE/Expenditure";
import BIinsightsData from './BI/BIinsightsData'
import BIDashboard from './BI/BIDashboard';
import BIstrastegies from './BI/BIstrastegies'

const OMSSubbarData = [
  {
    click: OMSDashboard,
    // img: dashboardImg,
    name: "Dashboard",
  },
  {
    click: OMSOrderList,
    // img: orderListImg,
    name: "Order List",
  },
  {
    click: OMSPurchaseList,
    // img: purchaseImg,
    name: "Purchase",
  },
  {
    click: OMSReturns,
    // img: returnsImg,
    name: "Returns",
  },
  {
    click: OMSMarketPlace,
    // img: wmsupplierimg,
    name: "Marketplace",
  },
];

const InventorySubbarData = [
  {
    click: InventoryDashboard,
    // img: dashboardImg,
    name: "Dashboard",
  },
  {
    click: InventoryStockList,
    // img: orderListImg,
    name: "Stock List",
  },
  {
    click: InventoryPurchase,
    // img: purchaseImg,
    name: "Purchase",
  },
  {
    click: InventoryReturns,
    // img: returnsImg,
    name: "Returns",
  },
];

const WarehouseSubbarData = [
  {
    click: WarehouseDashboard,
    // img: dashboardImg,
    name: "Dashboard",
  },
  {
    click: "",
    //  img: orderListImg,
    name: "Warehouse Details",
  },
  {
    click: WarehouseProducts,
    // img: wmproductimg,
    name: "Products",
  },
  {
    click: WarehouseSuppliers,
    //  img: wmsupplierimg,
    name: "Suppliers",
  },
];
const HRSubbarData = [
  {
    click: HRDashboard,
    // img: dashboardImg,
    name: "Dashboard",
  },
  {
    click: HREmployee,
    //  img: HREmployeeImg,
    name: "Employees",
  },
  {
    click: HRTeams,
    //  img: HRTeamsImg,
    name: "Teams",
  },
  {
    click: HRPayroll,
    //  img: HRPayrollImg,
    name: "Payroll",
  },
  {
    click: HRRecruitment,
    // img: HRRecruitmentImg,
    name: "Recruitment",
  },
];
const CRMSubbarData = [
  {
    click: CRMDashboard,
    // img: dashboardImg,
    name: "Dashboard",
  },
  {
    click: "",
    // img: CRMCampaignImg,
    name: "Campaigns",
  },
  {
    click: "",
    // img: CRMCustomerImg,
    name: "Customers",
  },
  {
    click: "",
    // img: HRTeamsImg,
    name: "Teams",
  },
];
const DropShipSubbarData = [
  {
    click: DropshippingDashboard,
    // img: dashboardImg,
    name: "Dashboard",
  },
  { click: "", 
  // img: DropShipProductImg,
   name: "Products" },
  { click: "",
  //  img: DropShipTruckImg,
    name: "Shipments" },
  { click: "", 
  // img: wmproductimg,
   name: "Customers" },
  { click: "",
  //  img: DropShipSupplierImg,
    name: "Suppliers" },
  { click: "",
  //  img: DropShipDocumentsImg,
    name: "Documents" },
  { click: "",
  //  img: DropShipInvoiceImg,
    name: "Invoices" },
];
const FinanceSubbarData = [
  { click: FinanceDashBoard, 
    // img: dashboardImg,
     name: "Dashboard" },
  { click: FinanaceExpenditute,
    //  img: orderListImg, 
     name: "Expenditure" },
];


const AccountingSubbarData = [
  { click: "", 
  // img: dashboardImg, 
  name: "Dashboard" },
  { click: "", 
  // img: "",
   name: "Accounts" },
  { click: "",
  //  img: AccountingInvoiceImg,
    name: "Invoices" },
];
const BISubbarData = [
  {
     click: BIDashboard,
  //  img: dashboardImg,
    name: "Dashboard" 
  },
  { click: BIinsightsData,
  //  img: BIInsightImg, 
   name: "Insights" },
  { click: BIstrastegies,
  //  img: BIStrategiesImg,
    name: "Strategies" },
];
const LogisticSubbarData = [
  { click: LogisticsDashboard,
    //  img: dashboardImg,
      name: "Dashboard" },
  { click: "",
  //  img: AccountingInvoiceImg,
    name: "Payments" },
  { click: "", 
  // img: LogisticRoutesImg,
   name: "Routes" },
  { click: "",
  //  img: LogisticScheduleImg,
    name: "Schedule" },
  { click: "",
  //  img: wmsupplierimg,
    name: "Shipment Management" },
];
export { OMSSubbarData };
export { InventorySubbarData };
export { WarehouseSubbarData };
export { HRSubbarData };
export { CRMSubbarData };
export { DropShipSubbarData };
export { FinanceSubbarData };
export { AccountingSubbarData };
export { BISubbarData };
export { LogisticSubbarData };
