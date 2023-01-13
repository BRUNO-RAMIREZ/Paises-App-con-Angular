import { Component } from '@angular/core';
import { PaisesService } from '../../services/paises.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [],
})
export class PorPaisComponent {
  termino: string = '';
  hayError: boolean = false;

  constructor(private paisesService: PaisesService) {}

  buscar(): void {
    this.hayError = false;
    console.log('Buscando ', this.termino);
    this.paisesService.buscarPais(this.termino).subscribe(
      (res) => {
        console.log(res);
      },
      (err) => {
        this.hayError = true;
      }
    );
  }
}
