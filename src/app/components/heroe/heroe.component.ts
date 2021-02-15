import { Component} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Heroe } from 'src/app/models/heroes.model';
import { HeroesService } from '../../providers/heroes.services';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: [
  ]
})
export class HeroeComponent {
  heroe: any = {};
  constructor(private activatedRouter: ActivatedRoute,
              private heroeService: HeroesService) {
    this.activatedRouter.params.subscribe(params => {
      this.heroe = this.heroeService.getHeroe(params.id);
    });
   }

}
