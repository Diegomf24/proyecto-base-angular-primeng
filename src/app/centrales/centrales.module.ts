import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageCentralesComponent } from './components/page-centrales/page-centrales.component';
import {PrimengModule} from "../primeng/primeng.module";
import {ProgressBarModule} from "primeng/progressbar";
import {HttpClientModule} from "@angular/common/http";



@NgModule({
  declarations: [
    PageCentralesComponent
  ],
  imports: [
    CommonModule,
    PrimengModule,
    ProgressBarModule,
    HttpClientModule
  ]
})
export class CentralesModule { }
