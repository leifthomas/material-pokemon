import { ApiResource } from './api-resource.model';
import { NamedApiResource } from './named-api-resource.model';
import { Name } from './name.model';

export class Stat {
    id: number;
    name: string;
    game_index: number;
    is_battle_only: boolean;
    // affecting_moves: MoveStatAffectSets;
    // affecting_natures: NatureStateAffectSets;
    // characteristics: ApiResource<Characteristic>;
    // move_damage_class: NamedApiResource<MoveDamageClass>;
    names: Array<Name>;
}