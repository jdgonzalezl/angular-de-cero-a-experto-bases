import { Injectable } from "@angular/core";
import { Personaje } from "../interfaces/dbz.interface";

@Injectable()
export class DbzService{
   
   private  _personajes: Personaje[] = [{
        nombre : 'Goku',
        poder:15000
      },
    {
      nombre : 'Vegueta',
      poder : 7500
    }];

get personajes(){
    return [...this._personajes] //para rompler la referencia y regresar copia del arreglo
}

    constructor(){
        //console.log("servicio inicializao");
    }

    public agregarPersonaje(personaje: Personaje) : void{
        this._personajes.push(personaje);
    }
    

}