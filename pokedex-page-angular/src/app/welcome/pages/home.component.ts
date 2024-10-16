import { Component } from '@angular/core';
import { HeaderComponent } from '../components/header/header.component';
import { PokedexGridComponent } from '../components/pokedex-grid/pokedex-grid.component';
import { PokemonApiService } from '../../z-services/pokemon-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  standalone:true,
  imports:[HeaderComponent, PokedexGridComponent],
  styleUrl: './home.component.css'
})
export class HomeComponent {


}
