import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private pokemonSource = new BehaviorSubject<any[]>([]);
  selectedPokemon$ = this.pokemonSource.asObservable();

  constructor() { }

  setPokemonDetails(details: any) {
    this.pokemonSource.next(details);
    localStorage.setItem('pokemonDetails', JSON.stringify(details)); // Guardar en localStorage

  }

  loadPokemonDetails() {
    const savedDetails = localStorage.getItem('pokemonDetails');
    if (savedDetails) {
      this.pokemonSource.next(JSON.parse(savedDetails)); // Recuperar desde localStorage
    }
  }
}
