import { PokemonBasicData } from './../models/pokemon-list';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pokemon } from '../models/pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private httpClient: HttpClient) { }

  getPokemonList() {
    return this.httpClient.get<{results: Array<PokemonBasicData>}>('https://pokeapi.co/api/v2/pokemon');
  }

  getPokemonDetails(url: string) {
    return this.httpClient.get<Pokemon>(url);
  }
}
