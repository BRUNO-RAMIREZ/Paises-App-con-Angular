import { Component } from '@angular/core';
import { PaisesService } from '../../services/paises.service';
import { Pais } from '../../interfaces/paises.interface';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [],
})
export class PorCapitalComponent {
  termino: string = '';
  hayError: boolean = false;
  paises: Pais[] = [];

  constructor(private paisesService: PaisesService) {}

  buscar(termino: string): void {
    this.hayError = false;
    this.termino = termino;
    this.paisesService.buscarCapital(termino).subscribe(
      (paises) => {
        this.paises = paises;
      },
      (err) => {
        this.hayError = true;
        this.paises = [];
      }
    );
  }
}
