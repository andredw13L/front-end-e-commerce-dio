import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Livro } from "./model/livro";

@Injectable ()


export class LivrosService {

    private url =  'https://localhost:44382/api/livraria';

    httpOptions = {
        Headers: new HttpHeaders({'content-type': 'application/json'})
    }

    constructor(private httpClient: HttpClient) {}

    getLivro() {
        return this.httpClient.get(this.url);
    }

}