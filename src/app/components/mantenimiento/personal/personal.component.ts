import { Component, OnInit } from '@angular/core';
import { PersonalService } from 'src/app/providers/personal.service';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.css']
})
export class PersonalComponent implements OnInit {
  public nombres = '';
  public apellidoPaterno = '';
  public apellidoMaterno = '';
  public apellidosConcatenados = '';
  public noExiste = false;
  public mensajeError = '';
  constructor(private personalService: PersonalService) { }

  ngOnInit(): void {
  }

  buscarPersonal(dni: string){
    if (dni.length === 8) {
      this.personalService.getPersonaPorDni(dni)
      .subscribe( (resp: any) =>
        {
          console.log(resp);
          if (resp.success === false) {
            this.nombres = '';
            this.apellidosConcatenados = '';
            this.noExiste = true;
            this.mensajeError = resp.message;
          }else{
            this.noExiste = false;
            this.nombres = resp.nombres;
            this.apellidoPaterno = resp.apellidoPaterno;
            this.apellidoMaterno = resp.apellidoMaterno;
            this.apellidosConcatenados = `${this.apellidoPaterno} ${this.apellidoMaterno}`
          }
        }
        );
    }

  }

}
