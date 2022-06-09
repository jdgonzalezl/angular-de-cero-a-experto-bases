import { Component, Input, OnInit } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent  {

    constructor(private DbzService:DbzService){
      
    }

   //  @Input()  personajes:Personaje[]  = [] ya no se usa como entrada al componente, ahora se toma del servicio
    get personajes(){
      return this.DbzService.personajes;
    }



}
