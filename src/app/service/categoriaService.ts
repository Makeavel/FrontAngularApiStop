import { throwError , Observable } from "rxjs";
import { retry, catchError } from 'rxjs/operators';
import { categorias } from "../model/categorias";
import { HttpClient, HttpErrorResponse, HttpHandler, HttpHeaders } from '@angular/common/http';

export class categoriaService{

    url = "https://apistop.herokuapp.com/";

    constructor(private httpClient: HttpClient){}

    httpOptions = {
        headers: new HttpHeaders({'Content-Type': 'application/json'})
    }

    getCategoriaByLetra(letra: string): Observable<categorias>{
        return this.httpClient.get<categorias>(this.url + 'api/stop/caractere/' + letra)
        .pipe(
            retry(2)
        )
    }


}