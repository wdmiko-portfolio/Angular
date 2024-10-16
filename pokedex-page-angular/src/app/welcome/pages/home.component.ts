import { Component } from '@angular/core';
import { HeaderComponent } from '../components/header/header.component';
import { PokedexGridComponent } from '../components/pokedex-grid/pokedex-grid.component';
import { PokemonApiService } from '../../z-services/pokemon-api.service';
import { NgxSpinnerModule } from 'ngx-spinner';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  standalone:true,
  imports:[HeaderComponent, PokedexGridComponent,NgxSpinnerModule],
  styleUrl: './home.component.css'
})
export class HomeComponent {


}
