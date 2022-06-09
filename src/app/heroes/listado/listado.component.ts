import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent  {
  public heroes: string[] = ['Spiderman','Ironman','Chapulin Colorado','Kaliman']
  public heroeBorrado: string = '';


  public BorrarHeroe() :  void{
    this.heroeBorrado = this.heroes.shift() || '';
  }
 
}
