import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-division',
  templateUrl: './division.component.html',
  styleUrls: ['./division.component.css']
})
export class DivisionComponent implements OnInit {
  numero1: number = 0;
  numero2: number = 0;
  resultado: number = 0;
  constructor() { }

  ngOnInit(): void {
  }
  calcularDivision():void{
    this.resultado = this.numero1  / this.numero2
  }
}
