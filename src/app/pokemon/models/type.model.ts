import { Name } from '../../common/models/name.model';

export class Type {
    // damage_relations: TypeRelations;
    // game_indices: Array<GenerationGameIndex>;
    // generation: NamedApiResource<Generation>;
    id: number;
    // move_damage_class: NamedApiResource<MoveDamageClass>;
    name: string;
    names: Array<Name>;
    // pokemon: Array<TypePokemon>;
    //moves: Array<NamedApiResource<Move>>;

    constructor(data?: Object) {
        Object.assign(this, data);
    }
}