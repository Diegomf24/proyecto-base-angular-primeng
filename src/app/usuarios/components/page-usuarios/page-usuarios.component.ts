import { Component } from '@angular/core';
import {Usuario} from "../../../shared/models/usuario.model";

@Component({
  selector: 'app-page-usuarios',
  templateUrl: './page-usuarios.component.html',
  styleUrls: ['./page-usuarios.component.css']
})
export class PageUsuariosComponent {
  public usuarios: Usuario;
}
