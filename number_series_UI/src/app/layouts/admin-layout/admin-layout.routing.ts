import { Routes } from "@angular/router";

import { DashboardComponent } from "../../pages/dashboard/dashboard.component";
import { IconsComponent } from "../../pages/icons/icons.component";
import { MapComponent } from "../../pages/map/map.component";
import { NotificationsComponent } from "../../pages/notifications/notifications.component";
import { UserComponent } from "../../pages/user/user.component";
import { TablesComponent } from "../../pages/tables/tables.component";
import { TypographyComponent } from "../../pages/typography/typography.component";
import { ProductsComponent } from "../../pages/products/products.component";
import { CreateProductComponent } from '../../pages/create-product/create-product.component';
import { BatchHistoryComponent } from '../../pages/batch-history/batch-history.component';
// import { RtlComponent } from "../../pages/rtl/rtl.component";
import { CreateBatchComponent } from '../../pages/create-batch/create-batch.component';

export const AdminLayoutRoutes: Routes = [
  { path: "dashboard", component: DashboardComponent },
  { path: "icons", component: IconsComponent },
  { path: "maps", component: MapComponent },
  { path: "notifications", component: NotificationsComponent },
  { path: "user", component: UserComponent },
  { path: "tables", component: TablesComponent },
  { path: "typography", component: TypographyComponent },
  { path: "products", component: ProductsComponent },
  { path: "products/batch/:id", component: CreateBatchComponent },
  { path: "create-product", component: CreateProductComponent },
  { path: "batch-history", component: BatchHistoryComponent }
  // { path: "rtl", component: RtlComponent }
];
