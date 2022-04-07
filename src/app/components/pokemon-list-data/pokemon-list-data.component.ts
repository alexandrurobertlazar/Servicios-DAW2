import { PokemonBasicData } from './../../models/pokemon-list';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pokemon-list-data',
  templateUrl: './pokemon-list-data.component.html',
  styleUrls: ['./pokemon-list-data.component.css']
})
export class PokemonListDataComponent implements OnInit {
  @Input() pokemonBasicData: PokemonBasicData = {
    name: "",
    url: "",
  }

  @Output() eventPokemonSelected = new EventEmitter<PokemonBasicData>();
  constructor() { }

  ngOnInit(): void {
  }

}
