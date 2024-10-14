import { Component } from '@angular/core';
import { PokemonStatsComponent } from '../components/pokemon-stats/pokemon-stats.component';
import { HeaderDetailsComponent } from '../components/header-details/header-details.component';
import { PokemonService } from '../../z-services/pokemon.service';

@Component({
  selector: 'app-details',
  standalone:true,
  imports:[PokemonStatsComponent, HeaderDetailsComponent],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {

  receivedPokemon: any[] = [];
  
  constructor(private pokemonService: PokemonService){}

  ngOnInit() {
    this.pokemonService.loadPokemonDetails(); // Cargar desde localStorage si existe


    this.pokemonService.selectedPokemon$.subscribe(details => {
      this.receivedPokemon = details;
      console.log(this.receivedPokemon);
    });
  }
}
