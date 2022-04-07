import { Pokemon } from './../../models/pokemon';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.css']
})
export class PokemonDetailsComponent implements OnInit {
  @Input() pokemonSelected: Pokemon|null = null;
  constructor() { }

  ngOnInit(): void {
  }

}
