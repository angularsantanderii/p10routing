import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-inicio-ventas',
  templateUrl: './inicio-ventas.component.html',
  styleUrls: ['./inicio-ventas.component.css']
})
export class InicioVentasComponent implements OnInit {

  titulo: string = '';

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    // El objeto data es devuelto como observable (RxJS)
    this.activatedRoute.data.subscribe(data => this.titulo = data['titulo']);
  }

}
