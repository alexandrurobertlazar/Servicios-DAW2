export interface PokemonList {
  results: Array<PokemonBasicData>
}

export interface PokemonBasicData {
  name: string,
  url: string
}
