import { Component, OnInit } from "@angular/core";

declare interface RouteInfo {
  path: string;
  title: string;
  rtlTitle: string;
  icon: string;
  class: string;
}
export const ROUTES: RouteInfo[] = [
  {
    path: "/dashboard",
    title: "Dashboard",
    rtlTitle: "لوحة القيادة",
    icon: "icon-chart-pie-36",
    class: ""
  },
  // {
  //   path: "/user",
  //   title: "User",
  //   rtlTitle: "ملف تعريفي للمستخدم",
  //   icon: "icon-single-02",
  //   class: ""
  // },
  // {
  //   path: "/tables",
  //   title: "tables",
  //   rtlTitle: "قائمة الجدول",
  //   icon: "icon-basket-simple",
  //   class: ""
  // },
  // {
  //   path: "/icons",
  //   title: "Icons",
  //   rtlTitle: "الرموز",
  //   icon: "icon-atom",
  //   class: ""
  // },
  {
    path: "/create-product",
    title: "create-product",
  rtlTitle: "لوحة القيادة",
    icon: "icon-simple-add",
    class: ""
  },
 
  {
    path: "/products",
    title: "products",
    rtlTitle: "لوحة القيادة",
    icon: "icon-basket-simple",
    class: ""
  },
  
  {
    path: "/batch-history",
    title: "batch-history",
    rtlTitle: "لوحة القيادة",
    icon: "icon-bullet-list-67",
    class: ""
  },


  // {
  //   path: "/maps",
  //   title: "Maps",
  //   rtlTitle: "خرائط",
  //   icon: "icon-pin",
  //   class: "" },
  // {
  //   path: "/notifications",
  //   title: "Notifications",
  //   rtlTitle: "إخطارات",
  //   icon: "icon-bell-55",
  //   class: ""
  // },

 
 
  // {
  //   path: "/typography",
  //   title: "Typography",
  //   rtlTitle: "طباعة",
  //   icon: "icon-align-center",
  //   class: ""
  // },
  // {
  //   path: "/rtl",
  //   title: "RTL Support",
  //   rtlTitle: "ار تي ال",
  //   icon: "icon-world",
  //   class: ""
  // }
];

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.css"]
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() {}

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
    if (window.innerWidth > 991) {
      return false;
    }
    return true;
  }
}
