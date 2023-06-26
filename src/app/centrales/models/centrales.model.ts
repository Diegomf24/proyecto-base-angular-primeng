import {Provincia} from "./provincia.model";
import {Tipo} from "./tipo.model";

export interface Centrales {
  id:            number;
  tipo:          Tipo;
  latitud:       string;
  longitud:      string;
  descripcion:   string;
  imagen:        string;
  potencia:      number;
  provincia:     Provincia;
  activa:        boolean;
  inicio:        Date;
  fin:           null;
  observaciones: null;
}



