import { Component } from '@angular/core';
import { PokemonStatsComponent } from '../components/pokemon-stats/pokemon-stats.component';
import { HeaderDetailsComponent } from '../components/header-details/header-details.component';
import { PokemonService } from '../../z-services/pokemon.service';
import { PokemonApiService } from '../../z-services/pokemon-api.service';
import { ActivatedRoute } from '@angular/router';
import { firstValueFrom } from 'rxjs';
import { NgxSpinnerModule, NgxSpinnerService } from 'ngx-spinner';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";


@Component({
  selector: 'app-details',
  standalone:true,
  imports:[PokemonStatsComponent, HeaderDetailsComponent],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {

  receivedPokemon: any[] = [];
  pokemonid:any;
  evolData:any;
  passDataEvolDetails:any;

  constructor(private route: ActivatedRoute, private pokemonService: PokemonService, private pokemonApi:PokemonApiService){}

  ngOnInit() {
    this.pokemonService.loadPokemonDetails(); // Cargar desde localStorage si existe
 // Obtener el parámetro id de la URL
    this.pokemonid = this.route.snapshot.paramMap.get('id');
 // Aquí puedes utilizar pokemonId para buscar los detalles del Pokémon
    console.log('Pokemon ID:', this.pokemonid);
    
    this.pokemonService.selectedPokemon$.subscribe(details => {
      this.receivedPokemon = details;
      console.log(this.receivedPokemon);
    });
    
    this.getEvolutions();

   }

  
async getEvolutions() {
  try {
    // Espera a que el observable se convierta en una promesa y se resuelva
    const details = await firstValueFrom(this.pokemonApi.getPokemonEvolutions(this.pokemonid));
    // Asignar los datos obtenidos de la promesa
    this.evolData = details;
    this.getchain(this.evolData);
  } catch (error) {
    console.error("Error obteniendo evoluciones:", error);
  }


}

async getchain(data: any) {

  try {
    // Convertir el Observable en una Promesa usando firstValueFrom
    const details = await firstValueFrom(this.pokemonApi.getchainEvol(data.evolution_chain.url));
    // Procesar la cadena de evolución
    this.passDataEvolDetails = await this.getAllEvolutions(details.chain);

  } catch (error) {
    console.error("Error al obtener la cadena de evolución", error);
  }

}

  async getAllEvolutions(chain: any, evolutions: string[] = []) {
    evolutions.push(chain.species.name); // Agregamos el nombre de la especie actual
    chain.evolves_to.forEach((evolution: any) => {
      this.getAllEvolutions(evolution, evolutions); // Llamada recursiva
    });
    return evolutions; // Devolvemos el array de nombres de especies
  }
  
 
}
