import { NgModule } from '@angular/core';

import {RippleModule} from "primeng/ripple";
import {MenubarModule} from "primeng/menubar";
import {ButtonModule} from "primeng/button";
import {ToastModule} from "primeng/toast";
import {DialogModule} from "primeng/dialog";
import {CardModule} from "primeng/card";
import {TableModule} from "primeng/table";



@NgModule({

  // Aquí solo exportaciones!!!!

  exports: [
    ButtonModule,
    CardModule,
    DialogModule,
    RippleModule,
    MenubarModule,
    ToastModule,
    TableModule,
  ]


})
export class PrimengModule { }
