import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Componentes
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { HeroesComponent } from './components/heroes/heroes.component';

// Routes
import { FeatureRoutingModule} from './app.routes';

// Providers
import { HeroesService } from './providers/heroes.services';
import { HeroeComponent } from './components/heroe/heroe.component';
import { BuscarheroeComponent } from './components/buscarheroe/buscarheroe.component';
import { HeroeTarjetaComponent } from './components/tarjetas/heroe-tarjeta/heroe-tarjeta.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    HeroesComponent,
    HeroeComponent,
    BuscarheroeComponent,
    HeroeTarjetaComponent
  ],
  imports: [
    BrowserModule,
    FeatureRoutingModule
  ],
  providers: [
    HeroesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
