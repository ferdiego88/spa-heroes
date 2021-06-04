import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../providers/heroes.services';
import { Heroe } from '../../models/heroes.model';
import { Router } from '@angular/router';
import { PersonalService } from 'src/app/providers/personal.service';
import { ClassGetter } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html'
})
export class HeroesComponent implements OnInit {
  heroes: Heroe[] = [];
  constructor(private heroesService: HeroesService,
              private router: Router,
              private personaService: PersonalService) {
    // console.log('constructor');

  }

  ngOnInit(): void {
    // console.log('ng OnInit');
    this.heroes = this.heroesService.getHeroes();
    this.verPersona();
    // console.log(this.heroes);
  }

  showHeroe(indice: number): void{
    this.router.navigate(['heroe', indice]);
  }

  verPersona(){
    this.personaService.getPersonaPorDni('45299668').subscribe(resp=> console.log(resp));
  }

}
