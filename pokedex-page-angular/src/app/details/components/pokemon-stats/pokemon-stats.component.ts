import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { PokemonApiService } from '../../../z-services/pokemon-api.service';
import { firstValueFrom, of } from 'rxjs';
import { NgxSpinnerModule, NgxSpinnerService } from 'ngx-spinner';
import { BrowserModule } from '@angular/platform-browser';
import { NoopAnimationPlayer } from '@angular/animations';

@Component({
  selector: 'app-pokemon-stats',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pokemon-stats.component.html',
  styleUrl: './pokemon-stats.component.css'
})
export class PokemonStatsComponent implements OnInit {
  public evolutions:any;
  @Input() pokemonDetails:any
  @Input() evolDetails:any
  
  constructor( private api: PokemonApiService){

  }
ngOnInit(): void {
  
}

async ngOnChanges() {
  if (this.evolDetails) {
 
    // Crear un arreglo para almacenar las promesas de detalles de evolución
    const evolPromises = await this.evolDetails.map((pokemon:any) => {
      return firstValueFrom(this.api.getPokemonDetails(pokemon));

    });

    // Usar Promise.all para esperar a que todas las promesas se resuelvan
    this.evolutions = await Promise.all(evolPromises);

    // Ahora que las promesas están resueltas, puedes loguear los resultados

    console.log(this.evolutions);

  }

}


}
