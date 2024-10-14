import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header-details',
  standalone: true,
  imports: [],
  templateUrl: './header-details.component.html',
  styleUrls: ['./header-details.component.css']
})
export class HeaderDetailsComponent {
  @Input() pokemonDetails: any;

  ngOnChanges() {
    if (this.pokemonDetails) {
      console.log('Detalles del Pokémon recibidos:', this.pokemonDetails);
    }
  }
}
