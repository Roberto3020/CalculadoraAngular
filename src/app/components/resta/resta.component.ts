import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resta',
  templateUrl: './resta.component.html',
  styleUrls: ['./resta.component.css']
})
export class RestaComponent implements OnInit {
  numero1: number = 0;
  numero2: number = 0;
  resultado: number = 0;
  constructor() { }

  ngOnInit(): void {
  }
  calcularResta():void{
    this.resultado = this.numero1  - this.numero2
  }
}
