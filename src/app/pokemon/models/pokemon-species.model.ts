import { NamedApiResource } from '../../common/models/named-api-resource.model';
import { FlavorText } from '../../common/models/flavor-text.model';
import { Pokemon } from './pokemon.model';
import { PokemonColor } from './pokemon-color.model';
import { PokemonSpeciesDexEntry } from './pokemon-species-dex-entry.model';
import { PokemonSpeciesVariety } from './pokemon-species-variety.model';

export class PokemonSpecies {
    base_happiness: number;
    capture_rate: number;
    color: NamedApiResource<PokemonColor>;
    defaultPokemon: Pokemon;
    // egg_groups: Array<NamedApiResource<EggGroup>>;
    // evolves_from_species: NamedApiResource<PokemonSpecies>;
    // evolution_chain: ApiResource<EvolutionChain>;
    flavor_text_entries: Array<FlavorText>;
    // form_descriptions: Array<Description>;
    forms_switchable: boolean;
    gender_rate: number;
    // genera: Array<Genus>;
    // generation: NamedApiResource<Generation>;
    // growth_rate: NamedApiResource<GrowthRate>;
    // habitat: NamedApiResource<PokemonHabitat>;
    has_gender_differences: boolean;
    hatch_counter: number;
    id: number;
    is_baby: boolean;
    name: string;
    // names: Array<Name>;
    order: number;
    // pal_park_encounters: Array<PalParkEncounterArea>;
    pokedex_numbers: Array<PokemonSpeciesDexEntry>;
    // shape: NamedApiResource<PokemonShape>;
    varieties: Array<PokemonSpeciesVariety>;

    get flavorTextEnglish () {
        return this.flavor_text_entries
            .find((flavorText: FlavorText) => flavorText.language
                .name === 'en');
    }

    constructor(data?: object) {
        Object.assign(this, data);
    }
}