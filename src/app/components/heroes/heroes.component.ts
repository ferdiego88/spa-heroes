import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../providers/heroes.services';
import { Heroe } from '../../models/heroes.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html'
})
export class HeroesComponent implements OnInit {
  heroes: Heroe[] = [];
  constructor(private heroesService: HeroesService,
              private router: Router) {
    // console.log('constructor');

  }

  ngOnInit(): void {
    // console.log('ng OnInit');
    this.heroes = this.heroesService.getHeroes();
    // console.log(this.heroes);
  }

  showHeroe(indice: number): void{
    this.router.navigate(['heroe', indice]);
  }

}
