import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercicio3',
  templateUrl: './exercicio3.component.html',
  styleUrls: ['./exercicio3.component.css']
})
export class Exercicio3Component implements OnInit {

contador : number = 0;
valor = [];

  constructor() { }

  ngOnInit() {
  }
onClick()
{
  this.contador ++;
  this.valor.push(this.contador)
}
}