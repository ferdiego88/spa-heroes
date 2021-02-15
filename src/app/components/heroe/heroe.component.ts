import { Component} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Heroe } from 'src/app/models/heroes.model';
import { HeroesService } from '../../providers/heroes.services';
import { Variables } from '../../variables/variables';
@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: [
  ]
})
export class HeroeComponent {
  heroe!: Heroe;
  dc = Variables.casas.DC;
  marvel = Variables.casas.Marvel;
  constructor(private activatedRouter: ActivatedRoute,
              private router: Router,
              private heroeService: HeroesService) {
    this.activatedRouter.params.subscribe(params => {
      this.heroe = this.heroeService.getHeroe(params.id);
    });
   }

   goHome(){
     this.router.navigate(['/heroes']);
   }
}
