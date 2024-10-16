import { Routes } from "@angular/router";
import { PokemonStatsComponent } from "./components/pokemon-stats/pokemon-stats.component";
import { DetailsComponent } from "./pages/details.component";

export const routes: Routes = [
    {
        path: ':id',  // Acepta el parámetro dinámico id
        component: DetailsComponent
      }
];

