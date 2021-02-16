import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { HeroesService } from '../../providers/heroes.services';
import { Heroe } from '../../models/heroes.model';

@Component({
  selector: 'app-buscarheroe',
  templateUrl: './buscarheroe.component.html',
  styles: [
  ]
})
export class BuscarheroeComponent implements OnInit {
  heroes: Heroe[] = [];
  termino = '';
  constructor(private activatedRoute: ActivatedRoute,
              public router: Router,
              public heroesService: HeroesService)
  {
   }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(param => {
      this.heroes = this.heroesService.buscarHeroes(param.termino);
      this.termino = param.termino;
      console.log(this.heroes);
     });
  }

  showHeroe(indice: number): void{
    this.router.navigate(['heroe', indice]);
  }
}
