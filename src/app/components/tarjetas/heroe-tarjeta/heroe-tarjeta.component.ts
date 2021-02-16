import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Heroe } from '../../../models/heroes.model';

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html',
  styles: [
  ]
})
export class HeroeTarjetaComponent implements OnInit {
  @Input() heroe!: Heroe;
  @Input() indice = 0;
  constructor(public router: Router ) { }

  ngOnInit(): void {
  }

  verHeroe(): void{
    // console.log(this.indice);
    this.router.navigate(['heroe', this.indice]);
  }
}
