import {Component, OnInit} from '@angular/core';
import {Usuario} from "../../../shared/models/usuario.model";
import {UsuariosService} from "../../../shared/services/usuarios.service";
import {HttpErrorResponse} from "@angular/common/http";
import {Message, MessageService, PrimeIcons} from "primeng/api";

@Component({
  selector: 'app-page-usuarios',
  templateUrl: './page-usuarios.component.html',
  styleUrls: ['./page-usuarios.component.css'],
  providers: [MessageService]
})
export class PageUsuariosComponent implements OnInit{
  public usuarios: Usuario[];
  public chargedUsers: boolean;
  constructor(
    private usuariosService: UsuariosService,
    private mensajeService: MessageService
  ) {
    this.usuarios = [];
    this.chargedUsers = false;
  }

  ngOnInit() {
    this.chargeUsers();
  }

  public chargeUsers() {
    this.chargedUsers = true;
    this.usuariosService.getAllUsers().subscribe(
      {
        next: (datos: Usuario[]) => {
          console.log(" todo bien ,han llegado los datos", datos);
          this.usuarios = datos;
          this.chargedUsers = false;
        },
        error: (error: HttpErrorResponse) => {
          console.error("Ha ocurrido un error", error);
        }
      }
    );
  }

  public deleteUser(usuario: Usuario) {
    this.usuariosService.deleteUser(usuario).subscribe(
      {
        next: (datos: Usuario) => {
          const mensaje: Message = {
            summary: "Borrar",
            detail: "Usuario borrado satisfactoriamente",
            severity: "success"
          };
          this.mensajeService.add(mensaje);
        },
        error: (borradoNo: HttpErrorResponse) => {
          const mensaje: Message = {
            summary: "Borrar",
            detail: "Hubo un error al borrar" + borradoNo.message,
            severity: "error"
          };
          this.mensajeService.add(mensaje);
          console.error("Hubo un error al borrar", borradoNo);
        }
      }
    )
  }

}
