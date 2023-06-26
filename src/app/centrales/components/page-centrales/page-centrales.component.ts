import {Component, OnInit} from '@angular/core';
import {Usuario} from "../../../shared/models/usuario.model";
import {Centrales} from "../../models/centrales.model";
import {CentralesService} from "../../services/centrales.service";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-page-centrales',
  templateUrl: './page-centrales.component.html',
  styleUrls: ['./page-centrales.component.css']
})
export class PageCentralesComponent implements OnInit{

  public centrales: Centrales[];
  public chargedCentrals: boolean;

  constructor(private centralesService: CentralesService) {
    this.centrales = [];
    this.chargedCentrals = false;
  }

  ngOnInit(): void {
    this.chargeCentrals();
  }

  public chargeCentrals() {
    this.chargedCentrals = true;
    this.centralesService.getAllCentrals().subscribe(
      {
        next: (centrales: Centrales[]) => {
          console.log("Han llegado a tiempo los datos", centrales)
          this.centrales = centrales;
          this.chargedCentrals = false;
        },
        error: (errorMalo: HttpErrorResponse) => {
          console.error("Ha ocurrido un error" , errorMalo)
        }
      }
    )
  }

}
