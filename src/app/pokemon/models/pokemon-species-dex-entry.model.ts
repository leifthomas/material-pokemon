import { NamedApiResource } from '../../common/models/named-api-resource.model';

export class PokemonSpeciesDexEntry {
    entry_number: number;
    // pokedex: NamedApiResource<Pokedex>;
    pokedex: NamedApiResource<any>;

    constructor(data?: object) {
        Object.assign(this, data);
    }
}