import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiPokemonService {

  private apiUrl = 'https://pokeapi.co/api/v2/pokemon/001';
  constructor(private http: HttpClient) { }
}
