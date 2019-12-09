import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { Routes, RouterModule } from "@angular/router";

import { AdminLayoutComponent } from "./layouts/admin-layout/admin-layout.component";
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { ProductsComponent } from './pages/products/products.component';
// import { CreateProductComponent } from './pages/create-product/create-product.component';
// import { BatchHistoryComponent } from './pages/batch-history/batch-history.component';
// import { CreateProductComponent } from './pages/create-product/create-product.component';
// import { BatchHistoryComponent } from './pages/batch-history/batch-history.component';
import { LandingComponent } from './pages/landing/landing.component';
import { CreateBatchComponent } from './pages/create-batch/create-batch.component';

const routes: Routes = [
  {
    path: "",
    redirectTo: "landing",
    pathMatch: "full"
  },

  // {
  //   path: "products",
  //   component: ProductsComponent,
  //   pathMatch: "full"
  // },

  // {
  //   path: "create-product",
  //   component: CreateProductComponent,
  //   pathMatch: "full"
  // },

  // {
  //   path: "batch-history",
  //   component: BatchHistoryComponent,
  //   pathMatch: "full"
  // },


  {
    path: "",
    component: AdminLayoutComponent,
    children: [
      {
        path: "",
        loadChildren:
          "./layouts/admin-layout/admin-layout.module#AdminLayoutModule"
      }
    ]
  }, {
    path: '',
    component: AuthLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: './layouts/auth-layout/auth-layout.module#AuthLayoutModule'
      }
    ]
  },
  {
    path: "**",
    redirectTo: "landing"
  },
  {
    path: "landing",
    component: LandingComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes, {
      useHash: true
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

export const routingComponents = [
  ProductsComponent,
  // CreateProductComponent,
  // BatchHistoryComponent
]
