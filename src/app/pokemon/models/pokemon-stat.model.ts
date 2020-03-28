import { NamedApiResource } from '../../common/models/named-api-resource.model';
import { Stat } from '../../common/models/stat.model';

export class PokemonStat {
    base_stat: number;
    effort: number;
    stat: NamedApiResource<Stat>;
}