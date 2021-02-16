import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
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
  @Input() indice: number | undefined;
  @Output() heroeSeleccionado: EventEmitter<number>;
  constructor(public router: Router ) {
   this.heroeSeleccionado = new EventEmitter();
  }

  ngOnInit(): void {
  }

  verHeroe(): void{
    // console.log(this.indice);
    // this.router.navigate(['heroe', this.indice]);
    this.heroeSeleccionado.emit(this.indice);
  }
}
