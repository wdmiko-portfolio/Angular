import { CommonModule } from '@angular/common';
import { Component, NgModule, OnInit } from '@angular/core';
import { PokemonApiService } from '../../../z-services/pokemon-api.service';
interface Pokemon {
  id:number;
  name: string;
  sprite: string;
  types: string;
}

@Component({
  selector: 'app-pokedex-grid',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pokedex-grid.component.html',
  styleUrls: ['./pokedex-grid.component.css']
})
export class PokedexGridComponent implements OnInit {
  pokemons: any[] = [];
  newpokemons: any[]=[];
  limit = 12;
  offset = 0;

  constructor(private pokemonService: PokemonApiService) { }

  ngOnInit(): void {
    this.loadPokemons();
  }

  loadPokemons(): void {
    this.pokemonService.getPokemons(this.limit, this.offset).subscribe((response: any) => {
      // Almacena los Pokémon actuales y los nuevos en una variable temporal
      const newPokemons: Pokemon[] = [];

      response.results.forEach((result: any) => {
        this.pokemonService.getPokemonDetails(result.name).subscribe((details: any) => {
          const pokemon: Pokemon = {
            id: details.id.toString().padStart(3, '0'),
            name: details.name,
            sprite: details.sprites.front_default,
            types: details.types
          };
          newPokemons.push(pokemon);

          // update pokemons
          if (newPokemons.length === response.results.length) {
            this.newpokemons=newPokemons;
            this.sortPokemons();
            this.pokemons = [...this.pokemons, ...this.newpokemons];

          }
        });
      });
    });
  }

  sortPokemons(): void {
    this.newpokemons.sort((a, b) => a.id - b.id); // Order by id
  }
  showMore(): void {
    this.offset += this.limit;
    this.loadPokemons();
  }
}

