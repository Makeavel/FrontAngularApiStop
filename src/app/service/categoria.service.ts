import { throwError , Observable } from "rxjs";
import { retry, catchError } from 'rxjs/operators';
import { categorias } from "../model/categorias";
import { HttpClient, HttpErrorResponse, HttpHandler, HttpHeaders } from '@angular/common/http';

export class categoriaService{

    url = "https://apistop.herokuapp.com/api/stop";

    constructor(private httpClient: HttpClient){}

    //header
    httpOptions = {
        headers: new HttpHeaders({'Content-Type': 'application/json'})
    }

    //adicionar
    getAddCategoriaByLetra(categorias: categorias): Observable<categorias>{
        return this.httpClient.post<categorias>(this.url + '/create/', JSON.stringify(categorias), this.httpOptions)
        .pipe(
            retry(2)
        )
    }

    //busca por ID
    getBuscaCategoria(letra: string):Observable<categorias>{
        return this.httpClient.get<categorias>(this.url + '/caracter/' + letra)
        .pipe(
            retry(2) //, catchError(this.handleError)
        )
    }


}