import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../providers/heroes.services';
import { Heroe } from '../../models/heroes.model';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html'
})
export class HeroesComponent implements OnInit {
  heroes: Heroe[] = [];
  constructor(private heroesService: HeroesService) {
    // console.log('constructor');

  }

  ngOnInit(): void {
    // console.log('ng OnInit');
    this.heroes = this.heroesService.getHeroes();
    console.log(this.heroes);
  }

}
