import { PaisesService } from './../../services/paises.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [],
})
export class VerPaisComponent implements OnInit {
  constructor(
    private activatedRoute: ActivatedRoute,
    private paisesService: PaisesService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(switchMap(({ id }) => this.paisesService.getPaisPorAlpha(id)))
      .subscribe((res) => console.log(res));

    /*  this.activatedRoute.params.subscribe(({ id }) => {
      console.log(id);
      this.paisesService.getPaisPorAlpha(id).subscribe((pais) => {
        console.log(pais);
      });
    }); */
  }
}
