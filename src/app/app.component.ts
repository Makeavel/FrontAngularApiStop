import { Component, OnInit } from '@angular/core';
import { Categorias } from './model/categorias';
import { categoriaService } from './service/categoria.service';

@Component({
  selector: 'app-root',
  templateUrl: './stopIndex.html',
  styleUrls: ['styles.css']
})
export class AppComponent implements OnInit {
  title = 'FrontAngularApiStop';

  constructor(private CategoriaService: categoriaService){}

  categoria = {} as Categorias;
  categorias = [] as Categorias[];

  ngOnInit() {
    this.getBuscaCategoria();
  }

  getBuscaCategoria(){
    if(this.categoria.letra !== undefined){
      this.CategoriaService.getBuscaCategoria(this.categoria.letra).subscribe((categorias: Categorias[])=>
      {this.categorias = categorias});
    }
  }

}
