import { PokemonService } from './services/pokemon.service';
import { PokemonBasicData } from './models/pokemon-list';
import { Component } from '@angular/core';
import { Pokemon } from './models/pokemon';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Servicios-DAW2';
  pokemonSelected: Pokemon|null = null;

  constructor(private pokeService: PokemonService) {}
  handlePokemonSelected(pokemon: PokemonBasicData) {
    this.pokeService.getPokemonDetails(pokemon.url).subscribe(res => {
      this.pokemonSelected = res;
    });
  }
}
