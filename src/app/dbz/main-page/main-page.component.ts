import { Component, OnInit } from '@angular/core';

import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent  {


  nuevo : Personaje ={
      nombre: '',
      poder:0
  }

  /*
  get personajes(): Personaje[]{
    return this.dbzService.personajes;
  }

  public agregarNuevoPersonaje (nuevoPersonaje : Personaje) : void{
    this.personajes.push(nuevoPersonaje)
  }

  constructor(private dbzService: DbzService){
  }
  */
  

  
}
