import { Component } from "@angular/core";

@Component({
    selector: 'app-contador',
    template: `
        <h1>{{titulo}}</h1>
        <h3>La base es: <strong>{{base}}</strong></h3>

        <h4>Modificar Base </h4>
        <button (click)="acumular(1, 'base');">+ 1</button>
        <span>{{base}}</span>
        <button (click)="acumular(-1, 'base');">- 1</button>

        <h4>Operación</h4>

        <button (click)="acumular(this.base, 'numero');">+ {{base}}</button>
        <span>{{numero}}</span>
        <button (click)="acumular(this.base * -1, 'numero');">- {{base}}</button>
            
    `
})


export class contadorComponent{
  public  titulo : string = 'Contador App';
  public numero: number = 10;
  public base: number =5;

  public acumular(valor:number, tipo:string){
    if (tipo == 'numero'){
      this.numero += valor;
    }
    else if (tipo == 'base'){
      this.base += valor;
    }
  }
}