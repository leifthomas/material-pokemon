import { NamedApiResource } from '../../common/models/named-api-resource.model';
import { PokemonSpecies } from './pokemon-species.model';

export class PokemonColor {
    id: number;
    name: string;
    // names: Array<Name>;
    pokemon_species: Array<NamedApiResource<PokemonSpecies>>;
}