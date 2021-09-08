import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-suma',
  templateUrl: './suma.component.html',
  styleUrls: ['./suma.component.css']
})
export class SumaComponent  {
  numero1: number = 0;
  numero2: number = 0;
  resultado: number = 0;
  constructor() { }

  calcularSuma():void{
    this.resultado = this.numero1 +this.numero2
  }


}
