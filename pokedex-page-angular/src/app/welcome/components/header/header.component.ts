import { Component, signal, Signal } from '@angular/core';
import { PokemonApiService } from '../../../z-services/pokemon-api.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { PokemonService } from '../../../z-services/pokemon.service';
interface Pokemon{
  id:number;
  name: string;
  sprite: string;
  stats: [];
  types: [];
  
}
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  pokemon : string ='';
  pokemonDetails?: Pokemon;
  pokemonDetailsSignal: Signal<any> = signal<any>(null);


  constructor(private pokemonApi: PokemonApiService, private route: Router,private pokemonService:PokemonService ){

  }   

  catchPokemon(){
     this.pokemonApi.getPokemonDetails(this.pokemon).subscribe((details: any) => {
      this.pokemonDetails = {
        id: details.id.toString().padStart(3, '0'),
        name: details.name,
        sprite: details.sprites.front_default,
        stats: details.stats,
        types: details.types
      }; 
      console.log(this.pokemonDetails);
      this.pokemonService.setPokemonDetails(this.pokemonDetails); // Enviar detalles al servicio

      this.route.navigate(['/details']);

      
    })

  }


}
