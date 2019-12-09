import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { AdminLayoutRoutes } from "./admin-layout.routing";
import { DashboardComponent } from "../../pages/dashboard/dashboard.component";
import { IconsComponent } from "../../pages/icons/icons.component";
import { MapComponent } from "../../pages/map/map.component";
import { NotificationsComponent } from "../../pages/notifications/notifications.component";
import { UserComponent } from "../../pages/user/user.component";
import { TablesComponent } from "../../pages/tables/tables.component";
import { TypographyComponent } from "../../pages/typography/typography.component";
// import { RtlComponent } from "../../pages/rtl/rtl.component";
// import { LandingComponent } from '../../pages/landing/landing.component';
import { ProductsComponent } from '../../pages/products/products.component';
import { CreateProductComponent } from '../../pages/create-product/create-product.component';
import { BatchHistoryComponent } from '../../pages/batch-history/batch-history.component';
import { CreateBatchComponent } from '../../pages/create-batch/create-batch.component';

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    HttpClientModule,
    NgbModule,
  ],
  declarations: [
    CreateBatchComponent,
    // LandingComponent,
    DashboardComponent,
    UserComponent,
    TablesComponent,
    IconsComponent,
    TypographyComponent,
    NotificationsComponent,
    MapComponent,
    ProductsComponent,
    CreateProductComponent,
    BatchHistoryComponent
    // RtlComponent
  ]
})
export class AdminLayoutModule {}
