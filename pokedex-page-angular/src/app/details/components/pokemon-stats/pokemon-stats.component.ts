import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pokemon-stats',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pokemon-stats.component.html',
  styleUrl: './pokemon-stats.component.css'
})
export class PokemonStatsComponent {
  
  @Input() pokemonDetails:any
  
  ngOnChanges() {
    if (this.pokemonDetails) {
    }
  }
}
