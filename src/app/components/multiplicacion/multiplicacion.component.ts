import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-multiplicacion',
  templateUrl: './multiplicacion.component.html',
  styleUrls: ['./multiplicacion.component.css']
})
export class MultiplicacionComponent implements OnInit {
  numero1: number = 0;
  numero2: number = 0;
  resultado: number = 0;
  constructor() { }

  ngOnInit(): void {
  }
  calcularMultiplicacion():void{
    this.resultado = this.numero1  * this.numero2
  }
}
