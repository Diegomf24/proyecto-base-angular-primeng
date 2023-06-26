import { NgModule } from '@angular/core';

import {RippleModule} from "primeng/ripple";
import {MenubarModule} from "primeng/menubar";
import {ButtonModule} from "primeng/button";
import {ToastModule} from "primeng/toast";
import {DialogModule} from "primeng/dialog";
import {CardModule} from "primeng/card";
import {TableModule} from "primeng/table";
import {ProgressBar} from "primeng/progressbar";
import {TagModule} from "primeng/tag";



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
    TagModule
  ]


})
export class PrimengModule { }
