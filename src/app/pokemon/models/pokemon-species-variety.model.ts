import { NamedApiResource } from '../../common/models/named-api-resource.model';
import { Pokemon } from './pokemon.model';

export class PokemonSpeciesVariety {
    is_default: boolean;
    pokemon: NamedApiResource<Pokemon>;

    constructor(data?: object) {
        Object.assign(this, data);
    }
}