import { throwError , Observable } from "rxjs";
import { retry, catchError } from 'rxjs/operators';
import { categorias } from "../model/categorias";
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class categoriaService{


    //url = "https://apistop.herokuapp.com/api/stop";
    url = "http://localhost:8080/api/stop";


    constructor(private httpClient: HttpClient){}

    //header
    httpOptions = {
        headers: new HttpHeaders({'Content-Type': 'application/json'})
    }


    //adicionar
    getAddCategoriaByLetra(categorias: categorias): Observable<categorias>{
        return this.httpClient.post<categorias>(this.url + '/create/', JSON.stringify(categorias), this.httpOptions)
        .pipe(
            retry(2),
            catchError(this.handleError)
        )
    }

    //busca por ID
    getBuscaCategoria(letra: string):Observable<categorias>{
        return this.httpClient.get<categorias>(this.url + '/caracter/' + letra, this.httpOptions)
        .pipe(
            retry(2),
            catchError(this.handleError)
        )
    }


    //Causa de erro
   handleError(error: HttpErrorResponse){
    let errorMessage = '';
    if(error.error instanceof ErrorEvent){
        errorMessage = error.error.message;
    }
    else{
        errorMessage = `Código de erro: ${error.status}, ` + `menssagem: ${error.message}`;
    }
        console.log(errorMessage);
    return throwError(errorMessage);
   }

}