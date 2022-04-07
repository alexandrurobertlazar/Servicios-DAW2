import { PokemonService } from './../../services/pokemon.service';
import { PokemonList, PokemonBasicData } from './../../models/pokemon-list';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {

  @Output() pokemonSelected = new EventEmitter<PokemonBasicData>();
  pokemonList: PokemonList = {
    results: []
  }
  constructor(private pokeService: PokemonService) { }

  ngOnInit(): void {
    this.pokeService.getPokemonList().subscribe(res => {
      this.pokemonList = res
    })
  }

}
