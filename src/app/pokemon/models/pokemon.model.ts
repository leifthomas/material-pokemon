import { NamedApiResource } from '../../common/models/named-api-resource.model';
import { PokemonSpecies } from './pokemon-species.model';
import { PokemonSprites } from './pokemon-sprites.model';
import { PokemonType } from './pokemon-type.model';

export class Pokemon {
    // abilities: Array<PokemonAbility>;
    base_experience: number;
    // forms: Array<NamedApiResource<PokemonForm>>;
    // game_indices: Array<VersionGameIndex>;
    height: number;
    // held_items: Array<PokemonHeldItem>;
    id: number;
    is_default: boolean;
    location_area_encounters: string;
    // moves: Array<PokemonMove>;
    name: string;
    order: number;
    species: NamedApiResource<PokemonSpecies>;
    sprites: PokemonSprites;
    // stats: Array<PokemonStat>;
    types: Array<PokemonType>;
    weight: number;

    constructor(data?: object) {
        Object.assign(this, data);
    }
}