import { NamedApiResource } from '../../common/models/named-api-resource.model';
import { Type } from './type.model';

export class PokemonType {
    slot: number;
    type: NamedApiResource<Type>;

    constructor(data?: Object) {
        Object.assign(this, data);
    }
}